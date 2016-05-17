from flask import Flask, request, render_template
from wtforms import Form, TextField, TextAreaField

app = Flask(__name__)
app.debug = True

billiontxt = open("./static/billion.txt").read()

class BillionForm(Form):
	body  = TextAreaField(default = billiontxt)

@app.route('/', methods=['GET', 'POST'])
def index():
	form = BillionForm(request.form, "AEIOAEIOAEIOEAI")
	return render_template("index.html",
						form = form,
						name = "aeiou")


if __name__ == '__main__' :
	app.run()
