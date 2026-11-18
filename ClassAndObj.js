// Class: A blueprint used to create objects.

// Object: An instance of a class.

class BankAccount {
    accountHolder = "Lohith";
    balance = 100000;

    displayDetails() {
        console.log(this.accountHolder);
        console.log(this.balance);
    }
}

// Creating an object
const account = new BankAccount();

// Calling method
account.displayDetails();