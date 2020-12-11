// VARIABILI

var nome;
var cognome;
var colore;



// Inserimento dati

nome = prompt('Inserire il tuo nome: ');

cognome = prompt('Inserire il tuo cognome: ');

colore = prompt('Inserire colore preferito: ');



// Stampa password insicura

document.getElementById('password-insicura').innerHTML += nome+cognome+colore+19;
