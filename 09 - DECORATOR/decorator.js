class Shape {}

class Circle extends Shape {
  constructor(radius = 0) {
    super();
    this.radius = radius;
  }
  resize(factor) {
    this.radius *= factor;
  }
  toString() {
    return "Circle of radius " + this.radius;
  }
}

// we want to add the color to circle object!

class ColoredShape extends Shape {
  constructor(shape, color) {
    super();
    this.shape = shape;
    this.color = color;
  }
  toString() {
    return `${this.shape.toString()} and has the color of ${this.color}`;
  }
}

// implementation ....
let circle = new Circle(2);
let coloredCircle = new ColoredShape(circle , "Blue");
console.log(coloredCircle.toString());


// we ca apply more than one decorator 
// this actually won't work ...
/* coloredCircle.resize(2); */  // ! ERROR
coloredCircle.shape.resize(4); // This should work fine
