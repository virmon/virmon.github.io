/*jshint esversion: 6 */
(function(){
    "use strict";
    // Reverse an array
    function reverseArray(arr) {
        let newArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            newArr.push(arr[i]);
        }
        return newArr;
    }

    // Reverse an array in place
    function reverseArrayInPlace(arr) {
        return arr.reduce((acc, val) => val + "," + acc);
    }

    // LIST
    function arrayToList(arr) {
        let list = {
            "value": arr[0] ? arr[0] : null,
            "rest": null
        };
        arr.shift();
        if (arr.length >= 1) {
            list.rest = arrayToList(arr);
        } else {
            list.rest = null;
        }
        return list;
    }

    // get each value in a nested list
    function getValue(list) {
        let { value, rest } = list;
        let listOfValues = "";

        if (rest !== null) {
            listOfValues = value + "," + getValue(rest);
            return listOfValues;
        } else {
            return value;
        }
    }

    // convert nested list to array
    function listToArray(list) {
        let { value } = list;
        let arr = [];

        let listOfValues = getValue(list).split(",");

        for (let i = 0; i < listOfValues.length; i++) {
            if (typeof(value) === "number") {
                arr.push(parseInt(listOfValues[i]));
            } else {
                arr.push(listOfValues[i]);
            }
        }
        return arr;
    }

    // takes an element and a list and creates a new list that adds the element to the front of the input list
    function prepend(element, list) {
        let newList = {
            value: element,
            rest: list
        };
        return newList;
    }

    // takes a list and a number and returns the
    // element at the given position in the list (with zero referring to the first element) or undefined
    // when there is no such element.
    function nth(list, n) {
    //    arrayToList
        let arr = listToArray(list);
        return arr.filter((x, index) => index === n);
    }

    // takes two values and returns true only if they are the same value
    // or are objects with the same properties, where the values of the properties are equal when
    // compared with a recursive call to deepEqual
    function deepEqual(a, b) {
        let hasNull = false;

        // if both are null
        if (a === null || b === null) {
            hasNull = true;
        }

        // check if not same type
        if (typeof(a) !== typeof(b)) {
            return false;
        }

        if (!hasNull) {
            // Objects comparison
            let aKeys = Object.keys(a).toString();
            let bKeys = Object.keys(b).toString();

            // check keys if not the same
            if (aKeys !== bKeys) {
                return false;
            }
            // iterate keys
            for (let i = 0; i < aKeys.length; i++) {
                // check if values are not the same
                if (aKeys[i] !== bKeys[i]) {
                    return false;
                }
            }
        } else {
            // check if values are not the same
            if (a !== b) {
                return false;
            }
        }
        return true;
    }



/* ------------------------------------------------ Tests ----------------------------------------------------- */
    describe("Javascript Practice", function() {

        it("the reverse of array ['A','B','C'] is ['C','B','A']", function() {
            assert.equal(reverseArray(["A", "B", "C"]).toString(), ["C", "B", "A"].toString());
        });

        it("the reverse of array [1,2,3,4,5] is [5,4,3,2,1]", function() {
            assert.equal(reverseArrayInPlace([1,2,3,4,5]).toString(), [5,4,3,2,1].toString());
        });

        it("get all values in a list", function() {
            assert.deepEqual(getValue({"value": 10, "rest": {"value": 20, "rest": {"value": 30, "rest": null}}}), "10,20,30");
        });

        it("array to list", function() {
            assert.deepEqual(arrayToList([10, 20, 30]), {"value": 10, "rest": {"value": 20, "rest": {"value": 30, "rest": null}}});
            assert.deepEqual(arrayToList([10, 20, 30, 40, 50]), {"value": 10, "rest": {"value": 20, "rest": {"value": 30, "rest": {"value": 40, "rest": {"value": 50, "rest": null}}}}});
        });

        it("list to array", function() {
            assert.deepEqual(listToArray({"value": 10, "rest": {"value": 20, "rest": {"value": 30, "rest": null}}}), [10, 20, 30]);
        });

        it("prepend element to a list", function() {
            assert.deepEqual(prepend(10, prepend(20, null)), {"value": 10, "rest": {"value": 20, "rest": null}});
        });

        it("returns the element in a given index", function() {
            assert.deepEqual(nth(arrayToList([10,20,30]), 1), [20]);
            assert.deepEqual(nth(arrayToList([10,20,30]), 0), [10]);
            assert.deepEqual(nth(arrayToList([10,20,30]), 2), [30]);
        });

        it("compares two values and returns true if the same", function() {
            assert.deepEqual(deepEqual(10, 10), true);
            assert.deepEqual(deepEqual("hello", "hello"), true);
            assert.deepEqual(deepEqual({greeting: 'hello'}, {greeting: 'hello'}), true);
            assert.deepEqual(deepEqual({greeting: 'hello'}, {greeting: 'hello', greeting2: 'hi'}), false);
            assert.deepEqual(deepEqual({greeting: 'hello'}, {name: 'Foo'}), false);
            assert.deepEqual(deepEqual(null, null), true);
            assert.deepEqual(deepEqual(null, {greeting: 'hello'}), false);
            assert.deepEqual(deepEqual("hello", {greeting: 'hello'}), false);
        });

    });
}());