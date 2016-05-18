from flask import Flask, request, render_template
from wtforms import Form, TextField, TextAreaField
from random import randint

app = Flask(__name__)
app.debug = True

spent = []

billiontxt = open("./static/billion.txt").read()

class BillionForm(Form):
	body  = TextAreaField(default = billiontxt)

@app.route('/', methods=['GET', 'POST'])
def index():
	if request.method == 'POST':
		n = 0
		for n in range(0,3):
			r = randint(0,10000)
			if r not in spent:
				billiontxt.replace("100,000","       ", r)
				spent.append(r)
				n = n +1;
				print(r)


		form = BillionForm(request.form, "AEIOAEIOAEIOEAI")
		return render_template("index.html",
							form = form,
							name = "aeiou")

	if request.method == 'GET':
		form = BillionForm(request.form, "AEIOAEIOAEIOEAI")
		return render_template("index.html",
							form = form,
							name = "aeiou")

if __name__ == '__main__' :
	app.run()
