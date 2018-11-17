from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    return "Index Page"

@app.route("/hello")
def hello():
    return "Hello Cruel World!"

@app.route("/user/<username>")
def show_user_profile(username):
    return "User {1} {0} {2}".format(username,"foo",username)
def show_user_profile2(username):
    return "User {1} {0} {2}".format(username,"foo",username)

