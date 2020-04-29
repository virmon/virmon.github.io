/*jshint esversion: 6 */
(function() {
    "use strict";
    window.onload = function () {
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

        describe("MochaW1D5functions", function() {

            it("the max number is 20", function() {
                assert.equal(max(10,20), 20);
            });

            it("the max number is 30", function() {
                assert.equal(maxOfThree(10,20,30), 30);
            });

            it("the multiplication product is 6", function() {
                assert.equal(isVowel("a"), true);
            });

        });

    };
})();