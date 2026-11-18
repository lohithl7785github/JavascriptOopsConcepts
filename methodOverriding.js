// When a child class provides its own implementation of a method inherited from the parent class, it is called method overriding.

class Bank {
    interestRate() {
        console.log("General interest rate: 5%");
    }
}

class SavingsAccount extends Bank {
    interestRate() {
        console.log("Savings interest rate: 7%");
    }
}

const account = new SavingsAccount();

account.interestRate();