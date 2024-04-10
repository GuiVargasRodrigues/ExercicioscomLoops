const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function jogoCaraCoroa() {
    const resultados = ["cara", "coroa"];
    const resultadoAleatorio = resultados[Math.floor(Math.random() * resultados.length)];

    rl.question("Cara ou coroa? ", function(escolhaUsuario) {
        escolhaUsuario = escolhaUsuario.toLowerCase();

        if (escolhaUsuario !== 'cara' && escolhaUsuario !== 'coroa') {
            console.log("Por favor, digite 'cara' ou 'coroa'.");
            jogoCaraCoroa();
            return;
        }

        console.log("Resultado: " + resultadoAleatorio);

        if (escolhaUsuario === resultadoAleatorio) {
            console.log("Parabéns! Você ganhou!");
            rl.close();
        } else {
            console.log("Você perdeu. Tente novamente.");
            jogoCaraCoroa();
        }
    });
}

console.log("Bem-vindo ao jogo de cara ou coroa!");

jogoCaraCoroa();
