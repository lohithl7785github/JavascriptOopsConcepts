// Encapsulation means keeping data and related methods together while controlling access to internal data.

// NOTE: JavaScript supports private fields using #
class BankAccount {
    #balance = 50000;

    getBalance() {
      
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
}

const account = new BankAccount();

account.deposit(10000);

console.log(account.getBalance());