const word = prompt('inserisci una parola');

palindrom(word);



function palindrom(parola){
    arrayParola=parola.split("");

    let a=0;
    let q=arrayParola.length-1;
    for(let i=0; i<arrayParola.length;i++){
        if(arrayParola[i]==arrayParola[q-i]){
            a++;
            console.log(a)
        }
        else{
            a--;
            console.log(a)
        }
    }
    if(a<arrayParola.length){
        console.log('non è palindroma');
    }
    else{
        console.log('pal');
    }
}