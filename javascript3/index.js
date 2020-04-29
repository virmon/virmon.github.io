/*jshint esversion: 6 */
(function() {
    "use strict";
    function max(a, b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    function maxOfThree(a, b, c) {
        return max(max(a, b), c);
    }

    function isVowel(c) {
        const vowels = ['a', 'e', 'i','o','u'];
        if (vowels.includes(c)) {
            return true;
        } else {
            return false;
        }
    }

    function sum(numarray) {
        return numarray.reduce((accum, curr) => accum + curr);
    }

    function multiply(numarray) {
        return numarray.reduce((accum, curr) => accum * curr);
    }

    function reverse(str) {
        return str.split('').reverse().join('');
    }

    function findLongestWord(wordArray) {
        const wordLengths = wordArray.map(word => word.length);
        const longest = wordLengths.reduce((accum, curr) => {
            if (curr > accum) {
                return curr;
            } else {
                return accum;
            }
        });
        return longest;
    }

    function filterLongWords(wordArray, i) {
        return wordArray.filter(word => word.length > i);
    }

    describe("MochaW1D5functions", function() {

        it("the max number in [10, 20] is 20", function() {
            assert.equal(max(10,20), 20);
        });

        it("the max number in [10, 20, 30] is 30", function() {
            assert.equal(maxOfThree(10,20,30), 30);
        });

        it("the input 'a' is a vowel: true", function() {
            assert.equal(isVowel("a"), true);
        });

        it("the sum of 10 and 5 is 15", function() {
            assert.equal(sum([10,5]), 15);
        });

        it("the multiplication product of 10 and 10 is 100", function() {
            assert.equal(multiply([10,10]), 100);
        });

        it("the reverse of 'hello' is 'olleh'", function() {
            assert.equal(reverse("hello"), "olleh");
        });

        it("the longest word is with length 7", function() {
            assert.equal(findLongestWord(["hello", "welcome", "hi", "bye"]), 7);
        });

        it("filter words with length of 3", function() {
            assert.equal(filterLongWords(["hello", "welcome", "hi", "bye"], 3), ["hello", "welcome"].toString());
        });

    });

})();