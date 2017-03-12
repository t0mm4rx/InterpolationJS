# InterpolationJS
**This little lib works with P5.js**
## How to use it ?
First, add interpolation.js or interpolation.min.js in your index.html, **after you link the P5 script** :
```html
<script src="p5.min.js"></script>
<script src="interpolation.min.js"></script>
``
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
    manager.interpolate(from, to, 1000, InterpolationFunctions.easeInOutQuart, function (v) {
      console.log("Value : " + v);
    }, function () {
      console.log("Interpolation ended !");
    });
}
```
The interpolate function takes 6 arguments :
1. From
2. To
3. Duration (in milliseconds)
4. Interpolation type (see below)
5. Progress callback
6. Finish callback

## Interpolation types
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

You can add you own easing function.
