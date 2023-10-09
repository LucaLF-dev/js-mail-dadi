// - chiediamo l' email all' utente
const emailUtente = prompt(' scrivi qui la tua email');
// console.log(emailUtente)

// - creaiamo una variabile array con la lista delle email
const emailsUtenti = ['mamma@gmail.com', 'marta@gmail.com', 'polo@gmail.com', 'festa@gmail.com', 'pollo@gmail.com']; 
// console.log(emailsUtenti)

let isEmailFound = false; // variabile booleano
//   - confrontiamo l'email dell utente con l'email della lista
const lunghezzaArray = emailsUtenti.length;
for (let i = 0; i < lunghezzaArray; i++)  {
    const emailsCorrenti = emailsUtenti[i];
    // console.log(emailsCorrenti)

// - stampiamo un messaggio appropriato
    if (emailsCorrenti === emailUtente) {
        isEmailFound = true;
//   - SE l'email è presente:
//     - accesso confermato
    
//   - ALTRIMENTI 
//     - accesso negato
} }

if (isEmailFound === true) {
    console.log('accesso consentito');

    // - creo una variabile per il giocatore:
//    - genero un numero random da 1 a 6
    const playerNumber = Math.floor(Math.random(1) * (6 - 1) + 1); 
    console.log(playerNumber);

// - creo una variabile per il computer:
//    - genero un numero random da 1 a 6
    const computerNumber = Math.floor(Math.random(1) * (6 - 1) + 1); 
    console.log(computerNumber);

// - stabilire il vincitore, in base a chi fa il punteggio piu alto
    let winnerGame 

if (playerNumber == computerNumber) {
    winnerGame = ' Repeat';
} else if (playerNumber > computerNumber) {
    winnerGame = ' Player Win'
} else {
    winnerGame = 'Computer Win'
}

const esitoDOMElement = document.getElementById('esito')
esitoDOMElement.innerHTML = '<h1>' + winnerGame +  '</h1>'



} else {
    console.log('accesso negato, non puoi giocare a dadi'); 
}

