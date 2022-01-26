// Write your code below


// function checkUniqueCHars(word){
//     let lowerCaseWord = word.toLowerCase()
//        for(let i = 0; i < lowerCaseWord.length-1; i++){
//             for(let j = i+1; j < lowerCaseWord.length; j++){
//                 if( lowerCaseWord[i] === lowerCaseWord[j]){
//                     return false
//                 }
//             }
//         }
//     return true    
// }

// console.log(checkUniqueCHars('Hibuddy'))


function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

  console.log(hasUniqueChars('hibuDdy'))