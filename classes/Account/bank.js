/*jshint esversion: 6 */
"use strict";

class Bank {
    constructor() {
        this._account = [];
        this._nextNumber = this._account.length === 0 ? 1001 : this._account.length === 0 ? 1001 : this._account[this._account.length-1]._number + 1;
    }

    addAccount() {
        this.incrementNumber();
        let newAcct = {
            number: this._nextNumber
        }
        this._account.push(new Account(newAcct));
        return this._account.length;
    }

    addSavingsAccount(interest) {
        this.incrementNumber();
        let newAcct = {
            number: this._nextNumber,
            interest
        }
        this._account.push(new SavingsAccount(newAcct));
        return this._account.length;
    }

    addCheckingAccount(overdraft) {
        this.incrementNumber();
        let newAcct = {
            number: this._nextNumber,
            overdraft
        }
        this._account.push(new CheckingAccount(newAcct));
        return this._account.length;
    }

    incrementNumber() {
        this._nextNumber = this._account.length === 0 ? 1001 : this._account[this._account.length-1]._number + 1;
    }

    closeAccount(number) {
        this._account = this._account.filter(acct => acct._number !== number);
        return this._account;
    }

    accountReport() {
        let allAcct = [];
        for (let i = 0; i < this._account.length; i++) {
                allAcct.push("Account Number: " + this._account[i].getNumber() + " Balance: " + this._account[i].getBalance());
        }
        return allAcct;
    }

    endOfMonth() {
        let allAcct = [];
        for (let i = 0; i < this._account.length; i++) {
            if (this._account[i].endOfMonth() !== "") {
                allAcct.push(this._account[i].endOfMonth());
            }
        }
        return allAcct;
    }
}

// let bank = new Bank();
// bank.addSavingsAccount(1.2);
// bank.addCheckingAccount(500);
// bank._account[1].withdraw(500);
// console.log(bank._account);
// console.log(bank.closeAccount(1001));
// console.log(bank.endOfMonth());
// console.log(bank.accountReport());
