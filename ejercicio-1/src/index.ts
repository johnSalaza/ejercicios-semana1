/*
Escriba un programa con tres variables (a, b y c). Las variables a y b tendrán los valores de los catetos de un triángulo rectángulo; en la variable c se deberá almacenar el valor de la hipotenusa. Use el teorema de Pitágoras para el cálculo.
*/

let catetoA: number = 34;
let catetoB: number = 43;
const hipotenusa = Math.hypot(catetoA, catetoB);
console.log ("hipotenusa de " + catetoA + " + " + catetoB + " = " + hipotenusa); 

