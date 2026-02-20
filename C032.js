//pomoci DO..while

// vytvorte jednouchou konzolovou aplikaci, ktera umozni uzivatele opakovane zadavat text - vypise se pomoci alert ("zadal jeste text: " + text), dokud nezna "exit", coz aplikaci ukonci
let i;
do{
    i = prompt("Zadej nejaky text");
    console.log("Zacal jste text" + i);
} while (i !== "exit");