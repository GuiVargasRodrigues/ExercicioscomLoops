const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número para calcular seu fatorial: ", function(numero) {
    numero = Number(numero); 

    let fatorial = 1;

    
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    
    console.log(`A fatorial de ${numero} é: ${fatorial}`);

    
    rl.close();
});
