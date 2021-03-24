import time
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

@app.route('/time', methods=['POST'])
def get_current_time():
    data = request.get_json()
    total = data['a'] + data['b']
    print(total)
    return jsonify(total)
