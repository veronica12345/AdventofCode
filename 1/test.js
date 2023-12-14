//I am going to use the "Node.js file system module" to read the local text file
const fs = require("fs");

//One of the built-in methods of this file system is 'readFile'
const array = fs.readFileSync('./test.txt').toString().split("\n");

//For each string (there are 1000 lines in the file), parse it and save the combined first and last digits.
var finalSum=0;

for(let i=0; i<array.length; i++){
    let matches = array[i].match(/(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)|[0-9]/g);
    console.log(matches);
    let first = matches[0];
    if (first == "one"){
        first = '1';
    } else if (first == "two"){
        first = '2';
    } else if (first == "three"){
        first = '3';
    } else if (first == "four"){
        first = '4';
    } else if (first =="five"){
        first = '5';
    } else if (first == "six"){
        first = '6';
    } else if (first == "seven"){
        first = '7';
    } else if (first == "eight"){
        first = '8';
    } else if (first == "nine"){
        first = '9';
    }

    let last = matches[matches.length-1];
    if (last == "one"){
        last = '1';
    } else if (last == "two"){
        last = '2';
    } else if (last == "three"){
        last = '3';
    } else if (last == "four"){
        last = '4';
    } else if (last =="five"){
        last = '5';
    } else if (last == "six"){
        last = '6';
    } else if (last == "seven"){
        last = '7';
    } else if (last == "eight"){
        last = '8';
    } else if (last == "nine"){
        last = '9';
    }

    let combine = parseInt(first+last);
    finalSum = finalSum + combine;
    console.log(finalSum);
} 