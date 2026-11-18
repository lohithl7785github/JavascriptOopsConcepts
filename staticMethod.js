// Static methods belong to the class itself rather than individual objects.

class Bank {
    static bankName = "ABC Bank";
    static bankDetails() {
        console.log("Welcome to ABC Bank");
    }
}

Bank.bankDetails();
console.log(Bank.bankName); // This will throw an error because bankName is not a static property