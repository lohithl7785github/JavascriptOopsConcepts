// Abstraction means hiding implementation details and exposing only the necessary functionality.

// JavaScript does not have a native abstract class keyword like Java. However, we can implement abstraction using classes and methods.

class Payment {
    makePayment() {
        throw new Error("makePayment() must be implemented");
    }
}

class CreditCardPayment extends Payment {
    makePayment() {
        console.log("Payment completed using Credit Card");
    }
}

const payment = new CreditCardPayment();

payment.makePayment();