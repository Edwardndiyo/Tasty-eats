from flask import Blueprint, jsonify
from models import mysql  # Import MySQL connection
import MySQLdb.cursors  # Import MySQLdb cursors

customer_bp = Blueprint("customer", __name__)


@customer_bp.route('/meals', methods=['GET'])
def get_meals():
    sample_meals = [
        # {"id": 1, "name": "Classic Beef Burger", "price": 12.99, "description": "Juicy beef patty with fresh vegetables on a toasted bun.", "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop", "restaurant": "Flame Grill House", "cuisine": "American", "type": "Non-Vegetarian", "popularity": 4.8},
        # {"id": 2, "name": "Margherita Pizza", "price": 14.99, "description": "Traditional Italian pizza with tomato, mozzarella, and basil.", "image": "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&h=600&fit=crop", "restaurant": "Bella Italia", "cuisine": "Italian", "type": "Vegetarian", "popularity": 4.6},
        {
        "id": 1,
        "name": "Classic Beef Burger",
        "price": 12.99,
        "description": "Juicy beef patty with fresh vegetables on a toasted bun.",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
        "restaurant": "Flame Grill House",
        "cuisine": "American",
        "type": "Non-Vegetarian",
        "popularity": 4.8,
    },
    {
        "id": 2,
        "name": "Margherita Pizza",
        "price": 14.99,
        "description": "Traditional Italian pizza with tomato, mozzarella, and basil.",
        "image": "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&h=600&fit=crop",
        "restaurant": "Bella Italia",
        "cuisine": "Italian",
        "type": "Vegetarian",
        "popularity": 4.6,
    },
    {
        "id": 3,
        "name": "Chicken Tikka Masala",
        "price": 16.99,
        "description": "Tender chicken in a rich, spiced tomato-based sauce.",
        "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop",
        "restaurant": "Spice Garden",
        "cuisine": "Indian",
        "type": "Non-Vegetarian",
        "popularity": 4.7,
    },
    {
        "id": 4,
        "name": "Rainbow Sushi Roll",
        "price": 18.99,
        "description": "Colorful sushi roll with salmon, tuna, avocado, and cucumber.",
        "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=600&fit=crop",
        "restaurant": "Sushi Master",
        "cuisine": "Japanese",
        "type": "Non-Vegetarian",
        "popularity": 4.9,
    },
    {
        "id": 5,
        "name": "Caesar Salad",
        "price": 10.99,
        "description": "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.",
        "image": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&h=600&fit=crop",
        "restaurant": "Flame Grill House",
        "cuisine": "American",
        "type": "Vegetarian",
        "popularity": 4.5,
    },
    {
        "id": 6,
        "name": "Paneer Tikka",
        "price": 13.99,
        "description": "Marinated and grilled Indian cottage cheese with vegetables.",
        "image": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&h=600&fit=crop",
        "restaurant": "Spice Garden",
        "cuisine": "Indian",
        "type": "Vegetarian",
        "popularity": 4.6,
    },
    {
        "id": 7,
        "name": "Spaghetti Carbonara",
        "price": 15.99,
        "description": "Classic Italian pasta with creamy sauce, pancetta, and egg.",
        "image": "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&h=600&fit=crop",
        "restaurant": "Bella Italia",
        "cuisine": "Italian",
        "type": "Non-Vegetarian",
        "popularity": 4.7,
    },
    {
        "id": 8,
        "name": "Miso Soup",
        "price": 6.99,
        "description": "Traditional Japanese soup with tofu, seaweed, and green onions.",
        "image": "https://images.unsplash.com/photo-1582271929389-5e6eedba2a4f?w=800&h=600&fit=crop",
        "restaurant": "Sushi Master",
        "cuisine": "Japanese",
        "type": "Vegetarian",
        "popularity": 4.4,
    }
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



@customer_bp.route('/restaurants', methods=['GET'])
def get_restaurants():
    sample_restaurants = [
        {
            "id": 1,
            "name": "Flame Grill House",
            "logo": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=80&h=80&fit=crop",
            "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=800&fit=crop",
            "description": "Premium steaks and gourmet burgers in a cozy atmosphere.",
            "categories": ["Steakhouse", "Burgers", "American"],
            "rating": 4.8,
        },
        {
            "id": 2,
            "name": "Spice Garden",
            "logo": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=80&h=80&fit=crop",
            "image": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&h=800&fit=crop",
            "description": "Authentic Indian cuisine with a modern twist.",
            "categories": ["Indian", "Vegetarian", "Curry"],
            "rating": 4.7,
        },
        {
            "id": 3,
            "name": "Bella Italia",
            "logo": "https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=80&h=80&fit=crop",
            "image": "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=1200&h=800&fit=crop",
            "description": "Traditional Italian dishes made with imported ingredients.",
            "categories": ["Italian", "Pizza", "Pasta"],
            "rating": 4.6,
        },
        {
            "id": 4,
            "name": "Sushi Master",
            "logo": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=80&h=80&fit=crop",
            "image": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=1200&h=800&fit=crop",
            "description": "Fresh and creative Japanese cuisine by master chefs.",
            "categories": ["Japanese", "Sushi", "Seafood"],
            "rating": 4.9,
        },
    ]

    try:
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("""
            SELECT id, name, logo_url AS logo, image_url AS image, description, 
                   categories, rating FROM restaurants
        """)
        db_restaurants = list(cursor.fetchall())  # Convert to list ✅
        cursor.close()

        # Convert comma-separated categories to lists
        for restaurant in db_restaurants:
            restaurant["categories"] = restaurant["categories"].split(",") if restaurant["categories"] else []

    except Exception as e:
        print("Database error:", str(e))
        return jsonify({"error": "Database error", "details": str(e)}), 500

    return jsonify(sample_restaurants + db_restaurants)  # Append both lists ✅