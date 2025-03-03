# from flask import Blueprint, request, jsonify
# from flask_bcrypt import Bcrypt
# # from flask_jwt_extended import jwt_required
# from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
# from models import mysql
# import json
# from utils.jwt_utils import generate_token, get_current_user  # Import JWT functions

# auth_bp = Blueprint('auth', __name__)
# bcrypt = Bcrypt()

# @auth_bp.route('/signup', methods=['POST'])
# def signup():
#     data = request.get_json()
#     name = data.get('name')
#     email = data.get('email')
#     password = data.get('password')
#     role = data.get('role', 'customer')

#     if not (name and email and password):
#         return jsonify({"error": "Missing required fields"}), 400

#     hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

#     cursor = mysql.connection.cursor()
#     try:
#         cursor.execute("INSERT INTO users (name, email, password, role) VALUES (%s, %s, %s, %s)",
#                        (name, email, hashed_password, role))
#         mysql.connection.commit()
#         return jsonify({"message": "User registered successfully"}), 201
#     except:
#         return jsonify({"error": "User already exists"}), 400
#     finally:
#         cursor.close()

# @auth_bp.route('/login', methods=['POST'])
# def login():
#     data = request.get_json()
#     email = data.get('email')
#     password = data.get('password')

#     cursor = mysql.connection.cursor()
#     cursor.execute("SELECT id, password, role FROM users WHERE email=%s", (email,))
#     user = cursor.fetchone()

#     if user and bcrypt.check_password_hash(user[1], password):
#         # Pass a dictionary directly (Flask-JWT handles JSON encoding)
#         access_token = create_access_token(identity={"id": user[0], "role": user[2]})
#         return jsonify({"token": access_token, "role": user[2]}), 200
#     else:
#         return jsonify({"error": "Invalid credentials"}), 401

# @auth_bp.route('/admin/dashboard', methods=['GET'])
# @jwt_required()
# def admin_dashboard():
#     user = get_jwt_identity()  # Now it correctly returns a dictionary

#     if user["role"] != "admin":
#         return jsonify({"error": "Unauthorized"}), 403

#     return jsonify({"message": "Welcome Admin!"}), 200




from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config
from models import init_db
from routes.auth import auth_bp
import utils.jwt_utils  # ✅ Import JWT utils so functions can be used

app = Flask(__name__)
app.config.from_object(Config)

# ✅ Allow specific origins and methods to fix CORS issues
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

# Initialize JWT
jwt = JWTManager(app)  # ✅ Make sure to assign it to a variable

# Initialize Database
init_db(app)

# Register Blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')

if __name__ == '__main__':
    app.run(debug=True)
