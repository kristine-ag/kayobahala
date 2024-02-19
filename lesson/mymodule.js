const fullName = ["Juan Dela Cruz", "Maria Clara", "Elsa of Arendelle"]

const students = [
    {name: fullName[0], age : 18, course: 'IT'},
    {name: fullName[1], age : 19, course: 'IS'},
    {name: fullName[2], age : 20, course: 'CS'},]

const hello = function(name = "Lucas"){
    console.log(`Hello ${name}`)
}

module.exports = {fullName, students, hello}