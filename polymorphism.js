// Polymorphism means one method or interface can behave differently depending on the object.

class Payment {
    pay() {
        console.log("Processing payment");
    }
}

class CreditCard extends Payment {
    pay() {
        console.log("Processing credit card payment");
    }
}

class DebitCard extends Payment {
    pay() {
        console.log("Processing debit card payment");
    }
}

class UPI extends Payment {
    pay() {
        console.log("Processing UPI payment");
    }
}

const payment1 = new CreditCard();
const payment2 = new DebitCard();
const payment3 = new UPI();
payment1.pay();
payment2.pay();
payment3.pay();