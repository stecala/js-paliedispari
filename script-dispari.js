/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const userChoice=prompt('scegli pari o dispari');
const userNumber=parseInt(prompt('inserisci un numero da 1 a 5'));
const pcNumber=Math.floor(Math.random() * 5) + 1;
console.log('questo è il numero del pc '+pcNumber);
let sumNumber=userNumber+pcNumber;

if((userChoice==='pari') || (userChoice==='dispari')){
    if((isNaN(userNumber)) || (userNumber < 1) || (userNumber>5)){
        console.log('inserisci un numero valido');
    }
    else{
        OddEven(sumNumber, userChoice);
    }
}else{
    console.log('inserisci pari o dispari')
} 




function OddEven(num, choice){
    let result=num % 2;
    console.log(result);
    if((result===0)&&(choice==='pari')){
        console.log('hai vinto');
    }
    else if((!result===0) && (choice==='dispari')){
        console.log('hai vinto');
    }
    else{
        console.log('hai perso :P');
    }
}