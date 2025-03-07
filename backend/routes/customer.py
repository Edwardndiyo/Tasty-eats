# from flask import Blueprint, jsonify
# from models import mysql  # Import MySQL connection

# customer_bp = Blueprint("customer", __name__)

# @customer_bp.route('/meals', methods=['GET'])
# def get_meals():
#     sample_meals = [
#         {"id": 1, "name": "Classic Beef Burger", "price": 12.99, "description": "Juicy beef patty with fresh vegetables on a toasted bun.", "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop", "restaurant": "Flame Grill House", "cuisine": "American", "type": "Non-Vegetarian", "popularity": 4.8},
#         {"id": 2, "name": "Margherita Pizza", "price": 14.99, "description": "Traditional Italian pizza with tomato, mozzarella, and basil.", "image": "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&h=600&fit=crop", "restaurant": "Bella Italia", "cuisine": "Italian", "type": "Vegetarian", "popularity": 4.6},
#     ]

#     cursor = mysql.connection.cursor(dictionary=True)
#     try:
#         cursor.execute(""" SELECT
#                 menu_items.id,
#                 menu_items.name,
#                 menu_items.description,
#                 menu_items.price,
#                 menu_items.image_url,
#                 restaurants.name AS restaurant_name
#             FROM menu_items
#             JOIN restaurants ON menu_items.restaurant_id = restaurants.id""")
#         db_meals = cursor.fetchall()
#     except Exception as e:
#         return jsonify({"error": "Database error", "details": str(e)}), 500
#     finally:
#         cursor.close()

#     return jsonify(sample_meals + db_meals)



from flask import Blueprint, jsonify
from models import mysql  # Import MySQL connection
import MySQLdb.cursors  # Import MySQLdb cursors

customer_bp = Blueprint("customer", __name__)


@customer_bp.route('/meals', methods=['GET'])
def get_meals():
    sample_meals = [
        {"id": 1, "name": "Classic Beef Burger", "price": 12.99, "description": "Juicy beef patty with fresh vegetables on a toasted bun.", "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop", "restaurant": "Flame Grill House", "cuisine": "American", "type": "Non-Vegetarian", "popularity": 4.8},
        {"id": 2, "name": "Margherita Pizza", "price": 14.99, "description": "Traditional Italian pizza with tomato, mozzarella, and basil.", "image": "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&h=600&fit=crop", "restaurant": "Bella Italia", "cuisine": "Italian", "type": "Vegetarian", "popularity": 4.6},
    ]

    try:
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("""
            SELECT menu_items.id, menu_items.name, menu_items.description, menu_items.price,
                   menu_items.image_url, restaurants.name AS restaurant_name
            FROM menu_items
            JOIN restaurants ON menu_items.restaurant_id = restaurants.id
        """)
        db_meals = list(cursor.fetchall())  # Convert tuple to list ✅
        cursor.close()
    except Exception as e:
        print("Database error:", str(e))
        return jsonify({"error": "Database error", "details": str(e)}), 500

    return jsonify(sample_meals + db_meals)  # Now both are lists ✅

# @customer_bp.route('/meals', methods=['GET'])
# def get_meals():
#     sample_meals = [
#         {"id": 1, "name": "Classic Beef Burger", "price": 12.99, "description": "Juicy beef patty with fresh vegetables on a toasted bun.", "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop", "restaurant": "Flame Grill House", "cuisine": "American", "type": "Non-Vegetarian", "popularity": 4.8},
#         {"id": 2, "name": "Margherita Pizza", "price": 14.99, "description": "Traditional Italian pizza with tomato, mozzarella, and basil.", "image": "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&h=600&fit=crop", "restaurant": "Bella Italia", "cuisine": "Italian", "type": "Vegetarian", "popularity": 4.6},
#     ]

#     # Fix cursor instantiation
#     cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
#     try:
#         cursor.execute("""SELECT
#                 menu_items.id,
#                 menu_items.name,
#                 menu_items.description,
#                 menu_items.price,
#                 menu_items.image_url,
#                 restaurants.name AS restaurant_name
#             FROM menu_items
#             JOIN restaurants ON menu_items.restaurant_id = restaurants.id""")
#         db_meals = cursor.fetchall()
#     except Exception as e:
#         return jsonify({"error": "Database error", "details": str(e)}), 500
#     finally:
#         cursor.close()

#     return jsonify(sample_meals + db_meals)
