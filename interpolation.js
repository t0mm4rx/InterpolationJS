InterpolationTypes = {
  linear: function (t) { return t },
  easeInQuad: function (t) { return t*t },
  easeOutQuad: function (t) { return t*(2-t) },
  easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
  easeInCubic: function (t) { return t*t*t },
  easeOutCubic: function (t) { return (--t)*t*t+1 },
  easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
  easeInQuart: function (t) { return t*t*t*t },
  easeOutQuart: function (t) { return 1-(--t)*t*t*t },
  easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
  easeInQuint: function (t) { return t*t*t*t*t },
  easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
  easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
}

function InterpolationManager () {

  this.interpolations = [];

  this.update = function () {
    for (var i = 0; i < this.interpolations.length; i++) {
      this.interpolations[i].update();
    }
  }

  this.interpolate = function (from, to, duration, interpolationFunction, progressCallback, finishCallback) {
    this.interpolations.push(new Interpolation(from, to, duration, interpolationFunction, progressCallback, finishCallback, this));
  }

}

function Interpolation (from, to, duration, interpolationFunction, progressCallback, finishCallback, manager) {
  this.timeB = getTime();
  this.manager = null;

  this.update = function () {
    if (getTime() - this.timeB < duration) {
      progressCallback(map(interpolationFunction(map(getTime() - this.timeB, 0, duration, 0, 1)), 0, 1, from, to));
    } else {
      finishCallback();
      if (manager) {
        manager.interpolations.splice(manager.interpolations.indexOf(this), 1);
      }
    }
  }

}

function getTime () {
  return new Date().getTime();
}
