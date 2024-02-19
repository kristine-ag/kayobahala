let statement = "Happy Birthday to you! hehe"

var c = 0
var v = 0

// get the legnth of the statement
console.log(statement.length)

// get how many vowels and consonants from the statement
for (i = 0; i < statement.length; i++){
    if (statement[i] === "a" || statement[i] === "e" || statement[i] === "i" || statement[i] === "o" || statement[i] === "u" ){
        v++
    }else if (statement[i] !== " " && statement[i] !== "!"){
        c++
    }
    
}

console.log(v)
console.log(c)