class Document {}

class Machine {
  constructor() {
    if (this.constructor.name === "Machine") {
      throw new Error("Machine is abstract");
    }
  }
  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}
// try {
//   const machine = new Machine();
// } catch (err) {
//   console.log(err);
// }

class OldFashionPrinter extends Machine {
  print(doc) {
    // this is accepted
  }
  fax() {
    // we have problem because it's old and can't fax
  }

  print() {
    // we have problem because it's old and can't print
    throw new Error("not implemented");
  }
}

// the solution for this is SEGREGATION we separeates interfaces

// Printer interface

class Printer {
  constructor() {
    if (this.constructor.name === "Printer") {
      throw new Error("Printer is abstract class");
    }
  }
  print() {}
}

class Scanner {
  constructor() {
    if (this.constructor.name === "Scanner") {
      throw new Error("Printer is abstract class");
    }
  }
  scan() {}
}

class BetterOldFashionPrinter extends Printer {
  print() {
    console.log("I am old printer and i can print");
  }
}

class NewPrinter extends Scanner {
    scan(){
        console.log("I am new printer i can scan documents!!")
    }
}

const oldPrinter = new BetterOldFashionPrinter();
oldPrinter.print();
const newPrinter = new NewPrinter();
newPrinter.scan();
