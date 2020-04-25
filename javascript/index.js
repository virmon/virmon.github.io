// takes two arguments and returns the largest
function max(x, y) {
    if (x > y) {
        return x;
    } else if (y > x) {
        return y;
    }
    else {
        return -1;
    }
}

// takes three arguments and returns the largest
function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else if (c > a && c > b) {
        return c;
    } else {
        return -1;
    }
}

// takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(letter) {
    // invalid input
    if (letter.length > 1 && letter.length < 1) {
        return false;
    }
    l = letter.toLowerCase();

    if (l === "a" || l === "e" || l === "i" || l === "o" || l === "u") {
        return true;
    } else {
        return false;
    }
}

// sums all the numbers in an array
function sum(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum;
}

// multiplies all the numbers in an array
function multiply(n) {
    let product = 1;
    for (let i = 0; i < n.length; i++) {
        product *= n[i];
    }
    return product;
}

// reverses a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// takes an array of string and returns the longest word in it
function findLongestWord(words) {
    words.sort(function(a,b){return b.length - a.length});
    return words[0];
}

// takes an array of string and a number then returns a filtered words
function filterLongWords(words, n) {
    let newList = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > n) {
            newList.push(words[i]);
        }
    }
    return newList;
}

const e = [1,2,3,4,5,6,7,8,9,10];

// multiplies each number by 10
const m = e.map((x) => x * 10);

// filter array
const f = e.filter((x) => x === 3);

// multiplies all numbers in the array
const r = e.reduce((x, y) => x * y);


/* ---------------------------- Test Cases ------------------------------*/

function myFunctionTest(x, y) {
    if (x === y()) {
        return "TEST SUCCEED";
    } else {
        return "TEST FAILED";
    }
}

/* ------------------------------------  Using console.log()  ------------------------------------------ */

console.log("Expected output of max(20,10) is 20 and  " + myFunctionTest(20, function(){return max(20, 10);}));

console.log("Expected output of maxOfThree(10,20,30) is 30 and  " + myFunctionTest(30, function(){return maxOfThree(10,20,30);}));

console.log("Expected output of isVowel('a') is 'a' and  " + myFunctionTest(true, function(){return isVowel("a");}));

console.log("Expected output of sum([1,2,3,4,5]) is 15 and  " + myFunctionTest(15, function(){return sum([1,2,3,4,5]);}));

console.log("Expected output of multiply([1,2,3,4,5]) is 120 and  " + myFunctionTest(120, function(){return multiply([1,2,3,4,5]);}));

console.log("Expected output of reverseString('hello') is 'olleh' and  " + myFunctionTest("olleh", function(){return reverseString("hello");}));

console.log("Expected output of findLongestWord(['hello', 'welcome', 'hi', 'bye']) is 'welcome' and  " + myFunctionTest("welcome", function(){return findLongestWord(["hello", "welcome", "hi", "bye"]);}));

console.log("Expected output of filterLongWords(['hello', 'welcome', 'hi', 'bye'], 3) is ['hello', 'welcome'] and  " + myFunctionTest(["hello", "welcome"].toString(), function(){return filterLongWords(["hello", "welcome", "hi", "bye"], 3).toString() ;}));

console.log("Expected output of m is [10,20,30,40,50,60,70,80,90,100] and  " + myFunctionTest([10,20,30,40,50,60,70,80,90,100].toString(), function(){return m.toString();}));

console.log("Expected output of f is [3] and  " + myFunctionTest([3].toString(), function(){return f.toString();}));

console.log("Expected output of r is 3628800 and  " + myFunctionTest(3628800, function(){return r;}));


/* ------------------------------------  Using console.assert()  ------------------------------------------ */

function testMax() {
    console.assert(max(2,5) === 5, "Output should be 5");
}
testMax();

function testMaxOfThree() {
    console.assert(maxOfThree(1,2,3) === 3, "Output should be 3");
}
testMaxOfThree();

function testIsVowel() {
    console.assert(isVowel("a") === true, "Output should be true");
    console.assert(isVowel("aa") === false, "Output should be false");
    console.assert(isVowel("z") === false, "Output should be false");
}
testIsVowel;

function testSum() {
    console.assert(sum([5,10]) === 15, "Output should be 15");
}
testSum();

function testMultiply() {
    console.assert(multiply([10,10]) === 100, "Output should be 100");
}
testMultiply();

function testReverseString() {
    console.assert(reverseString("hello") === "olleh", "Output should be 'olleh'");
    console.assert(reverseString("hello, world") === "dlrow ,olleh", "Output should be 'dlrow ,olleh'");
}
testReverseString();

function testFindLongestWord() {
    testWords = ["hello", "welcome", "hi", "bye"];
    console.assert(findLongestWord(testWords) === "welcome", "Output should be 'welcome'");
}
testFindLongestWord();

function testFilterLongWords() {
    testWords = ["hello", "welcome", "hi", "bye"];
    console.assert(filterLongWords(testWords, 3).toString() === ["hello", "welcome"].toString(), "Output should be ['hello', 'welcome'] but got");
}
testFilterLongWords();

function testMap() {
    console.assert(m.toString() === [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].toString(), "Output should be [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]");
}
testMap();

function testFilter() {
    console.assert(f.toString() === [3].toString(), "Output should be [3] ");
}
testFilter();

function testReduce() {
    console.assert(r === 3628800, "Output should be 3628800");
}
testReduce();