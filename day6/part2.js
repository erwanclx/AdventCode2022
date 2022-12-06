import fs from 'fs';

const data = fs.readFileSync('data.txt', 'utf8').split(''); 

let temp_arr = [];

for (let i = 0; i < data.length; i++) {
    temp_arr.push(data[i]);
    if (temp_arr.length === 14) {
        let set = new Set([...temp_arr]);
        if ([...set.values()].length === 14) {
            console.log(i + 1);
            console.log(temp_arr);
            break;
        } else {
            temp_arr.shift();
        }
    }
}