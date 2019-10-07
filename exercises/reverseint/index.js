// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     n = n.toString().trim('0').split('')
//     if(n[0] == '-'){
//         return parseInt('-' + n.slice(1).reverse().join(''))
        
//     }else{
//         return parseInt(n.reverse().join(''))
//     }
// }

function reverseInt(n) {
    const revNum = n.toString().split('').reverse().join('')
    if(n < 0){
        return parseInt(revNum) * -1
    }
    return parseInt(revNum)
    
}

module.exports = reverseInt;
