// fahrenheit = (celsius * 9/5) + 32;

// funkce - prevod teploty ze stupnu celsia na farenhit

//uzivatel zada ve funkci ve stupnich celsia, funkce ji nasledne prevede dle vzorce na stupne farenh - nasledne nechate vysledek vypsat

//funkci privolejte

function celsiusTOFahrenheit(){
    let c = prompt("Dozvedet celsius");
    c = Number(c);
    let f = (c * 9/5) + 32;
    console.log("Teplota v C" + c + "teplota v f" + f);

}
celsiusTOFahrenheit();
