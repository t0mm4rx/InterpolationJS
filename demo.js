var manager;
var margin = 20;
var _height = 150;
var length = 150;
var particles = [];

function setup() {
  createCanvas(710, 650);
  manager = new InterpolationManager();
  particles.push(new Particle(margin, 0, InterpolationTypes.easeInQuad));
  particles.push(new Particle(260, 0, InterpolationTypes.easeOutQuad));
  particles.push(new Particle(520, 0, InterpolationTypes.easeInOutQuad));
  particles.push(new Particle(margin, _height, InterpolationTypes.easeInCubic));
  particles.push(new Particle(260, _height, InterpolationTypes.easeOutCubic));
  particles.push(new Particle(520, _height, InterpolationTypes.easeInOutCubic));
  particles.push(new Particle(margin, _height * 2, InterpolationTypes.easeInQuart));
  particles.push(new Particle(260, _height * 2, InterpolationTypes.easeOutQuart));
  particles.push(new Particle(520, _height * 2, InterpolationTypes.easeInOutQuart));
  particles.push(new Particle(margin, _height * 3, InterpolationTypes.easeInQuint));
  particles.push(new Particle(260, _height * 3, InterpolationTypes.easeOutQuint));
  particles.push(new Particle(520, _height * 3, InterpolationTypes.easeInOutQuint));
}

function draw() {
  background(100);
  for (var i = 0; i < particles.length; i++) {
    particles[i].draw();
  }
  manager.update();
}
