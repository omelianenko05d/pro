let a = Number(prompt("Zadej cislo, 1"));
let b = Number(prompt("Zadej cislo, 2"));

function funkce(a, b){
    let scitat = a + b;
    return scitat;
}

funkce(a, b);

function minus(a, b){
    let odcitat = a - b;
    return odcitat;
}

minus(a, b);

function deleno(a, b){
    let delit = a / b;
    return delit;
}

deleno(a, b);

function mnozit(a, b){
    let soucin = a * b;
    return soucin;
}

mnozit(a, b);
console.log("Vysledek operace je:" + prompt);