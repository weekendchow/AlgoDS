// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//############Solution 1
// function reverse(str) {
//     //js function .reverse() only reverse array!!!
//     return str.split('').reverse().join('')
// }

//############Solution 2
// function reverse(str) {
//     let revStr = ''
//     for(let i of str) {
//         revStr = i + revStr
//     }
//     return revStr
// }

//#############Solution 3
function reverse(str) {
    return str.split('').reduce((revStr, i) => i + revStr)
}

module.exports = reverse;
