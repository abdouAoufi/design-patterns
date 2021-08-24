class hotDrink {
  consume() {} // pretend as it's an abstract method
}

class Tea extends hotDrink {
  constructor(sugar = 1) {
    super();
    this.sugar = sugar;
  }
  consume() {
    console.log("This tea is nice with lemon!");
  }
  get howManySugarWeHave() {
    return this.sugar;
  }
}

class Coffee extends hotDrink {
  consume() {
    console.log("This coffee is nice with suggar!");
  }
}

// Tea and Coffe build hierarkey

class HotDrinkFactory {
  prepare(amoumt) {
    /* abstract */
  }
  addMoreSugar(amount) {
    /* abstract */
  }
}

class TeaFactory extends HotDrinkFactory {
  constructor() {
    super();
    this.tea = new Tea(1);
  }
  prepare(amount) {
    console.log(`we should bring a the watter and pour ${amount} mg of tea`);
    return this.tea;
  }
  addMoreSugar(amount) {
    this.tea.sugar = amount;
    return this.tea;
  }
}

class CoffeeFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`we make our coffe with ${amount} mg`);
    return new Coffee();
  }
}

// const tea = new TeaFactory();
// tea.prepare(12);
// tea.addMoreSugar(2);
// console.log(tea);
// tea.consume();

class hotDrinkMachine {
  makeDrink(type) {
    switch (type) {
      case "tea":
        return new TeaFactory().prepare(12);
      case "coffee":
        return new CoffeeFactory().prepare(100);
      default:
        throw Error("no type is provided");
    }
  }
}

const machine = new hotDrinkMachine();
let coffee = machine.makeDrink("coffee");
// coffee.consume();

let tea = machine.makeDrink("tea");
tea.consume();