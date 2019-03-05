from flask import Flask, render_template
app = Flask(__name__)#, template_folder='template')

@app.route('/')
def hello_world():
    author = "Me"
    name = "You"
    open('./static/script.js').read()
    return open('./static/LunchMenu.html').read()

if __name__ == "__main__":
    app.run(debug = True)
