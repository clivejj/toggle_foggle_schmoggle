var canvas = document.getElementById("cj");
var clearButton = document.getElementById("clear");
var toggleButton = document.getElementById("toggle");

//if toggleOn = 1, then squares will be drawn
//if toggleOn = -1, draw circles
var toggleOn = 1;

var ctx = canvas.getContext("2d");

toggleButton.addEventListener('click', toggle);
var toggle = function(e) {
    toggleOn *= -1;
    console.log(toggleOn);
};

    
