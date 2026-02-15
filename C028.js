let a = Number(prompt("Zadej sirku"));
let b = Number(prompt("Zadej vysku"));
let vysledek = "";

for (let i = 0; i < b; i++){
    for(let p = 0; p < a; p++){
        vysledek += "#";
    }
    vysledek += "\n";
}

console.log(vysledek);