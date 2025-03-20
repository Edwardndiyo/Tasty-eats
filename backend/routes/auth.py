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
