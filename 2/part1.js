let totalSum = 0;

const fs = require('fs');
const array = fs.readFileSync('./input.txt').toString().split("\n");

//Check which games (aka which indexes of the array) contain more than 12 red cubes
for(i=0; i<array.length; i++){
    checkGame(i)
}

function checkGame(i) {
    let matches = array[i].match(/[1][3-9]\s(red)|[2-9][0-9]\s(red)|[0-9][0-9][0-9]\s(red)|[0-9][0-9][0-9][0-9]\s(red)|[1][4-9]\s(green)|[2-9][0-9]\s(green)|[0-9][0-9][0-9]\s(green)|[0-9][0-9][0-9][0-9]\s(green)|[1][5-9]\s(blue)|[2-9][0-9]\s(blue)|[0-9][0-9][0-9]\s(blue)|[0-9][0-9][0-9][0-9]\s(blue)/g)
    
    if (matches == null){
        totalSum = totalSum + (i+1);
        //console.log(i);
    } else {
        //console.log("This game is impossible, don't tally it up")
    }
}

console.log("The final answer for Day 2 is...drumroll...: "+totalSum);