

export default function Dice(params = {}) {
    const diceNumber = generateRandomNumber();
    return( <h1>{params.name} {diceNumber}</h1>)
 }
 
 ;

function generateRandomNumber() {
    const min = 1;
    const max = 6;

    return Math.floor(Math.random() * (max - min + 1) + min);
}