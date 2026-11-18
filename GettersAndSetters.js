// Getters and setters allow you to read and update object properties through controlled methods.

class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount) {
        if (amount >= 0) {
            this._balance = amount;
        } else {
            console.log("Invalid balance");
        }
    }
}

const account = new BankAccount(50000);

// Getter
console.log(account.balance);

// Setter
account.balance = 75000;

console.log(account.balance);
