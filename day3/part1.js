import fs from 'fs';

const file = fs.readFileSync('data.txt', 'utf8');

const rucksackAll = file.split('\r\n');

let count = 0;

// Slice parts of rucksackAll
for (var rucksak in rucksackAll) {
    let middle = Math.floor(rucksackAll[rucksak].length / 2);
    let firstPart = rucksackAll[rucksak].slice(0, middle);
    let secundPart = rucksackAll[rucksak].slice(middle);

    // Slice the strings in arrays

    let firstPartArray = firstPart.split('');
    let secundPartArray = secundPart.split('');
    compare(firstPartArray, secundPartArray)
    
}

function compare(first, secund){
    first = [...new Set(first)];
    secund = [...new Set(secund)];
    let matching = first.filter(element => secund.includes(element));
    count += matching.reduce((a, b) => a + (b === b.toUpperCase() ? b.charCodeAt(0) - 38: b.charCodeAt(0) - 96), 0);
    return count
}

console.log(count)