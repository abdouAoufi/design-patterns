let Relationships = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 3,
});

class RelationShipBrowser {
    constructor() {
      if (this.constructor.name === "RelationShipBrowser") {
        throw Error("RelationShipBrowser is abstract!");
      }
    }
  
    findAllChildrenOf(name) {}
  }

class Person extends RelationShipBrowser {
  constructor(name) {
    super();
    this.name = name;
  }
}

class Relationship {
  constructor() {
    this.data = [];
  }

  addParentAndChild(parent, child) {
    const info = {
      from: parent.name,
      type: Relationships.parent,
      to: child.name,
    };
    this.data.push(info);
  }

  findAllChildrenOf(name) {
    return this.data
      .filter((r) => {
        return r.from.name === name && r.type === Relationships.parent;
      })
      .map((r) => r.to);
  }
}




// ! high level module
class Research {
  constructor(browser) {
      for (let p of browser.findAllChildrenOf("Abdou")){
          console.log(p);
      }
  }
}

let parent = new Person("Abdou");
let child1 = new Person("Sofian");
let child2 = new Person("Yazan");

let rel = new Relationship();
rel.addParentAndChild(parent, child1);
rel.addParentAndChild(parent, child2);

// new Research(rel);


new Research(rel);
