import fs from 'fs';

const file = fs.readFileSync('data.txt', 'utf8');

const scoreByItem = {
  X: 1, // Rock
  Y: 2, // Paper
  Z: 3, // Scissors
  A: 1, // Rock
  B: 2, // Paper
  C: 3, // Scissors
}

let score = 0;
let result = [];

function compare(opponent, choice){
  if (scoreByItem[opponent] === scoreByItem[choice]) {
    score += scoreByItem[choice] + 3 
    result.push('draw')
    return
  }
  // draw
  if ((scoreByItem[opponent] == 1 && scoreByItem[choice] == 2) || (scoreByItem[opponent] == 2 && scoreByItem[choice] == 3) || (scoreByItem[opponent] == 3 && scoreByItem[choice] == 1)) {
    score += scoreByItem[choice] + 6
    result.push('win')
    return
  }
  // win
  else {
    score += scoreByItem[choice] + 0
    result.push('lose')
    return
  }
  // lose
}

const splitFile = file.split('\r\n');
console.log(splitFile)
console.log(splitFile.length)
for (let i = 0; i < splitFile.length; i++) {
  let [opponent, choice] = splitFile[i].split(' ');
  compare(opponent, choice);
  
// console.log(opponent, choice, score, result)
console.log(score)
}
console.log(result.length)
console.log(score)