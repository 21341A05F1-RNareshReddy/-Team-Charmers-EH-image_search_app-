from app import db

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(255), nullable=False)
    user = db.Column(db.String(255), nullable=False)
    height = db.Column(db.Integer, nullable=False)
    width = db.Column(db.Integer, nullable=False)
    downloads = db.Column(db.Integer, nullable=False)
    views = db.Column(db.Integer, nullable=False)
