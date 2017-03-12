var manager;
var x = 50;

function setup() {
  createCanvas(400, 400);
  manager = new InterpolationManager();
  go();
}

function draw() {
  background(100);
  fill(255);
  noStroke();
  ellipse(x, 50, 20, 20);
  manager.update();
}

function go() {
  var from = ((x > width / 2) ? width - 50 : 50), to = ((x > width / 2) ? 50 : width - 50);
  manager.interpolate(from, to, 1000, InterpolationTypes.easeInOutQuart, function (v) {
    x = v;
  }, function () {
    go();
  });
}
