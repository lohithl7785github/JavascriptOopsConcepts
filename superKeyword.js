// The super keyword is used to access the parent class constructor or methods.

class Bank {
    constructor(bankName) {
        this.bankName = bankName;
    }

    displayBank() {
        console.log(this.bankName);
    }
}

class Customer extends Bank {
    constructor(bankName, customerName) {
        super(bankName);

        this.customerName = customerName;
    }

    displayCustomer() {
        super.displayBank();
        console.log(this.customerName);
    }
}

const customer = new Customer("ABC Bank", "Lohith");

customer.displayCustomer();