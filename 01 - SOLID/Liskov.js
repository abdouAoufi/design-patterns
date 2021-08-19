class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  set width(value) {
    this._width = value;
  }

  set height(value) {
    this._height = value;
  }
  get area() {
    return this._width * this._height;
  }


  get isSquare() {
    return this._height === this._width; // Best solution for now
  }

  toString() {
    return `${this._width} x ${this._height} = ${this.area}`;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  set width(value) {
    this._width = this._height = value;
  }

  set height(value) {
    this._width = this._height = value;
  }
}
function useIt(rc) {
  if(rc.isSquare) return ; // avoid this functionality when working with square
  let width = rc._width;
  rc.height = 10;
  console.log(`Expected area ${10 * width} and got ${rc.area}`);
}

const rectangle = new Rectangle(2, 4);
// console.log(rectangle.area);
// console.log(rectangle.toString());

// the problem rises here ...

const square = new Square(5);
// console.log(square.area);
// square.width = 10; // we want to change the width and expect the result to be 100
// console.log(square.toString()); // 50 => this is now rectangle :(

useIt(rectangle);
useIt(square);
