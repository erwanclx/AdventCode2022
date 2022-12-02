
import fs from 'fs';
const file = fs.readFileSync('data.txt', 'utf8');

const scoreByItem = {
  X: 1, // Lose
  Y: 2, // Draw
  Z: 3, // Win

  A: 1, // Rock
  B: 2, // Paper
  C: 3, // Scissors
}

const itemTable = {
  A: {weakness: 2, force: 3},
  B: {weakness: 3, force: 1},
  C: {weakness: 1, force: 2},
}

let score = 0;
let result = [];

function compare(opponent, choice){
  // lose
  if (scoreByItem[choice] == 1) {
    score += itemTable[opponent].force + 0
    result.push('lose')
    return
  }
  // draw
  if (scoreByItem[choice] == 2) {
    score += scoreByItem[opponent] + 3
    result.push('draw')
    return
  }
  // win
  if (scoreByItem[choice] == 3) {
    score += itemTable[opponent].weakness + 6
    result.push('win')
    return
  }
}

const splitFile = file.split('\r\n');
console.log(splitFile)
console.log(splitFile.length)
for (let i = 0; i < splitFile.length; i++) {
  let [opponent, choice] = splitFile[i].split(' ');
  compare(opponent, choice);
  console.log(score)
}