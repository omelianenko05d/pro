let prvni = 5;
let druha = 3;
let vysledek;

//Operátory v JS
//------------------------------------------------------------------
//1. aritmetické operátory

//Sčítání (+)
vysledek = prvni + druha;
//console.log(prvni + druha);
console.log(vysledek);

//pozor na string !
vysledek = "5" + 3;
console.log(vysledek);
   

//Odčítání (-)
vysledek= prvni - druha;
console.log(vysledek);

// vysledek= prvni - "3";
// console.log(vysledek);


//Násobení (*)
console.log(5 * 3);

//Dělení (/)
console.log(5 / 3);


//Modulo (%)
vysledek = prvni%druha;
console.log("Zbytek po dělení");
console.log(vysledek);

//Inkrementace (++) - to samé jako +1
vysledek = 5;
vysledek++; /*nelze použít jako vysledek = vysledek++;*/
console.log(vysledek);

//Inkrementace (--) - to samé jako -1
vysledek = 3;
vysledek--;
console.log(vysledek);

//Exponent (**)
console.log(5**2); // 5 * 5
console.log(5**-2); //druhá odmocnina z 5

//--------------------------------------------------------------------
//2. Přiřazovací operátory
console.log("2. Přiřazovací operátory");

//Přiřazení (=)
let deklarace = 3;

// není třeba tyto typy u přiřazení umět z paměti
//P. sčítání
vysledek = 3;
vysledek += 5; //vysledek = vysledek + 5
console.log(vysledek);
vysledek -= 3; //vysledek = vysledek - 3
vysledek *= 2; //vysledek = vysledek * 2
vysledek /= 5; //vysledek = vysledek / 5
vysledek %= 5; //vysledek = vysledek % 5

//-------------------------------------------------------------------------
//3. Porovnávací operátory - výstup je true/false
console.log("3. Porovnávací operátory");

//Porovnávání hodnot (==)
vysledek = 3;
console.log(vysledek == 3);
console.log(druha == druha);

//Porovnávání hodnot a datového typu (===)
console.log(vysledek === "3");

//Porovnávání nerovnosti hodnot
vysledek = 3;
console.log(vysledek != 3); //false
console.log(vysledek != 4); //true

console.log(vysledek != "3"); //false
console.log(vysledek !== "3");//true

//--------------------------------------------------------------------------------
//4. Logické operátory - výstup je true/false + slouží pro spojení více operací
console.log("4. Logické operátory");

//Logický součin - AND (&&)
console.log(5 > 3 && 5 < 3);

//Logický součet - OR (||)
console.log(5 > 3 || 5 < 3);

//Logická negace - NOT (!)
console.log(!(5 > 5));

//-----------------------------------------------------------------------------------
//5. Podmínkové operátory - (podmínka ? "výstup true" : "výstup false")
console.log("5. Podmínkové operátory");
console.log(5 == 5 ? "ano" : "ne");

//------------------------------------------------------------------------------------
//6. Operátory řetězců - slouží ke spojování textu
console.log("6. Operátory řetězců");

//Spojení řetězců (+)
console.log("Ahoj  " + " Světe");
console.log("Ahoj" + " " + "Světe" + ".");

let x = "Ahoj ";
let y = "světe";
console.log(x + y);
let vysledna = x + y;




