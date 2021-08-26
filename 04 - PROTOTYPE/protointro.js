class Adress {
  constructor(street, ...rest) {
    this.street = street;
    this.city = rest[0];
    this.adress = rest[1];
  }
}

class Person {
  constructor(name, adress) {
    this.name = name;
    this.adress = adress;
  }
  toString() {
    return `name = ${this.name}`;
  }

  deepCopy() {
    return new Person(this.name, this.adress);
  }
}

const abdou = new Person(
  "Abdou",
  new Adress("Aliliguia", "boumerdes", "Algeria")
);

console.log(abdou.toString());

let ammar = abdou.deepCopy(); 

ammar.name = "ammar" // this shoud work cozz string is get copied
ammar.adress.street = "new" // ! this one fail cozz its by refercence 
// the solution is to make another deep call to adress class

console.log(abdou);
console.log(ammar);
