// - chiediamo l' email all' utente
const emailUtente = prompt(' scrivi qui la tua email')
console.log(emailUtente)

// - creaiamo una variabile array con la lista delle email
const emailsUtenti = ['mamma@gmail.com', 'marta@gmail.com', 'polo@gmail.com', 'festa@gmail.com', 'pollo@gmail.com'] 
console.log(emailsUtenti)

let isEmailFound = false; // variabile booleano
//   - confrontiamo l'email dell utente con l'email della lista
const lunghezzaArray = emailsUtenti.length
for (let i = 0; i < lunghezzaArray; i++)  {
    const emailsCorrenti = emailsUtenti[i]
    console.log(emailsCorrenti)

// - stampiamo un messaggio appropriato
    if (emailsCorrenti === emailUtente) {
        isEmailFound = true
//   - SE l'email è presente:
//     - accesso confermato
    
//   - ALTRIMENTI 
//     - accesso negato
} }

if (isEmailFound === true) {
    console.log('accesso consentito')

} else {
    console.log('accesso negato') 
}
console.log(isEmailFound)