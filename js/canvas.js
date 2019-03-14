//partie du canvas
var boutonEffacerElt = document.getElementById("effacer");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var dessin = false;
ctx.strokeStyle = "#222222";
ctx.lineWith = 2;

// Initialisation du dessin par MouseEvent
var drawing = false;
var mousePos = {
  x: 0,
  y: 0
};
var lastPos = mousePos;
canvas.addEventListener("mousedown", function(e) {
  dessin = true;
  drawing = true;
  lastPos = getMousePos(canvas, e);
}, false);
canvas.addEventListener("mouseup", function(e) {
  drawing = false;
}, false);
canvas.addEventListener("mousemove", function(e) {
  mousePos = getMousePos(canvas, e);
}, false);

// Prendre la position de la sourie
function getMousePos(canvasDom, mouseEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: mouseEvent.clientX - rect.left,
    y: mouseEvent.clientY - rect.top
  };
};

// Interval de dessin sur l'écran
window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimaitonFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

// Dessin dans le Canvas
function renderCanvas() {
  if (drawing) {
    ctx.moveTo(lastPos.x, lastPos.y);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.stroke();
    lastPos = mousePos;
  }
};

// Mise en place de l'annimation
(function drawLoop() {
  requestAnimFrame(drawLoop);
  renderCanvas();
})();

// PrÃ©venir du scrolling lors du dessin dans le Canvas
document.body.addEventListener("touchstart", function(e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchend", function(e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchmove", function(e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);

// Fonction reset
function clearCanvas() {
  canvas.width = canvas.width;
  dessin = false;
};

// Effacer le canvas
boutonEffacerElt.addEventListener("click", function() {
  clearCanvas();
});