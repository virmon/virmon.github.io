/*jshint esversion: 6 */
(function(){
"use strict";

describe("Account methods", function () {

    let account = new Account(1000001);

    it("Account: getNumber()", function () {
        assert.equal(account.getNumber(), 1000001);
    });

    it("Account: getBalance()", function () {
        assert.equal(account.getBalance(), 0);
    });

    it("Account: deposit()", function () {
        // deposit 1000
        account.deposit(1000);
        assert.equal(account.getBalance(), 1000);
    });

    it("Account: withdraw()", function () {
        // withdraw 100
        account.withdraw(100);
        assert.equal(account.getBalance(), 900);
    });

    it("Account: toString()", function() {
        assert.equal(account.toString(), "Account " + account.getNumber() + ": balance " + account.getBalance())
    })
    
});

describe("Savings Account methods", function () {

    let savings = new SavingsAccount({number: 1001, interest: 0.5});
    savings.deposit(1000);

    it("Savings: getInterest()", function () {
        assert.equal(savings.getInterest(), 0.5);
    });

    it("Savings: setInterest()", function () {
        savings.setInterest(0.1);
        assert.equal(savings.getInterest(), 0.1);
    });

    it("Savings: addInterest()", function () {
        savings.addInterest();
        assert.equal(savings.getBalance(), 1001);
    });

    it("Savings: toString()", function() {
        assert.equal(savings.toString(), "Savings Account " + savings.getNumber() + ": balance " + savings.getBalance());
    })
    
});

describe("Checking Account methods", function () {

    let checking = new CheckingAccount({number: 1001, overdraft:500});
    checking.deposit(1000);

    it("Checking: getOverdraftLimit()", function () {
        assert.equal(checking.getOverdraftLimit(), 500);
    });

    it("Checking: setOverdraftLimit()", function () {
        checking.setOverdraftLimit(800)
        assert.equal(checking.getOverdraftLimit(), 800);
    });

    it("Checking: withdraw()", function () {
        checking.withdraw(1800);
        assert.equal(checking.getBalance(), -800);
    });

    it("Checking: toString()", function() {
        assert.equal(checking.toString(), "Checking Account " + checking.getNumber() + ": balance " + checking.getBalance());
    })
    
});

describe("Bank Account methods", function () {

    let bank = new Bank();

    it("Bank: addAccount()", function() {
        assert.equal(bank.addAccount(), 1);
    })

    it("Bank: addCheckingAccount()", function() {
        assert.equal(bank.addSavingsAccount(500), 2);
    })

    it("Bank: addSavingsAccount()", function() {
        assert.equal(bank.addSavingsAccount(0.2), 3);
    })

    it("Bank: closeAccount()", function() {
        assert.deepEqual(bank.closeAccount(1001), bank._account);
    })

    it("Bank: accountReport()", function() {
        assert.deepEqual(bank.accountReport(), ["Account Number: [object Object] Balance: 0", "Account Number: [object Object]1 Balance: 0", "Account Number: [object Object]11 Balance: 0"]);
    })
    
    it("Bank: endOfMonth()", function() {
        assert.deepEqual(bank.endOfMonth(), ["Interest added SavingsAccount[object Object]1 : balance: 0 interest: 500", "Interest added SavingsAccount[object Object]11 : balance: 0 interest: 0.2"]);
    })
});

})();