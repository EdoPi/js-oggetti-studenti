/*
Creare un oggetto che descriva uno studente con le seguenti proprietà:
nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto
studente inserendo nell’ordine: nome, cognome e età.
*/


var studente = {
  'nome': 'Edoardo',
  'cognome': 'Pizzicannella',
  'età': 33,

}

for (var key in studente) {
  console.log(studente[key]);
}


var studenti = [

  studenteUno = {
    'nome': 'Edoardo',
    'cognome': 'Pizzicannella',
    'età': 33,
  },

  studenteDue = {
    'nome': 'Francesco',
    'cognome': 'Totti',
    'età': 44,
  },

  studenteTre = {
    'nome': 'Charlize',
    'cognome': 'Theron',
    'età': 45,
  },


]


for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i]);
  var studenteIscritto = studenti[i]
  for (var key in studenteIscritto) {
    console.log('lo studente si chiama ' + studenteIscritto.nome + ' ' + studenteIscritto.cognome);
  }
}

var newStudent = {};

newStudent.nome = prompt('per iscrivere un nuovo studente, inserisci il suo nome');
newStudent.cognome = prompt('ora inserisci il suo cognome');
newStudent.età = parseInt(prompt('inserisci l\'età'));

studenti.push(newStudent);

console.log('hai appena iscritto ' + studenti[3].nome + ' ' + studenti[3].cognome + ' di ' + studenti[3]['età'] + ' anni\, nella scuola');
