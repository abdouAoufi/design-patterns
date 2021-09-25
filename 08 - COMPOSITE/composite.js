class GraphicObject {
  constructor(name = "" + GraphicObject.count++) {
    this._name = name;
    this.color = undefined;
    this.children = [];
  }
  get name() {
    return this._name;
  }

  toString() {
    let buffer = [];
    this.print(buffer, 0);
    return buffer.join("");
  }
  print(buffer, depth) {
    buffer.push("*".repeat(depth));
    if (depth > 0) buffer.push(" ");
    buffer.push(this.name + " => ");
    if (this.color) buffer.push(this.color + " ");
    buffer.push("\n");
    for (let child of this.children) {
      console.log(child.children)
      child.print(buffer, depth + 1);
    }
  }
}
GraphicObject.count = 0;

class Circle extends GraphicObject {
  constructor(color) {
    super("Circle");
    this.color = color;
  }
}

class Rectangle extends GraphicObject {
  constructor(color) {
    super("Rectangle");
    this.color = color;
  }
}

let drawing = new GraphicObject();
drawing.children.push(new Circle("Red"));
drawing.children.push(new Rectangle());

 
let group = new GraphicObject();
group.children.push(new Rectangle("Blue"));
group.children.push(new Circle("Blue"));
drawing.children.push(group); 
 

console.log(drawing.toString());
