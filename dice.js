// Notes Ref: https://www.w3schools.com/JS/js_random.asp
// Dice Function
function rollDice (sides, resultId) {
    let result = Math.floor(Math.random() * sides + 1);
    document.getElementById(resultId).textContent = result; 
    return result;
}

// console.log(rollDice(6))
// console.log(rollDice(10))
// console.log(rollDice(20))