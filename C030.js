//Pouzijte podminky if, else if a else

    //Uzivatel zada do konzole vek, pokud je pod 18, vypise se pomoci alert, ze nema pravo volit.Pokud bude starsi 18 let, zepta se jej na pohlavi a nasledne vypise dle pohlavi dobry den slecno/pane

    //Pokud zada 18 let (budeme brat ze ma narozeniny) vypise se -  Prijd volit az zitra

    let vek = Number (prompt("Zadej svuj vek:"));
    
    

    if (vek > 18){
        let pohlavi = prompt("Jsi muz nebo zena?");
        if (pohlavi == "zena"){
            alert("Dobry den slecno");
            pohlavi.toLowerCase(); //prevede vstup na male pismeno - lepsi pro if/switch
        }
        else if (pohlavi == "muz"){
            alert("Dobry den pane")
        }
        else{
            alert("Toto pohlavu neuvedeno");
        }

    }

    else if(vek == 18){
         alert("Prijdi az zitra");
    }
    else{
        alert("Nemas pravo volit");
    }