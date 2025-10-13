//Opakovani
function nazev_funkce(a, b){
    let soucin = a * b;
    return soucin;
}

nazev_funkce(5, 9);

//Const - prebije funkce
const pevna_hodnota = 3;
function konstanta(){
    let vysledek = pevna_hodnota + 5;
    return vysledek;
}
konstanta();

//Anonymni funkce - nemaji pojmenovany identifikator(nazev), ale muze byt predana jako argument do dalsi funkce
let soucet = function(a, b){
    return a + b;
}

console.log(soucet(7, 2));

//Vnorena funkce 
function vnorena(a, b){
    let soucet = function(a, b){
        return a + b;
    }
    return soucet(a, b); //lze volat funkce uvnitr scope, nelze funkce mimo
}
vnorena(7, 3);

//Callback funkce - jsou funkce, jako argument do dalsich fci a volany pozdeji
function ukazRozsah(){
    let lokalni_promenna = "Tatto promenna je vititelna jen uvnitr funkce";
    return lokalni_promenna;
}
let pomocna = ukazRozsah();
console.log(pomocna);