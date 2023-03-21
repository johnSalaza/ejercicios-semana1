// Escriba un programa que entregue la suma de los primeros n números naturales.

var n: number = 1000
var incremento: number = 0;

for (let i = 1; i <= n; i++) {
  incremento += i;
}

console.log(incremento);