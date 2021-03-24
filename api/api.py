import time
import re
from flask import Flask, request, jsonify
from flask_cors import CORS
import webbrowser
import json
#from flask_mongoengine import MongoEngine

app = Flask(__name__)

'''
app.config['MONGODB_SETTINGS'] = {
    'db': 'chunkeydb',
    'host': 'localhost',
    'port': 27017
}
db = MongoEngine()
db.init_app(app)

class User(db.Document):
    username = db.StringField()
    password = db.StringField()
    def to_json(self):
        return {"username": self.username,
                "password": self.password}


@app.route('/create_user', methods=['PUT'])
def create_user():
    record = json.loads(request.data)
    user = User(username=record['username'],
                password=record['password'])
    user.save()
    print(User.objects(username="a").first())

    return jsonify(user.to_json())
'''

@app.route('/add_nums', methods=['POST'])
def get_sum():
    data = request.get_json()
    print(data)
    numbers = re.findall(r"[+-]? *(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?", str(data['a']))
    sum = 0
    for i in range(len(numbers)):
        sum = sum + float(numbers[i])
    print(sum)
    return jsonify(sum)

@app.route('/open_webpage', methods=['POST'])
def open_webpage():
    data = request.get_json()
    url = data['a']
    print(url)
    try:
        webbrowser.open('http://' + url, new=0, autoraise=False)
        return jsonify("Complete!")
    #needs work - return after error or never go
    except webbrowser.Error:
        return jsonify("Failure - invalid website URL")