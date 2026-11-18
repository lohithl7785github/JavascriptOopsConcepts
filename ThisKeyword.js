// The this keyword refers to the current object.

class Customer {
    constructor(name, accountNumber) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    displayCustomer() {
        console.log(this.name);
        console.log(this.accountNumber);
    }
}

const customer = new Customer("Lohith", 12345);
const customer2 = new Customer("xyz", 7890);
customer.displayCustomer();
customer2.displayCustomer();