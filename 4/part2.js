let matches = 0;
let allNums = [];
let winningNums = [];
let cardNums = [];
let matchesArray = [];
let cardQuantities = [];

//Starting with 1 of each card
for (q=0; q<199; q++){
    cardQuantities.push(1);
}

//Read the file and save as an array
const fs = require('fs');
const inputArray = fs.readFileSync('./input.txt').toString().split("\n");

for (i=0; i<inputArray.length; i++){
    //Reset for new row
    matches = 0;
    winningNums = [];
    cardNums = [];

    //Get winning numbers array and card numbers array
    const regex = /\r/;
    inputArray[i] = inputArray[i].replace(regex, '');
    allNums = inputArray[i].split(/[ ]{1,}/);
    allNums.splice(0,2);

    for(j=0; j<allNums.length; j++){
        if(j<10){
            winningNums.push(allNums[j]);
        } else if(j>10){
            cardNums.push(allNums[j]);
        }
    }

    //Compare arrays to determine how many  matches
    for(x=0; x<winningNums.length; x++){
        for(y=0; y<cardNums.length; y++){
            if(winningNums[x] == cardNums[y]){
                matches++;
            } 
        }
    }
    matchesArray.push(matches);

    if(matches == 0){ 
    } else if(matches == 1){
        cardQuantities[i+1]++;
    } else if(matches == 2){
        cardQuantities[i+1]++;
        cardQuantities[i+2]++;
    } else if(matches == 3){
        cardQuantities[i+1]++;
        cardQuantities[i+2]++;
        cardQuantities[i+3]++;
    } else if(matches == 4){
        cardQuantities[i+1]++;
        cardQuantities[i+2]++;
        cardQuantities[i+3]++;
        cardQuantities[i+4]++;
    } else if(matches == 5){
        cardQuantities[i+1]++;
        cardQuantities[i+2]++;
        cardQuantities[i+3]++;
        cardQuantities[i+4]++;
        cardQuantities[i+5]++;
    } else if(matches == 6){
        cardQuantities[i+1]++;
        cardQuantities[i+2]++;
        cardQuantities[i+3]++;
        cardQuantities[i+4]++;
        cardQuantities[i+5]++;
        cardQuantities[i+6]++;
    } else if(matches == 7){
        cardQuantities[i+1]++;
        cardQuantities[i+2]++;
        cardQuantities[i+3]++;
        cardQuantities[i+4]++;
        cardQuantities[i+5]++;
        cardQuantities[i+6]++;
        cardQuantities[i+7]++;
    } else if(matches == 8){
        cardQuantities[i+1]++;
        cardQuantities[i+2]++;
        cardQuantities[i+3]++;
        cardQuantities[i+4]++;
        cardQuantities[i+5]++;
        cardQuantities[i+6]++;
        cardQuantities[i+7]++;
        cardQuantities[i+8]++;
    } else if(matches == 9){
        cardQuantities[i+1]++;
        cardQuantities[i+2]++;
        cardQuantities[i+3]++;
        cardQuantities[i+4]++;
        cardQuantities[i+5]++;
        cardQuantities[i+6]++;
        cardQuantities[i+7]++;
        cardQuantities[i+8]++;
        cardQuantities[i+9]++;
    } else if(matches == 10){
        cardQuantities[i+1]++;
        cardQuantities[i+2]++;
        cardQuantities[i+3]++;
        cardQuantities[i+4]++;
        cardQuantities[i+5]++;
        cardQuantities[i+6]++;
        cardQuantities[i+7]++;
        cardQuantities[i+8]++;
        cardQuantities[i+9]++;
        cardQuantities[i+10]++;
    } 
}
//console.log(matchesArray);
//console.log(cardQuantities);

//Multiply both arrays and sum all of the extra cards
let totalExtras = 0;
for(a=0; a<199; a++){
    totalExtras = totalExtras + (matchesArray[a] * cardQuantities[a]);
    console.log(totalExtras);
}

let grandTotal = 199 + totalExtras;
console.log('Part 2 final answer: ' + grandTotal);