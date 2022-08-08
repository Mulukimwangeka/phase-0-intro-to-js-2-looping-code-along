// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];
const events = 'surprise';
let thankYouCards = []; 

function writeCards(names,events){
    for (let i = 0; i < names.length; i++) {
        let msg = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
        thankYouCards.push(msg);
    }
    console.log(thankYouCards);
    return thankYouCards;
    
}
// console.log( writeCards(names,events));





 function countDown(number){
    let countDown = 10;
    while (countDown >= -0){
        console.log(countDown--);
    }
}
// countDown(number)