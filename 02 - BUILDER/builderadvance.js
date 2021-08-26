// the idea is instead of construct it through the constructor we
// will use some builders ...
class Person {
  constructor() {
    // adress ...
    this.streetAdress = this.postCode = this.city = "";
    // emoloyement ...
    this.companyName = this.position = "";
    this.annualIncome = 0;
  }
  toString() {
      // return "fake";
    return (
      `this person lives at ${this.streetAdress} in ${this.city} with post code of ${this.postCode}` +
      ` And he is working as ${this.position} in ${this.companyName} and earning ${this.annualIncome} per year.`
    );
  }
}
// we're going to have 2 calsses and one base class
class PersonBuilder {
  constructor(person = new Person()) { // first time it wont recieve an object 
    this.person = person; // it gonna build brand new object this happens once .....
  }
  get lives() {
    return new PersonAdressBuilder(this.person);
  }

  get works() {
    return new PersonJobtBuilder(this.person);
  }

  build() {
    return this.person;
  }

  toString(){
    return this.person.toString()
  }
}


class PersonJobtBuilder extends PersonBuilder {
  constructor(person) {
    super(person); // ! {1} we save object on the base class !
  }
  at(companyName) {
    this.person.companyName = companyName;
    return this;
  }
  asA(position) {
    this.person.position = position;
    return this;
  }
  earning(annulaIncome) {
    this.person.annualIncome = annulaIncome;
    return this;
  }
}

class PersonAdressBuilder extends PersonBuilder {
  constructor(person) {
    super(person); // ! {1} we save object on the base class !
  }
  at(streetAdress) {
    this.person.streetAdress = streetAdress;
    return this;
  }
  withPostCode(postCode) {
    this.person.postCode = postCode;
    return this;
  }
  in(city) {
    this.person.city = city;
    return this;
  }
}

let pb = new PersonBuilder(); // will automatically generates a person object.
pb.lives
  .at("Aliliguia")
  .in("Boumerdes")
  .withPostCode("35000")
  .works.asA("Full stack developer")
  .at("Paypal")
  .earning("120k")
  .build();

const pbstr = pb.toString();
console.log(pbstr)
