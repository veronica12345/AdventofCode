let totalSum = 0;

//Read the file and save as an array
const fs = require('fs');
const inputArray = fs.readFileSync('./input.txt').toString().split("\n");

for (i=0; i<inputArray.length; i++){
    compute(i);
}

function compute(i) {
    //Save the winning numbers into an array (should be 10) and the other numbers into an array (should be 25)
    let allNums = [];
    let winningNums = [];
    let cardNums = [];
    allNums = inputArray[i].split(/[ ]{1,}/);
    allNums.splice(0,2);

    for(j=0; j<allNums.length; j++){
        if(j<10){
            winningNums.push(allNums[j]);
        } else if(j>10){
            cardNums.push(allNums[j]);
        }
    }
    //console.log(winningNums);
    //console.log(cardNums);

    //Compare arrays, if there is a match then set value of the card to 1. For each additional match, multiply the value by 2
    let cardValue = 0;
    for(x=0; x<winningNums.length; x++){
        for(y=0; y<cardNums.length; y++){
            if(winningNums[x] == cardNums[y] && cardValue == 0){
                cardValue = 1;
            } else if(winningNums[x] == cardNums[y] && cardValue !=0){
                cardValue = cardValue*2;
            }
        }
    }
    //console.log(cardValue)

    //Sum all of the cardValues
    totalSum = totalSum+cardValue;
    console.log(totalSum);
}

