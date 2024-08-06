from flask import Flask, request, jsonify
import requests
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config.Config')
db = SQLAlchemy(app)

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String, nullable=False)
    user = db.Column(db.String, nullable=False)
    height = db.Column(db.Integer, nullable=False)
    width = db.Column(db.Integer, nullable=False)
    downloads = db.Column(db.Integer, nullable=False)
    views = db.Column(db.Integer, nullable=False)

@app.route('/search', methods=['GET'])
def search_images():
    search_term = request.args.get('query')
    orientation = request.args.get('orientation')
    category = request.args.get('category')
    
    params = {
        'query': search_term,
        'orientation': orientation,
        'category': category,
        'client_id': 'vczKl55EqBwhYxYb_z-VEvlkDrp56lrmWoVldU2VSrE'
    }
    
    response = requests.get('https://api.unsplash.com/search/photos', params=params)
    data = response.json()
    
    images = []
    for item in data['results']:
        image = {
            'url': item['urls']['regular'],
            'user': item['user']['name'],
            'height': item['height'],
            'width': item['width'],
            'downloads': item.get('downloads', 0),
            'views': item.get('views', 0)
        }
        images.append(image)
        
        # Save to database
        new_image = Image(
            url=image['url'],
            user=image['user'],
            height=image['height'],
            width=image['width'],
            downloads=image['downloads'],
            views=image['views']
        )
        db.session.add(new_image)
    
    db.session.commit()
    
    return jsonify(images)

if __name__ == '__main__':
    app.run(debug=True)
