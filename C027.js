/*
1.
pomoci cyklu for nechte uzivatele zadat cislo N, program vypise vsechny cisla mezi 1 a N, oddelene csrkou (1, 2, 3..)
*/

/*
2. 
POmoci cyklu for urci pocet sudych cisel z intervali od 1 do 100 vcetne
*/

let i = "";
for(let i = 0; i <= 8; i++){
    i = +"*";
}
console.log(i);

let N = Number(prompt ("Zadej N"));
let soupis = "";
for (let a = 1; a <= N; a++){
soupis += a;
}
else{
    soupis += a + ", ";
}
console.log(soupis);


let pocet = 0;
for(let b = 1; b<=100, b++;) {
    if(b%2 == 0){
        pocet++;
    }
}



