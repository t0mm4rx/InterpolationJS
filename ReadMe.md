# InterpolationJS
**This little lib works with P5.js.**
## How to use it ?
First, add interpolation.js or interpolation.min.js in your index.html, **after you link the P5 script** :
```html
<script src="p5.min.js"></script>
<script src="interpolation.min.js"></script>
```
Then, you have to create an InterpolationManager object :
```javascript
var manager;
function setup() {
    createCanvas(500, 400);
    //Create the interpolation manager
    manager = new InterpolationManager();
}

function draw() {
    background(100);
    //Very important
    manager.update();
}
```
Then, you can launch a new interpolation :
```javascript
function setup() {
    //...
    manager = new InterpolationManager();
    manager.interpolate(0, 100, 1000, InterpolationFunctions.easeInOutQuart, function (v) {
      console.log("Value : " + v);
    }, function () {
      console.log("Interpolation ended !");
    });
}
```
The interpolate function takes 6 arguments :
* From
* To
* Duration (in milliseconds)
* Interpolation type (see below)
* Progress callback
* Finish callback

## Interpolation types
You can take a look at demo.html.
* InterpolationTypes.linear
* InterpolationTypes.easeInQuad
* InterpolationTypes.easeOutQuad
* InterpolationTypes.easeInOutQuad
* InterpolationTypes.easeInCubic
* InterpolationTypes.easeOutCubic
* InterpolationTypes.easeInOutCubic
* InterpolationTypes.easeInQuart
* InterpolationTypes.easeOutQuart
* InterpolationTypes.easeInOutQuart
* InterpolationTypes.easeInQuint
* InterpolationTypes.easeOutQuint
* InterpolationTypes.easeInOutQuint

You can add you own easing functions.
