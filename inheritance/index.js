/*jshint esversion: 6 */
(function() {
    "use strict";

    // Exercise 1:
    // Define a filter function on the String object. The function accepts an array of strings that
    // specifies a list of banned words. The function returns the string after removing all the
    // banned words.
    //     Example:
    // console.log("This house is not nice!".filter('not'));
    // Output: "This house is nice!"
    const stringObj = {
        string: "This ugly house is not nice!",
        filterBannedWords: function (bannedWords) {
            let str = this.string.split(" ");
            let len = str.length;

            return str.filter((word) => !bannedWords.includes(word)).join(" ");

            // for (let i = 0; i < len; i++) {
            //     for (let j = 0; j < words.length; j++) {
            //         if (str[i] === words[j]) {
            //             str.re(str[i], "");
            //         }
            //     }
            // }
            // return this.string;
        }
    };

    // Exercise 2:
    // Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
    // that works by repeatedly stepping through the list to be sorted,
    //     Example:[6,4,0, 3,-2,1].bubbleSort();
    // Output : [-2, 0, 1, 3, 4, 6]
    const arrayObj = {
        arr: [6,4,0, 3,-2,1],
        bubbleSort: function () {
            let array = this.arr;
            let len = array.length;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j <= len; j++) {
                    if (array[j] > array[j+1]) {
                        let temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }
            }
            return array;
        }
    };


    // Exercise 3:
    // The last exercise for today comes from: https://www.learn-js.org/en/Inheritance
    //     Create an object called Teacher derived from the Person class, and implement a method called teach
    // which receives a string called subject, and prints out:
    //     [teacher's name] is now teaching [subject]
    let Person = function() {};

    Person.prototype.initialize = function(name, age)
    {
        this.name = name;
        this.age = age;
    };

    Person.prototype.describe = function()
    {
        return this.name + ", " + this.age + " years old.";
    };

    let Teacher = function() {};
    Teacher.prototype = new Person();

    Teacher.prototype.teach = function(subject) {
        console.log(this.name + " is now teaching " + subject);
        return this.name + " is now teaching " + subject;
    };

    let Student = function() {};
    Student.prototype = new Person();

    Student.prototype.learn = function(subject)
    {
        console.log(this.name + " just learned " + subject);
        return this.name + " just learned " + subject;
    };

    let me = new Student();

    me.initialize("John", 25);
    me.learn("Inheritance");

    let instructor = new Teacher();

    instructor.initialize("James", 30);
    instructor.teach("Inheritance");

    /* ------------------------------------------------ Tests ----------------------------------------------------- */

    describe("W2D5 Inheritance", function () {

        it("Filter banned words", function () {
            assert.equal(stringObj.filterBannedWords(["not", "ugly"]), "This house is nice!");
        });

        it("Bubble sort", function () {
            assert.deepEqual(arrayObj.bubbleSort(), [-2, 0, 1, 3, 4, 6]);
        });

        it("Describe method", function () {
            assert.deepEqual(instructor.describe("Inheritance"), "James, 30 years old.");
        });

        it("Learn method", function () {
            assert.deepEqual(me.learn("Inheritance"), "John just learned Inheritance");
        });

        it("Teach method", function () {
            assert.deepEqual(instructor.teach("Inheritance"), "James is now teaching Inheritance");
        });

    });

}());