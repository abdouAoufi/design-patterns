const coordinateSys = {
  cartezian: 0,
  polar: 1,
};

class PointOLD {
  // ? handle two cases of creation of point
  constructor(a, b, coordinateSystem = coordinateSys.cartezian) {
    if (coordinateSystem === coordinateSys.cartezian) {
      this.x = a;
      this.y = b;
    } else {
      this.x = a * Math.cos(b);
      this.y = a * Math.sin(b);
    }
  }
}
// old way to define the object
let point = new PointOLD(3, 4, coordinateSys.cartezian);
// ? using factory methodes ...
class PointNEW {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static newCartizienPoint(x, y) {
    return new PointNEW(x, y);
  }
  static newPolarPoint(rho, theta) {
    let newX = rho * Math.cos(theta);
    let newY = rho * Math.sin(theta);
    return new PointNEW(newX, newY);
  }
}
// new way to define object
let pointNew = PointNEW.newCartizienPoint(3, 4);
console.log(pointNew);
