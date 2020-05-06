/*jshint esversion: 6 */
"use strict";

class SavingsAccount extends Account {
    constructor({ number, interest}) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(rate) {
        this._interest = rate;
    }

    addInterest() {
        super.deposit(this.getBalance() * this._interest / 100);
    }

    toString() {
        super.toString();
        return "Savings Account " + super.getNumber() + ": balance " + super.getBalance();
    }

    endOfMonth() {
        return `Interest added SavingsAccount` + super.getNumber() +` : balance: ` + super.getBalance() + ` interest: ` + this.getInterest();
    }
}