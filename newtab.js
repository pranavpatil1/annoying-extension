let font = new FontFace("Alata", "url('/Alata-Regular.ttf')");
document.fonts.add(font);

var text = localStorage.getItem("notepad") || "";
document.getElementById("notepad").value = text;
document.getElementById("notepad").oninput = (event) => {
    localStorage.setItem("notepad", event.target.value);
}

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
	var dig = Math.floor((num % (message.length * interval)) / interval);
	var update = message[dig];
	if (message[dig] !== " ") update = String.fromCharCode(message.charCodeAt(dig) - 32);
    document.getElementById("msg").innerText = message.substring(0, dig) + update + message.substring(dig + 1, message.length);
    document.body.style.backgroundColor = "hsl(" + (num % 360) + ", 70%, 50%)";
}

document.getElementById("main").onmouseover=mouseOn;
document.getElementById("main").onmouseout=mouseOut;

setInterval(update, 10);