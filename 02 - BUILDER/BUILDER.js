const hello = "Hello";
const po = "<p>";
const pc = "</p>";
const html = [po, hello, pc];
// console.log(html.join(""));
// this is complicated !!
class Tag {
  static get indentSize() {
    return 2;
  }
  constructor(name = "", text = "") {
    this.name = name;
    this.text = text;
    this.children = [];
  }
  toStringImpl(indent) {
    let html = [];
    let i = " ".repeat(indent * Tag.indentSize); // espace generator
    html.push(`${i}<${this.name}>\n`); // <ul>
    if (this.text.length > 0) {
      html.push(" ".repeat(Tag.indentSize * (indent + 1)));
      html.push(this.text);
      html.push("\n");
    }
    for (let child of this.children) {
      html.push(child.toStringImpl(indent + 1)); // recursively construct HTML chunks
    }
    html.push(`${i}<${this.name}>\n`);
    return html.join("");
  }
  toString() {
    return this.toStringImpl(0);
  }
  static create(name) {
    return new HtmlBuilder(name);
  }
}

class HtmlBuilder {
  constructor(rootName) {
    this.root = new Tag(rootName);
    this.rootName = rootName;
  }

  addChild(nameChild, textChild) {
    let child = new Tag(nameChild, textChild);
    this.root.children.push(child);
  }

  addChildFluent(nameChild, textChild) {
    let child = new Tag(nameChild, textChild);
    this.root.children.push(child);
    return this;
  }

  clear() {
    this.root = new Tag(this.rootName);
  }

  toString() {
    return this.root.toString();
  }

  build() {
    return this.root;
  }
}

let builder = new HtmlBuilder("ul");
builder.addChild("li", "text_1");
builder.addChild("li", "text_2");
console.log(builder.root.toString());
builder.clear();
builder.addChildFluent("li", "foo").addChildFluent("li", "bar");
console.log(builder.root.toString());
