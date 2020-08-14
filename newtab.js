var message = "food is good";
var num = 0;
var interval = 10;
var updating = !document.getElementById("main").mouseIsOver;

function mouseOut() {
	updating = true;
}

function mouseOn() {
	updating = false;
}

function update () {
	if (!updating) return;
	num ++;
	num %= message.length * interval;
	var dig = Math.floor(num / interval);
	var update = message[dig];
	if (message[dig] !== " ") update = String.fromCharCode(message.charCodeAt(dig) - 32);
	document.getElementById("msg").innerText = message.substring(0, dig) + update + message.substring(dig + 1, message.length);
}

document.getElementById("main").onmouseover=mouseOn;
document.getElementById("main").onmouseout=mouseOut;

setInterval(update, 10);