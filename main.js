// Snack 1
// Dato l'array di nomi:
// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.
// esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4
// Snack 2
// Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
//   ];
// 1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
// 2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
// 3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


// Snack 3
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// Snack4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



// SNACK1 // 

// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// const arrayNew = [];

// myArray.forEach((Element,index) => {
//     if (index >= 2 && index <= 4) {
//         arrayNew.push(Element);

//     }

// }
// )

// let array2 = myArray.filter((element,index) => {
//     if ( index >= 2 && index <= 4) {
//         return true;

//     } else {
//         return false;
//     }
// }
// )

// console.log(arrayNew);
// console.log(array2);


// // SNACK 2 //

// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
// ];

// const capLetters = students.map( (Element) => {
//      letter = (Element.name).toUpperCase();
//     return letter;
// })


// console.log(capLetters)

// const marks = students.filter((Element) => {
//     if (Element.grades > 70) {
//         return true;

//     } else {
//         return false;
//     }
// })

// console.log(marks)

// const idGrades = students.filter((Element) => {
//     if( Element.grades > 70 && Element.id > 120){
//         return true;

//     } else {
//         return false;
//     }
// }
// )

// console.log(idGrades)


//SNACK 3 ESERCIZIO 2 //

// let limit = 100;
// let lowest;

// const bycicle = [
//     {
//         name: "mountainbike",
//         weight: 10
//     },
//     {
//         name: "enduro",
//         weight: 7
//     },
//     {
//         name: "graziella",
//         weight: 12
//     }
// ];

// console.log(bycicle)

// for(let i = 0; i < bycicle.length; i++){
//     let {name, weight} = bycicle[i];
//     if( weight < limit){ 
//         limit=weight;
//         lowest = name;
//     }
// }

// document.getElementById('bikeStamp').innerHTML = `la bici più leggera è ${lowest} e pesa ${limit}kg`;



//SNACK 4 ESERCIZIO 2 //

let pointsMaxvalue = 100;
let foulsMaxvalue = 50;


const teams = [
    {
        name: "Juventus",
        points: 0,
        fouls: 0
    },
    {
        name: "Inter",
        points: 0,
        fouls: 0
    },
    {
        name: "Fiorentina",
        points: 0,
        fouls: 0
    },
    {
        name: "Barcellona",
        points: 0,
        fouls: 0
    }

]

console.log(teams)

function randomNumber(){
    for( i=0; i < teams.length; i++) {
    let randomPoints = Math.round(Math.random() * pointsMaxvalue);
    let randomFouls = Math.round(Math.random() * foulsMaxvalue);
    teams[i].points = randomPoints;
    teams[i].fouls = randomFouls;
    }
    
}


randomNumber();
console.log(teams)

let newArray = teams.map(({name, fouls})  => {
    return {name, fouls}
})

console.log(newArray);








