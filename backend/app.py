from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config
from models import init_db
from routes.auth import auth_bp
from routes.customer import customer_bp
import utils.jwt_utils

app = Flask(__name__)
app.config.from_object(Config)

# ✅ Simplified CORS configuration
CORS(
    app,
    origins=[
        "http://localhost:5173",
        "https://zamani101.pythonanywhere.com",
        "https://paradox-tasty-eats.vercel.app",
        "https://bf3b-102-90-82-148.ngrok-free.app"
    ],
    methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization"],
    supports_credentials=True
)

# Initialize JWT
jwt = JWTManager(app)

# Initialize Database
init_db(app)

# Register Blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(customer_bp, url_prefix='/api')




if __name__ == '__main__':
    app.run(debug=True)