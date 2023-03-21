/*
El riesgo de que una persona sufra enfermedades coronarias depende de su edad y su índice de masa corporal:

edad < 45 edad ≥ 45

IMC < 22.0 bajo medio

IMC ≥ 22.0 medio alto

El índice de masa corporal es el cociente entre el peso del individuo en kilos y el cuadrado de su estatura en metros. 
Escriba un programa que almacene la estatura, el peso y la edad de una persona, y le entregue su condición de riesgo.
*/

let altura = 170
let peso = 53
let edad = 25


let imc = peso / (altura * altura);
let riesgo:string;

if (imc < 22.0) {
    if (edad < 45) {
        riesgo = "bajo";
    } else {
        riesgo = "medio";
    }
} else if (edad < 45) {
        riesgo = "medio";
    }else {
        riesgo = "alto";
    }

console.log(riesgo);

/*
let altura = parseInt(prompt("ingrese su altura", "0") !, 10);
let peso = parseInt(prompt("ingrese su peso", "0") !, 10);
let edad = parseInt(prompt("ingrese su edad", "0") !, 10);

riesgo = imc < 22 ? (edad < 45 ? "bajo" : "medio") : (edad < 45 ? "medio" : "alto");*/

