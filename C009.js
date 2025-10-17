
function prvni(){
    let jmeno = prompt("Jak se jmenuješ?");
    let prijmeni = prompt("Vase prijmeni?");
    console.log("Vitejte" + jmeno + "s prijmenim" + prijmeni);
}


function druha(){
    let cislo1 = Number(prompt("Zadej prvni cislo: "));
    let cislo2 = Number(prompt("Zadej druhe cislo: "));
    return cislo1 * cislo2;
}

cislo1();
cislo2();

//nefenguje opravit