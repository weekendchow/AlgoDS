// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//#############Solution 1
// function reverseInt(n) {
//     n = n.toString().trim('0').split('')
//     if(n[0] == '-'){
//         return parseInt('-' + n.slice(1).reverse().join(''))
        
//     }else{
//         return parseInt(n.reverse().join(''))
//     }
// }

//#############Solution 2
// function reverseInt(n) {
//     const abN = Math.abs(n);
//     const revN = parseInt(abN.toString().split('').reverse().join(''));
//     return n < 0 ? -revN : revN;
// }

//#############Solution 3 Pure Math
// function reverseInt(n) {
//     let res = 0;
//     let abN = Math.abs(n);
//     while(abN != 0) {
//         res = res * 10;
//         res += parseInt(abN%10);
//         abN = parseInt(abN/10);
//     }
//     return n < 0 ? -res : res;
// }

//#############Solution 4
// function reverseInt(n) {
//     const revNum = n.toString().split('').reverse().join('')
//     if(n < 0){
//         return parseInt(revNum) * -1
//     }
//     return parseInt(revNum)
    
// }

//#############Solution 5
// function reverseInt(n) {
//     const revNum = n.toString().split('').reverse().join('')
//     return parseInt(revNum) * Math.sign(n)

// }

module.exports = reverseInt;
