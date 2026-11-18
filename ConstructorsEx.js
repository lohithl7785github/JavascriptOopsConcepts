//  A constructor is a special method that automatically executes when an object is created.

class BankAccount {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    displayDetails() {
        console.log(this.name);
        console.log(this.balance);
    }
}

const account1 = new BankAccount("Lohith", 50000);
const account2 = new BankAccount("Rahul", 75000);

account1.displayDetails();
account2.displayDetails();