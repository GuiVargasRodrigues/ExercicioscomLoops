let a = 0;
let b = 1;

console.log("Sequência de Fibonacci até o 10º termo:");

console.log(a);
console.log(b);

for (let i = 3; i <= 10; i++) {
    let proxTermo = a + b;
    console.log(proxTermo);
    a = b;
    b = proxTermo;
}
