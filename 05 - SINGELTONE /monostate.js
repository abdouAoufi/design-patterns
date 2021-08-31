// we can only have on CEO at a company i belive ..
// this time we wont have an object instead we will use fieds on class
class Ceo {
  get name() {
    return Ceo._name;
  }
  set name(value) {
    return (Ceo._name = value);
  }

  get age() {
    return Ceo.age;
  }
  set age(value) {
    return (Ceo.age = value);
  }
}

Ceo._name = undefined;
Ceo._age = undefined;

let ceo = new Ceo();

ceo.name = "Aoufi abderahmane";
ceo.age = 22;

console.log(ceo.name, ceo.age);
