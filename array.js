let x = [0,1,2,3,4]
let y = ["Hello", "Madlang", "Pipol", "Mabuhay"]

console.log(x)
console.log(y)

// two dimentional array
let z = [ [3,4], [5,6], [7,8]]
console.log(z)

for (let i=0; i<z.length; i++){
    for(let o=0; o<z[i].length; o++){
        console.log(z[i][o])
    }
}


let a = [1, 2, "appl3", true, [8,9], 4, 5, 6, 7]

// Function to check if a variable is an integer
function isInteger(value) {
    return typeof value === 'number' && Number.isInteger(value);
}
 // add a variable to the array
a.push("rel pangit")

// Filter the array to only include integers
let integers = a.filter(element => isInteger(element));

console.log(integers);
console.log(a)


