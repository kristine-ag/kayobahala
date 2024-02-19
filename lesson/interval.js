// let x = 0
// setInterval (() => {
//     x++
//     if (c <= 4)
//     console.log("hello")
// }, 2000)

let x = 0
let myInterval = setInterval (() => {
    x++
    if (c <= 4){
        console.log("hello")
    }
    else{
        clearInterval(myInterval)
    }
}, 2000)

