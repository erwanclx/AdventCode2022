import fs from 'fs';

let file = fs.readFileSync('data.txt', 'utf8');
file = file.replace(/\r\n/g,'\n');

let table = file.split('\n\n')[0];
table = table.split('\n');
table.pop();

let columns = [];
table.forEach(element =>{
    for (let i = 0; i < element.length; i++) {
        let column = [];
        column.push(table.map(r => r[i]));
        columns[i] = column;
    }
});

var columns_final = [];
for (let i = 1; i < columns.length; i+=4) {
    let column = columns[i];
    column = column[0].filter((item) => item != ' ');
    columns_final.push(column.reverse());
}

console.table(table);
const directives = file.split('\n\n')[1].split('\n');
directives.forEach(directive => {
    directive = directive.split(' ');
    for (let i in directive) {
        if (Number.isInteger(parseInt(directive[i]))) {
            i++;
        }
        else {
            directive.splice(i,1);
            i++;
        }
    }
    let [number, from, to] = [...directive];
    move(parseInt(number), parseInt(from), parseInt(to)); 
       
});

let str_result = '';
columns_final.forEach(column => str_result += column[column.length - 1]);
console.log(str_result);

function move(number, from, to) {
    from--;
    to--;
    let chunk = columns_final[from].splice(0, columns_final[from].length - number);
    columns_final[to] = [...columns_final[to],...columns_final[from] ];
    columns_final[from] = chunk;
    
    return columns_final;
    
}