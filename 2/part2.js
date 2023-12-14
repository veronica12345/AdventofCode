let power = 0;
let totalSum = 0;

//Reads in the file and save to an array
const fs = require('fs');
const array = fs.readFileSync('./input.txt').toString().split("\n");

//Loops through each line in the input.text file
for(i=0; i<array.length; i++){
    checkGame(i)
}

function checkGame(i) {
    //For each game, this creates an array of the numbers for each colour, uses positive lookahead Regex
    let matchesRed = array[i].match(/[0-9](?=\s(red))|[1-9][0-9](?=\s(red))|[1-9][0-9][0-9](?=\s(red))/g)
    let matchesGreen = array[i].match(/[0-9](?=\s(green))|[1-9][0-9](?=\s(green))|[1-9][0-9][0-9](?=\s(green))/g)
    let matchesBlue = array[i].match(/[0-9](?=\s(blue))|[1-9][0-9](?=\s(blue))|[1-9][0-9][0-9](?=\s(blue))/g)
    
    //Convert string arrays into numbers
    for(i=0; i<matchesRed.length; i++){
        matchesRed[i] = parseInt(matchesRed[i]);
    }
    for(i=0; i<matchesGreen.length; i++){
        matchesGreen[i] = parseInt(matchesGreen[i]);
    }
    for(i=0; i<matchesBlue.length; i++){
        matchesBlue[i] = parseInt(matchesBlue[i]);
    }

    console.log(matchesRed)
    console.log(matchesGreen)
    console.log(matchesBlue)

    //Checks what the highest numbers are for red, green, and blue 
    let largestRed = matchesRed[0];
    for(i=0; i<matchesRed.length; i++){
        if(matchesRed[i] > largestRed) {
            largestRed = matchesRed[i];
        }
    };

    let largestGreen = matchesGreen[0];
    for(i=0; i<matchesGreen.length; i++){
        if(matchesGreen[i] > largestGreen) {
            largestGreen = matchesGreen[i];
        }
    };

    let largestBlue = matchesBlue[0];
    for(i=0; i<matchesBlue.length; i++){
        if(matchesBlue[i] > largestBlue) {
            largestBlue = matchesBlue[i];
        }
    };

    //Multiply these 3 numbers for each game to get the "power"
    power = largestRed*largestBlue*largestGreen;

    //Add all these powerstogether (100 numbers to add up)
    totalSum = totalSum + power;
    console.log("The final answer for Day 2 Part 2 is: "+totalSum);
}