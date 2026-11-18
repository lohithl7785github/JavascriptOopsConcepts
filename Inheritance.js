// Inheritance allows one class to acquire properties and methods from another class.

class Bank {
    bankName() {
        console.log("Welcome to ABC Bank");
    }
}

class Customer extends Bank {
    customerName() {
        console.log("Customer: Lohith");
    }
}

class Account extends Customer {
    accountDetails() {
        console.log("Account Number: 12345");
    }
}

const customer = new Customer();
const account = new Account();

customer.bankName();
account.customerName();
account.accountDetails(); // This will throw an error because accountDetails is not a method of Customer class