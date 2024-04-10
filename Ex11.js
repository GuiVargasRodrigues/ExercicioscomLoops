const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

function iniciarJogo() {
    rl.question("Tente adivinhar o número (entre 1 e 100): ", function(chute) {
        const chuteNum = Number(chute);
        
        if (isNaN(chuteNum) || chuteNum < 1 || chuteNum > 100) {
            console.log("Por favor, digite um número válido entre 1 e 100.");
            iniciarJogo();
            return;
        }

        if (chuteNum === numeroAleatorio) {
            console.log("Parabéns! Você acertou o número.");
            rl.close();
        } else if (chuteNum < numeroAleatorio) {
            console.log("O número é maior. Tente novamente.");
            iniciarJogo();
        } else {
            console.log("O número é menor. Tente novamente.");
            iniciarJogo();
        }
    });
}

console.log("Bem-vindo ao jogo de adivinhação!");

iniciarJogo();
