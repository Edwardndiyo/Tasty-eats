from flask_jwt_extended import create_access_token, get_jwt_identity

def generate_token(user_id, role):
    """Generate a JWT access token"""
    return create_access_token(identity={"id": user_id, "role": role})

def get_current_user():
    """Get the current user identity from JWT"""
    return get_jwt_identity()
