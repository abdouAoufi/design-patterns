class VectorRendrer {
  drawCircle(radius) {
    console.log("Drawing vector cirle with radius of", radius);
  }
}

class RasterRenderer {
  drawCircle(radius) {
    console.log("Drawing pixel cirle with radius of", radius);
  }
}

class Shape {
  constructor(rendrer) {
    this.rendrer = rendrer;
  }
}

class Circle extends Shape {
  constructor(rendrer, radius) {
    super(rendrer);
    this.radius = radius;
  }

  draw() {
    this.rendrer.drawCircle(this.radius);
  }

  resize(factor) {
    this.radius *= factor;
  }
}

class Square {}

/* 
    Think about you want to render these sahpes in two different 
    way by PIXLES or VECTORE ... You will end up with bunch of 
    classes like VerctoreCirle , VectorSquare ...... We don't want 
    to do that.
    ! The solution is to build a bridge between these classes ...
*/

let vectorRendrer = new VectorRendrer();
let pixelRendrer = new RasterRenderer();
let circle = new Circle(pixelRendrer, 5);

circle.draw();
circle.resize(4);
circle.draw();
