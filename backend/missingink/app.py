from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello Hacker World!"

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return 'User {}'.format( username)

@app.route("/d/<docid>/")
def doc_edit(docid):
    pass

@app.route('/d/<docid>/update',methods=["POST","GET"])
def doc_update(docid):
    # show the user profile for that user
    return 'User {}'.format( docid)

