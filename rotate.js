var updating = false;

function mouseOut() {
	updating = true;
}

function mouseOn() {
	updating = false;
}

document.body.onmouseover=mouseOn;
document.body.onmouseout=mouseOut;

var i = 0;
var nodes = [];
var translate = [];
for (el of document.body.childNodes) {
    nodes.push(el);
}
while (i  < nodes.length) {
    var el = nodes[i];
    if (el.nodeType === 1) {
        var rot = (Math.random() * 1 - 0.5).toFixed(1);
        var x = (Math.random() * 10 - 5).toFixed(1);
        var y = (Math.random() * 10 - 5).toFixed(1);
        translate.push({
            rot: rot,
            x: x,
            y: y
        });
    }
    for (child of el.childNodes) {
        nodes.push(child);
    }
    i ++;
}

var iterationNum = 0;
var moving = false;
function rotate() {
    if (updating) {
        moving = true;
        iterationNum ++;
        var prop = iterationNum / 100;
        var i = 0;
        while (i  < nodes.length) {
            var el = nodes[i];
            if (el.nodeType === 1) {
                el.style.transform = "rotate(" + (translate[i].rot * prop) + "deg) translate(" + (translate[i].x * prop) + "px, " + (translate[i].y * prop) + "px)";
            }
            i ++;
        }
    } else {
        if (moving) {
            moving = false;
            var i = 0;
            while (i  < nodes.length) {
                var el = nodes[i];
                if (el.nodeType === 1) {
                    el.style.transform = "rotate(0deg) translate(0px, 0px)";
                }
                i ++;
            }
        }
        iterationNum = 0;
    }
}

setInterval (rotate, 50);