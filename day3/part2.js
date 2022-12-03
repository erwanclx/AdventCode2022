import fs from 'fs';

const file = fs.readFileSync('data.txt', 'utf8');

const rucksackAll = file.split('\r\n');

let count = 0;

const groupSize = 3

// Slice parts of rucksackAll
for (var i = 0; i < rucksackAll.length; i += groupSize) {
    let splitByGroup = rucksackAll.slice(i, i+groupSize);
    // Slice the strings in arrays
    let [ firstArrayLetters, secundArrayLetters, thirdArrayLetters ] = [splitByGroup[0], splitByGroup[1], splitByGroup[2]];
    compare(firstArrayLetters, secundArrayLetters, thirdArrayLetters);
}

function compare(firstArray, secundArray, thirdArray){
    firstArray = [...new Set(firstArray)];
    secundArray = [...new Set(secundArray)];
    thirdArray = [...new Set(thirdArray)];
    let matching = firstArray.filter(element => secundArray.includes(element));
    let matching2 = matching.filter(element => thirdArray.includes(element));
    count += matching2.reduce((a, b) => a + (b === b.toUpperCase() ? b.charCodeAt(0) - 38: b.charCodeAt(0) - 96), 0);
    return count
}

console.log(count)