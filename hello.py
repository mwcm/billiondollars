from flask import Flask, request, render_template
from wtforms import Form, TextField, TextAreaField

app = Flask(__name__)
app.debug = True


class BillionForm(Form):
	body  = TextAreaField(u'Text')

number = 100000
numbers = [number] * 10000

@app.route('/', methods=['GET', 'POST'])
def index():
	form = BillionForm(request.form)
	return render_template("index.html",
						form = form)


if __name__ == '__main__' :
	app.run()
