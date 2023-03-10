const bici = [
    {
       nome: 'bici1',
       peso:  20
    },
    {
        nome: 'bici2',
        peso:  30
     },
     {
        nome: 'bici3',
        peso:  25
     }
];

function pesoMinore(arr) {

}

let element = 0;

for (let index = 0; index < bici.length; index++) {

    if(element < bici[index].peso) {
        element = bici[index].peso;
    }

}

console.log(element);


/* ESERCIZIO 2 */
const squadre = [
    {
        'nome': 'milan',
        'falli': 0,
        'goal': 0,
    },
    {
        'nome': 'napoli',
        'falli': 0,
        'goal': 0,
    },
    {
        'nome': 'inter',
        'falli': 0,
        'goal': 0,
    }
];

let arr = [];

for (let index = 0; index < squadre.length; index++) {
    squadre[index].falli = Math.floor(Math.random() * (5 - 1) + 1);
    squadre[index].goal = Math.floor(Math.random() * (5 - 1) + 1);

    let {nome, falli} = squadre[index];
    arr.push(nome);
    arr.push(falli);
}

console.log(arr);
