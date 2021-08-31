class Singletone {
  // different way for constructor
  // the constructor in js is object so it can have fields
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
  }
  toString() {
    console.log("I am single and ill stay");
  }
}

let single = new Singletone();
let single2 = new Singletone();
console.log(single === single2); // ? true 