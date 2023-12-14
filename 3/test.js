//Read in the file, save as an array
const fs = require('fs');
const inputArray = fs.readFileSync('./test.txt').toString().split("\n");

//Loop through each line
for(i=0; i<inputArray.length; i++){
    let matches = inputArray[i].match(/(\d+)/g);
    console.log(matches);
}

