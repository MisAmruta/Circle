var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    Circle.prototype.getradius = function () {
        return this.radius;
    };
    Circle.prototype.setradius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getcolor = function () {
        return this.color;
    };
    Circle.prototype.setcolor = function (color) {
        this.color = color;
    };
    Circle.prototype.toString = function () {
        return this.radius + ' ' + this.color;
    };
    Circle.prototype.getarea = function () {
        return this.radius * this.radius;
    };
    Circle.prototype.getcircum = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var circle = new Circle();
var circle1 = new Circle(5);
var circle2 = new Circle(5, "blue");
document.querySelector('#pRadius').innerHTML = 'Radius of Circle is : ' + circle2.getradius().toString();
document.querySelector('#pColor').innerHTML = 'Color of Circle is : ' + circle2.getcolor().toString();
document.querySelector('#pArea').innerHTML = 'Area of Circle is : ' + circle2.getarea().toString();
document.querySelector('#pCircum').innerHTML = 'Circumference of Circle is : ' + circle2.getcircum().toString();
