import fs from 'fs';

const file = fs.readFileSync('data.txt', 'utf8');

const pairs = file.split('\r\n');

let count = 0

for (var pair in pairs){
    let [first, second] = pairs[pair].split(',');
    let pairsInInt = [];
    pairsInInt.push(interval(parseInt(first.split('-')[0]), parseInt(first.split('-')[1])));
    pairsInInt.push(interval(parseInt(second.split('-')[0]), parseInt(second.split('-')[1])));

    if (pairsInInt[0].every(element => pairsInInt[1].includes(element)) || pairsInInt[1].every(element => pairsInInt[0].includes(element))){
        count++;
    }

}

function interval(begin, end){
    let intervalArray = [];

    while (begin <= end){
        intervalArray.push(begin);
        begin++;
    }
    return intervalArray;
}

console.log(count);
