from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token
from models import mysql

auth_bp = Blueprint('auth', __name__)
bcrypt = Bcrypt()

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    role = data.get('role', 'customer')  # Default role is customer

    if not (name and email and password):
        return jsonify({"error": "Missing required fields"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    cursor = mysql.connection.cursor()
    try:
        cursor.execute("INSERT INTO users (name, email, password, role) VALUES (%s, %s, %s, %s)",
                       (name, email, hashed_password, role))
        mysql.connection.commit()
        user_id = cursor.lastrowid

        if role == "restaurant":
            cursor.execute("INSERT INTO restaurants (owner_id, name) VALUES (%s, %s)", (user_id, data.get('restaurant_name', '')))
            mysql.connection.commit()

        return jsonify({"message": "User registered successfully"}), 201
    except:
        return jsonify({"error": "User already exists"}), 400
    finally:
        cursor.close()

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    cursor = mysql.connection.cursor()
    cursor.execute("SELECT id, password, role FROM users WHERE email=%s", (email,))
    user = cursor.fetchone()

    if user and bcrypt.check_password_hash(user[1], password):
        access_token = create_access_token(identity={"id": user[0], "role": user[2]})
        return jsonify({"token": access_token, "role": user[2]}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401
