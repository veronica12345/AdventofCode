//Read in the file, save as an array
const fs = require('fs');
const inputArray = fs.readFileSync('./test.txt').toString().split("\n");

//Loop through each line
for(i=0; i<inputArray.length; i++){
    getSpecialChar(i);
    getNumbers(i);
}

//Get the indexes of the special characters
function getSpecialChar(i){
    let regex = /\@|\#|\$|\%|\&|\*|\/|\+|\=/g;
    let indicesChar = [];
    while (null !== (matchArr = regex.exec(inputArray[i]))) {
        indicesChar.push([matchArr.index]);
    }
    console.log('Indices of the special characters: '+indicesChar); 
}

//Get the indices of all numbers
function getNumbers(i){
    let regexCurrent = /[0-9]|[1-9][0-9]|[1-9][0-9][0-9]/g;
    let numMatches = inputArray[i].match(/(\d+)/g);
    let indicesNum = [];
    while (null !== (matchArr = regexCurrent.exec(inputArray[i]))) {
        indicesNum.push([matchArr.index]);
    } 
    console.log("Indices of the numbers: "+indicesNum)
}

//Add up all the numbers 



