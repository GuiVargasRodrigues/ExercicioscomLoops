const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma frase: ", function(frase) {
    
    frase = frase.toLowerCase();
    
    let vogais = 0;
    let consoantes = 0;

    
    for (let i = 0; i < frase.length; i++) {
        let caractere = frase[i];
        
        if (/[aeiou]/.test(caractere)) {
            vogais++;
        }
        
        else if (/[a-z]/.test(caractere)) {
            consoantes++;
        }
    }

    
    console.log("Número de vogais:", vogais);
    console.log("Número de consoantes:", consoantes);

    rl.close();
});
