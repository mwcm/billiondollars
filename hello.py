from flask import Flask, request, render_template
from flask_socketio import SocketIO, emit
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
	moneyarea  = TextAreaField(default = billiontxt)


@app.route('/')
def index():
		form = BillionForm(request.form)
		t = total()
		return render_template("index.html",
							form = form,
							name = "aeiou",
							total = t)

@socketio.on('spend')
def test_message(message):
	m = get_money()
	t = total()
	socketio.emit('spent', {'total':t,'money':m})

def nth_replace(s, sub, repl, nth):
    find = s.find(sub)
    # if find is not p1 we have found at least one match for the substring
    i = find != -1
    # loop util we find the nth or we find no match
    while find != -1 and i != nth:
        # find + 1 means we start at the last match start index + 1
        find = s.find(sub, find + 1)
        i += 1
    # if i  is equal to nth we found nth matches so replace
    if i == nth:
        return s[:find]+repl+s[find + len(sub):]
    return s

def get_money():
	n = 0
	newtxt = billiontxt
	while n <= 3:
		r = randint(1,10000)
		if r not in spent:
			newtxt =  nth_replace(newtxt, "100,000","             ",r)
			print("\n THIS IS UPDATED NUMBER: "+str(r)+"\n")
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
