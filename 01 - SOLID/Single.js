const fs = require("fs");
const path = require("path");
// main journal class ...
class Journal {
  constructor() {
    this.entries = {};
  }
  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c} => ${text}`;
    this.entries[c] = entry;
    return c;
  }
  removeEntry(index) {
    if (index < 0) {
      return console.log("Not allowed ");
    }
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }
}


// separating other rules ...
class Persistance {
  save(fileName) {
    fs.writeFileSync(fileName, this.toString());
  }
  load() {
    //
  }

  loadFromUrl() {
    //
  }
}

Journal.count = 0;
const journal = new Journal();
journal.addEntry("Hello world");
journal.addEntry("Hello again");
journal.addEntry("Hi there");
journal.save("test.txt");
console.log(journal.toString());
