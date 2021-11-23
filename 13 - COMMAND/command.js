class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}, balance now is ${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance - amount >= BankAccount.overdraftLimit) {
      this.balance -= amount;
      console.log(`Withdrew ${amount} , balance is now ${this.balance}`);
      return true;
    }
    return false;
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

BankAccount.overdraftLimit = -500;

let Action = Object.freeze({
  deposit: 1,
  withdraw: 2,
});

class BankAccountCommand {
  constructor(account, action, amount) {
    this.account = account;
    this.action = action;
    this.amount = amount;
    this.successed = false;
  }

  call() {
    switch (this.action) {
      case Action.deposit:
        this.account.deposit(this.amount);
        this.successed = true;
        break;
      case Action.withdraw:
        this.successed = this.account.withdraw(this.amount);
        break;
    }
  }
  undo() {
    if (!this.successed) return;
    switch (this.action) {
      case Action.deposit:
        this.account.withdraw(this.amount);

        break;
      case Action.withdraw:
        this.account.deposit(this.amount);
        break;
    }
  }
}

const ba = new BankAccount(100);

const cmd = new BankAccountCommand(ba, Action.deposit, 100);
cmd.call();
cmd.undo();
console.log(ba.toString());
