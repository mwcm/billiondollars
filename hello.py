from flask import Flask, request, render_template
from flask.ext.socketio import SocketIO, emit
from wtforms import Form, TextField, TextAreaField
from random import randint
from gevent import monkey

#http://blog.miguelgrinberg.com/post/easy-websockets-with-flask-and-gevent
#http://www.shanelynn.ie/asynchronous-updates-to-a-webpage-with-flask-and-socket-io/
#http://code.tutsplus.com/tutorials/creating-a-web-app-from-scratch-using-python-flask-and-mysql-part-6--cms-23402
#http://code.tutsplus.com/tutorials/creating-a-web-app-from-scratch-using-python-flask-and-mysql--cms-22972


monkey.patch_all()

app = Flask(__name__)
app.debug = True
socketio = SocketIO(app, async_mode='gevent')


spent = []

billiontxt = open("./static/billion.txt").read()

class BillionForm(Form):
	body  = TextAreaField(default = billiontxt)


@socketio.on('my event')
def test_message(message):
	emit('aeiou',{'data': 'got it!'})
	#print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
	

@app.route('/')
def index():
		form = BillionForm(request.form)
		t = total()
		return render_template("index.html",
							form = form,
							name = "aeiou",
							total = t)



@app.route('/spend',methods=['POST'])
def spend():
		print("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
		form = BillionForm()
		form.body = get_money()
		t = total()
		return render_template('index.html', form = form, total = t)


def get_money():
	print("AAAAAAAAAAA")
	n = 0
	for n in range(0,3):
			r = randint(0,10000)
			if r not in spent:
				newtxt = billiontxt.replace("100,000","       ", r)
				spent.append(r)
				n = n +1;
	return newtxt


def total():
	old = 10000
	if len(spent) < 10000:
		for i in spent:
			old = old - 1;

		return old * 100000
		
	else:
		return 0;


if __name__ == '__main__' :
	socketio.run(app, debug = True)
