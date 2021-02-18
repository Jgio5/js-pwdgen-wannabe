// Esercizio senza visualizzazione su HTML

// const numerox = 19;
//
// var nome = prompt('Inserisci il tuo nome:');
// console.log(nome);
//
// var cognome = prompt('Inserisci il tuo cognome:');
// console.log(cognome);
//
// var colorePreferito = prompt('Inserisci il tuo colore preferito:');
// console.log(colorePreferito);
//
// alert('La tua password è: ' + (nome + cognome + colorePreferito + numerox));


// Esercizio con visualizzazione su HTML
const numeroX = 19;

document.getElementById('my_name').innerHTML
= name = prompt("inserisci il tuo nome:");
console.log(document.getElementById('my_name').innerHTML);

document.getElementById('my_surname').innerHTML
= surname = prompt("inserisci il tuo cognome:");
console.log(document.getElementById('my_surname').innerHTML);

document.getElementById('my_color').innerHTML
= bestcolor = prompt("inserisci il tuo colore preferito:");
console.log(document.getElementById('my_color').innerHTML);

var password = (name + surname + bestcolor + numeroX);

document.getElementById('my_pass').innerHTML = password;
