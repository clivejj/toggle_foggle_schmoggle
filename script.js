var canvas = document.getElementById("cj");
var clearButton = document.getElementById("clear");

var ctx = canvas.getContext("2d");

var lastX = -1;
var lastY = -1;


clearButton.addEventListener('click', clear);

function clear(e) {
    console.log("clearing!");
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    lastX = -1;
    lastY = -1;
};

canvas.addEventListener('click', draw);
function draw(e) {
    console.log("drawing!");
    var x = e.offsetX;
    var y = e.offsetY;
    if (lastX != -1) {
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(x, y);
	ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fill();
    lastX = x;
    lastY = y;
}
	





