//vytvorte kod v js kde na uvod zada uzivatel dve cisla 
// nasledne vyrobte 2 funkce - soucin a soucet
// do techto funkci predejte uzivatelskr vstupy a nechte je provest vypocet
// nasledne tyto vypoctx zadejte jako parametry do spolecneho console.log kde dojde k odecteni vysledne hodnoty souctu do hodnoty soucinu => (soucin + soucet)


let a = Number(prompt("Zadej prvni cislo: "));
let b = Number(prompt("Zadej druhe cislo: "));

function soucet(a,b){ //nenei to povinne tady taky psat hodnoty a,b
    return a + b;
}

function soucin(a,b){
    return a * b;
}

console.log(soucet(a,b) - soucin(a,b));