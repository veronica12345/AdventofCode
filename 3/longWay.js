//Read in the file, save as an array
const fs = require('fs');
const inputArray = fs.readFileSync('./test.txt').toString().split("\n");

//Loop through each line
for(i=0; i<inputArray.length; i++){
    getIndices(i);
}

function getIndices(i) {
    let charArray = inputArray[i].split('');
    for (i=0; i<charArray.length; i++){
        if(charArray[i] == '@'|'#'|'$'|'%'|'&'|'*'|'/'|'+'){
            indices.push(charArray[i]);
        }
    }
    console.log(indices);
}