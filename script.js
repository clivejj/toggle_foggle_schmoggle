var canvas = document.getElementById("cj");
var clearButton = document.getElementById("clear");
var toggleButton = document.getElementById("toggle");

//if toggleOn = 1, then squares will be drawn
//if toggleOn = -1, draw circles
var toggleOn = 1;

var ctx = canvas.getContext("2d");

toggleButton.addEventListener('click', toggle);

function toggle(e) {
    toggleOn *= -1;
    console.log(toggleOn);
};

clearButton.addEventListener('click', clear);

function clear(e) {
    console.log("clearing!");
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
};

canvas.addEventListener('click', draw);
function draw(e) {
    console.log("drawing!");
    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    if (toggleOn == -1) {
	ctx.beginPath();
	ctx.arc(x, y, 20, 0, 2 * Math.PI);
	ctx.fill();
    };
    if (toggleOn == 1) {
	ctx.beginPath();
	ctx.rect(x - 20, y - 20, 40, 40);
	ctx.fill();
    };
};
    



    
