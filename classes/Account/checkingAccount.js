/*jshint esversion: 6 */
"use strict";

class CheckingAccount extends Account {
    constructor({ number, overdraft }) {
        super(number);
        this._overdraftLimit = overdraft;
    }

    getOverdraftLimit() {
        return this._overdraftLimit;
    }

    setOverdraftLimit(limit) {
        this._overdraftLimit = limit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount >= super.getBalance()) {
            if (amount > super.getBalance() + this._overdraftLimit) {
                throw new RangeError("Overdraft exceeded");
            } else {
                this._balance -= amount;
            }
        }
    }

    toString() {
        super.toString();
        return "Checking Account " + super.getNumber() + ": balance " + super.getBalance();
    }

    endOfMonth() {
        if (super.getBalance() < 0) {
            return `Warning, low balance added CheckingAccount` + super.getNumber() +` : balance: ` + super.getBalance() + ` overdraft limit: ` + this.getOverdraftLimit();
        }
        return "";
    }
}