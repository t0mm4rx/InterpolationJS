function Particle(x, y, type) {
    this.from = x + margin / 2;
    this.to = x + length - margin / 2;
    this.a = true;
    this.x = this.from;
    var _this = this;
    this.go = function() {
        if (this.a) {
            this.a = false;
            manager.interpolate(this.from, this.to, 1000, type, function(v) {
                _this.x = v;
            }, function() {
                _this.go();
            });
        } else {
          this.a = true;
          manager.interpolate(this.to, this.from, 1000, type, function(v) {
              _this.x = v;
          }, function() {
              _this.go();
          });
        }
    }
    this.go();

    this.draw = function() {
        fill(255);
        noStroke();
        ellipse(this.x, y + _height / 2, 20, 20);
        textAlign(CENTER);
        textSize(20);
        text(type.name, x + length / 2, y + _height);
    }

}
