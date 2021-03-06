from flask import Flask, jsonify, send_from_directory
from random import randint

app = Flask(__name__, static_folder='../build')


@app.route('/random')
def random():
    return jsonify({'value': randint(0, 100)})


@app.route('/')
def root():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)
