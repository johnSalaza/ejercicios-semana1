"use strict";
let altura = 170;
let peso = 53;
let edad = 25;
let imc = peso / (altura * altura);
let riesgo;
if (imc < 22.0) {
    if (edad < 45) {
        riesgo = "bajo";
    }
    else {
        riesgo = "medio";
    }
}
else if (edad < 45) {
    riesgo = "medio";
}
else {
    riesgo = "alto";
}
console.log(riesgo);
//# sourceMappingURL=app.js.map