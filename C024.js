//zkuste vytvorit webovou aplikaci, ktera funguje jako kolkulacka na + - *

//aplikace bezi dokud ji uzivatel neukonci pomoci vyber

//appka nejdrive necha uzivatel zadat dva cisla, nasledne vybrat operaci a po vypoctu se ho zepta zda si preje operace zapokovat nebo aplikaci ukoncit

// osetrete vstupy a deleni 0

let cislo1;
let cislo2;
let operace;
let podminka;

do{
    cislo1=Number(prompt("zadej 1 cislo")); //prompt - vystup je vzdy text
    cislo2=Number(prompt("zadej 2 cislo"));

    operace = prompt("zadej +,-,*,/");

    switch(operace){
        case "+":
            console.log(cislo1 + cislo2);
        break;

        case "-":
            console.log(cislo1 - cislo2);
        break;

        case "*":
            console.log(cislo1 * cislo2);
        break;

        case "/":
            if (cislo2 !== 0){
            console.log(cislo1 / cislo2);
            }else{
                alert("nelze delit 0");
            }
        break;
        default:
            console.log("spatny format vystupu");
            alert("neumis operandy");
            break;
    }

podminka = prompt("pro ukonceni programu ymackni x")

} while(podminka !== "x" && podminka !=="X");
