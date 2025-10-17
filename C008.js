

function scitat(a, b){
    return a + b;
}


function odcitat(a, b){
    return a - b;
}


function nasobit(a, b){
    return a * b;
}

function delit(a, b){
    return a / b;
}


let prvny = Number(prompt("Zadej prvni cislo"));
let druhy = Number(prompt("Zadej druhe cislo"));

console.log("Vysledek operace je: " + scitat(prvny, druhy));
console.log("Vysledek operace je: " + odcitat(prvny, druhy));
console.log("Vysledek operace je: " + nasobit(prvny, druhy));
console.log("Vysledek operace je: " + delit(prvny, druhy));