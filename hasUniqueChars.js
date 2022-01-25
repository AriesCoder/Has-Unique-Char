// Write your code below

let result = (word)=>{
    for(let i = 0; i < word.length-1; i++){
        for(let j = i+1; j < word.length; j++){
            if(word[i] ===  word[j]){            
                return false
            }    
        }    
    }
    return true
}

console.log(result('whatzupppp'))