// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     const hash = {}
//     let max = 0
//     let maxChar = ''
//     for(let i of str){
//         // if(!hash[i]) {
//         //     hash[i] = 1   
//         // }
//         // else {
//         //     hash[i]++
//         // }
//         hash[i] = hash[i]++ || 1;
//     }

//     for(let i in hash){
//         if(hash[i] > max){
//             max = hash[i]
//             maxChar = i
//         }
//     }
//     return maxChar

// }

// function maxChar(str) {
//     const hash = {}
//     let max = -1
//     let maxChar = ''
//     for (let i of str) {
//         hash[i] = ++hash[i] || 1;


//         if(hash[i] > max){
//             max = hash[i]
//             maxChar = i
//         }
//     }
//     return maxChar
// }

// function maxChar(str) {
//     const hash = {}
//     for (let i of str) {
//         hash[i] = ++hash[i] || 1;
//     }
//     const keys = Object.keys(hash);
//     // console.log(keys)

//     return keys.reduce((acc, cur) => hash[acc] > hash[cur] ? acc : cur, keys[0]);
// }

function maxChar(str) {
    const hash = {}
    let max = -1
    for (let i of str) {
        hash[i] = ++hash[i] || 1;
        max = hash[i] > max ? hash[i] : max
    }

    const keys = Object.keys(hash);

    // console.log(keys)
    // console.log(hash)
    // console.log(max)
    // console.log(keys.filter(k => (hash[k] === max)))
    return keys.filter(k => (hash[k] === max))[0];
}


module.exports = maxChar;