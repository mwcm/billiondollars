from flask import Flask, request, render_template
from flask_socketio import SocketIO, emit
from wtforms import Form, SubmitField
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

table = open("./static/table.html").read()

class BillionForm(Form):
	btn = SubmitField()


@app.route('/')
def index():
		form = BillionForm(request.form)
		t = total()
		#socketio.emit('init',{'table':table})
		return render_template("index.html",
							form = form,
							name = "aeiou",
							total = t,
							ta = table)

@socketio.on('spend')
def test_message(message):

	s = get_spent()
	t = total()
	socketio.emit('done', {'total':t,'spent':s})

def get_spent():
	n = 0
	tohide = []
	while n <= 3:
		r = randint(1,10000)
		if r not in spent:
			print("\n THIS IS UPDATED NUMBER: "+str(r)+"\n")
			spent.append(r)
			tohide.append(r)
			n = n +1;

	return tohide


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
