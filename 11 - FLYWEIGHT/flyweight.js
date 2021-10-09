/*
In this example we're going to use FLYWIGHT design pattern.
1 - We have to create 20 circle object with different colors.
We're going to make it tweaky: if we have an object alrady with this color 
we wont create it.

*/

class Shape {
  constructor() {
    if (this.constructor.name === "Shape") {
      throw Error("Error this is Abstract interface");
    }
  }
  draw() {}
}

class Cirle extends Shape {
  constructor(color) {
    super();
    this.color = color;
  }
  draw() {
    console.log("This circle has " + this.color + " color");
  }
}

class CircleFactory {
  constructor() {}
  createCircle(color) {
    if (!color) return;
    if (CircleFactory.circleList[color]) {
      return CircleFactory.circleList[color];
    }
    let circle = new Cirle(color);
    CircleFactory.circleList[color] = circle;
    return circle;
  }
}

CircleFactory.circleList = {};

const circleFactory = new CircleFactory();
circleFactory.createCircle("red").draw();
circleFactory.createCircle("red");
circleFactory.createCircle("green");

console.log(CircleFactory.circleList)
