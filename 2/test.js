let string = 'Game 1: 1 red, 10 blue, 5 green; 11 blue, 6 green; 6 green; 1 green, 1 red, 12 blue; 3 blue; 3 blue, 4 green, 1 red';

let matchesRed = string.match(/[0-9](?=\s(red))|[1-9][0-9](?=\s(red))|[1-9][0-9][0-9](?=\s(red))/g)
let matchesGreen = string.match(/[0-9](?=\s(green))|[1-9][0-9](?=\s(green))|[1-9][0-9][0-9](?=\s(green))/g)
let matchesBlue = string.match(/[0-9](?=\s(blue))|[1-9][0-9](?=\s(blue))|[1-9][0-9][0-9](?=\s(blue))/g)

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
console.log(largestRed);

let largestGreen = matchesGreen[0];
for(i=0; i<matchesGreen.length; i++){
    if(matchesGreen[i] > largestGreen) {
        largestGreen = matchesGreen[i];
    }
};
console.log(largestGreen);

let largestBlue = matchesBlue[0];
for(i=0; i<matchesBlue.length; i++){
    if(matchesBlue[i] > largestBlue) {
        largestBlue = matchesBlue[i];
    }
};
console.log(largestBlue);

let power = 0;
power = largestRed*largestBlue*largestGreen;
console.log(power);