window.onload = function() {
    "use strict";
    // Re-implemented from previous Lab
    // below are the data used
    const nums = [1,2,3,4,5];
    const str = "hello";
    const words = ["hello", "welcome", "hi", "bye"];

    // sums all the numbers in an array
    const sum = nums.reduce((x, n) => x + n);

    // multiplies all the numbers in an array
    const multiply = nums.reduce((a, n) => a * n);

    // reverses a string
    const reverseString = str.split("").reverse().join("");

    // returns the longest word in it
    const findLongestWord = words.sort((a,b) => b.length - a.length).find(x => x[0]);

    // takes an array of string and a number then returns a filtered words
    const filterLongWords = words.filter(word => word.length > 3);

    /* ---------------------------- Test Cases ------------------------------*/

    function myFunctionTest(x, y) {
        if (x === y) {
            return "TEST SUCCEED";
        } else {
            return "TEST FAILED";
        }
    }

    /* ------------------------------------  Using console.log()  ------------------------------------------ */

    console.log("Expected output of sum is 15 and  " + myFunctionTest(15, sum));

    console.log("Expected output of multiply is 120 and  " + myFunctionTest(120, multiply));

    console.log("Expected output of reverseString is 'olleh' and  " + myFunctionTest("olleh", reverseString));

    console.log("Expected output of findLongestWord is 'welcome' and  " + myFunctionTest("welcome", findLongestWord));

    console.log("Expected output of filterLongWords is ['hello', 'welcome'] and  " + myFunctionTest(["welcome", "hello"].toString(), filterLongWords.toString() ));


    /* ------------------------------------  Using console.assert()  ------------------------------------------ */

    function testSum() {
        console.assert(sum === 15, "Output should be 15");
    }
    testSum();

    function testMultiply() {
        console.assert(multiply === 120, "Output should be 100");
    }
    testMultiply();

    function testReverseString() {
        console.assert(reverseString === "olleh", "Output should be 'olleh'");
    }
    testReverseString();

    function testFindLongestWord() {
        console.assert(findLongestWord === "welcome", "Output should be 'welcome'");
    }
    testFindLongestWord();

    function testFilterLongWords() {
        console.assert(filterLongWords.toString() === ["welcome", "hello"].toString(), "Output should be ['welcome', 'hello']");
    }
    testFilterLongWords();

/* ----------------------------------- Decorate My Text starts here ------------------------------------------ */

    let biggerTextBtn = document.getElementById("biggerText");
    let bling = document.getElementById("bling");
    let textArea = document.getElementById("textArea");
    let decor = document.getElementById("decoration");

    // additional buttons for later use
    let igpayBtn = document.createElement("BUTTON");
    let malkovichBtn = document.createElement("BUTTON");

    // increase font size by 2pt
    function increaseSizeBy2() {
        let currentSize = parseInt(textArea.style.fontSize)
        if (currentSize >= 24) {
            textArea.style.fontSize = (currentSize + 2) + "pt";
        } else {
            textArea.style.fontSize = "24pt";
        }
    }

    // pig latin translator
    let toPigLatin = function(str) {
        return str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
    }

    // translate to pig latin on click
    igpayBtn.onclick = function() {
        let x = textArea.value.split(" ");
        let newWords = [];
        for (let i = 0; i < x.length; i++) {
            newWords.push(toPigLatin(x[i]));
        }
        // replace all commas in string
        textArea.value = newWords.toString().replace(/,/g, " ");
    }

    // change to malkovich
    function toMalkovich(str) {
        if (str.length >= 5) {
            return "Malvokich";
        } else {
            return str;
        }
    }

    // change all words with 5>= length to "Malkovich" on click
    malkovichBtn.onclick = function() {
        let x = textArea.value.split(" ");
        let newWords = [];
        for (let i = 0; i < x.length; i++) {
            newWords.push(toMalkovich(x[i]));
        }
        // replace all commas in string
        textArea.value = newWords.toString().replace(/,/g, " ");
    }

    // set initial value of textarea font to 12pt
    textArea.style.fontSize = "12pt";
    // bigger text every 500ms on click
    biggerTextBtn.onclick = function () {
        setInterval(function() {
            increaseSizeBy2();
        }, 500);
    };

    // change appearance on checkbox checked
    bling.onchange = function () {
        alert("checkbox clicked")
        if (bling.checked) {
            textArea.style.fontWeight = "bold";
            textArea.style.color = "green";
            textArea.style.textDecoration = "underline";

            // add background image
            document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
            
            // Add Pig Latin button
            igpayBtn.innerHTML = "Igpay Atinlay";
            decor.appendChild(igpayBtn);

            // Add Malkovich button
            malkovichBtn.innerHTML = "Malkovich";
            decor.appendChild(malkovichBtn);
        } else {
            // return to normal font weight
            textArea.style.fontWeight = "normal";
        }
    }
}