class Creator {
  constructor(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
  }
  toString() {
    return `${this.name} (${this.attack} / ${this.defense})`;
  }
}

class CreatureModifier {
  constructor(creature) {
    this.creature = creature;
    this.next = null;
  }
  add(modifier) {
    if (this.next) {
      this.next.add(modifier); // like linked list
    } else {
      this.next = modifier;
    }
  }
  handle() {
    if (this.next) {
      this.next.handle();
    }
  }
}

class DoubleAttackModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }
  handle() {
    console.log(`Doubling ${this.creature.name}'s attack'`);
    this.creature.attack *= 2;
    super.handle();
  }
}

class IncreaseDeffenseModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }
  handle() {
    if (this.creature.attack <= 2) {
      this.creature.defense++;
      super.handle();
    }
  }
}

let goblin = new Creator("Goblin", 1, 1);

let root = new CreatureModifier(goblin);

root.add(new DoubleAttackModifier(goblin));
root.add(new IncreaseDeffenseModifier(goblin));

root.handle()

;

console.log(root);
