// changeable variable
let x =3
let y = 5
x = 1
console.log(x+y)

var p = "kapoy"
var o = " na ko"
i = "patay"
console.log(i+o)

// constant variable
const q = 1
const w = 3
console.log(q*w)

// if else
let grade = 75
if (grade === 75){
    console.log("yey pasa ka ", grade)
}
else {
    console.log("pila kaya imong score?")
}

// for loop
for( let i = 0; i < 10; i+=2){
    console.log(i)
}

// check how many letters are in a string
let n = "person"
console.log(n.length)

// output the string in array
let a = "adotham123xD143"
for (let i = 0; i < a.length; i++){
    console.log(a[i])
}

for (let i = a.length - 1; i >= 0; i--){
    console.log(a[i])
}

for (let i = 0; i < a.length; i++){
    if(a[i] === "1" || a[i] === "2"){
        console.log(a[i])
    }
}
