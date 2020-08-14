let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
	// changeColor.style.backgroundColor = data.color;
	// changeColor.setAttribute('value', data.color);
});

function rotate() {
	var nodes = [];
	for (el of document.body.childNodes) {
		nodes.push(el);
	}
	console.log(nodes);
	while (nodes.length > 0) {
		var el = nodes[0];
		console.log(el.nodeType);
		if (el.nodeType === 1) {
			var rot = (Math.random() * 1 - 0.5).toFixed(1);
			var x = (Math.random() * 10 - 5).toFixed(1);
			var y = (Math.random() * 10 - 5).toFixed(1);
			el.style.transform = "rotate(" + rot + "deg) translate(" + x + "px, " + y + "px)";
		}
		for (child of el.childNodes) {
			nodes.push(child);
		}
		nodes.splice(0, 1);
	}
}

changeColor.onclick = function(element) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.executeScript(
		tabs[0].id,
		{code: rotate.toString() + '; rotate()'});
	});
	console.log(rotate.toString());
};