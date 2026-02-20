//pomoci cyklu FOR 
/* nechte uzivatele zadat ciselnou hodnotu. Tato ciselna hodnota bude pouzivat k zajisteni poctu nasobku zadaneho cisla mezi 1 a 1000.

Tzn. pokud uzivatel zada napriklad 7. Vypise se na vystupu jeden radek kde bude soucet, kolikrat se 7 vejde do 1000*/

let cislo = Number(prompt("Zadej cislo: "));
let pocet = 0;

for (let i = 1; i < 1000; i++){
    if(i % cislo ==0){
        pocet ++;
    }
}
console.log("Cislo " + cislo + "se v ramci 1 A 1000 " +  pocet +  "krat");