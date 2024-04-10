const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];
let cont = 0;

rl.setPrompt(`Digite o ${cont + 1}º número: `);
rl.prompt();

rl.on('line', function(num) {
    numeros.push(Number(num));
    cont++;

    if (cont < 10) {
        rl.setPrompt(`Digite o ${cont + 1}º número: `);
        rl.prompt();
    } else {
        rl.close();
    }
});

rl.on('close', function() {
    let menor = Math.min(...numeros);
    let maior = Math.max(...numeros);
    
    console.log("O menor número digitado é:", menor);
    console.log("O maior número digitado é:", maior);
});

