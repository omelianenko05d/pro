// funkce jsou bloky kodu, ktere muzeme privolat, zadat jim argumenty a opakovane volat napric kodem

console.log("Tato je ukazka funkce:");


//1. ukazka primitivni funkce
function nazev(){
    let hodnota = Number(prompt("zadej cislo:"));
    console.log((hodnota%2)==1);
}

nazev(); //privolani funkce

//2. Ukazka funkce z parametry a return
function secti(a, b){
    let soucet = a + b; //tato promenna neni videt mimo funkci
    console.log(soucet);
    return soucet; //vraci hodnoru z funkce, nepovinne
}
secti(7,3); //doplni do parametru funkce a = 7, b = 3
console.log(soucet); //nebude nalezen - je uvnitr funkce
let prvni = 10;
let druhy = 3;
console.log(secti(prvni, druhy) + 20);

//3. Plna struktura
/*function nazevFunkce(parametr1, parametr2,...){
kod funkce;
return vysledek; = nepovinne vraci hodnotu
funkce musi byt na konci
}
nazevFunkce(*/