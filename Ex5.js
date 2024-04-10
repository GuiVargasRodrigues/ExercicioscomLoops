const numeros = [5, 8, 12, 3, 10];
let soma = 0;


for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}


let media = soma / numeros.length;


console.log("A média dos números é: " + media);
