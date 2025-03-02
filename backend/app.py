from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config
from models import init_db
from routes.auth import auth_bp

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
JWTManager(app)

# Initialize Database
init_db(app)

# Register Blueprints
app.register_blueprint(auth_bp, url_prefix='/auth')

if __name__ == '__main__':
    app.run(debug=True)
