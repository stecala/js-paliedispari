const word = prompt('inserisci una parola');

palindrom(word);



function palindrom(parola) {
    /*     arrayParola=parola.split("");
     */
/*     let arrayParola = [];
    for (i = 0; i < word.length; i++) {
        arrayParola[i] = parola[i];
    }
    console.table(arrayParola); */
    let a = 0;
    let q = parola.length - 1;
    for (let i = 0; i < parola.length; i++) {
        parola[i];
        if (parola[i] == parola[q - i]) {
            a++;
            console.log(a)
        }
    }
    if (a < parola.length) {
        console.log('non è palindroma');
    }
    else {
        console.log('pal');
    }
}