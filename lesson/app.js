// const mymodule = require('./node/mymodule')

// console.log(mymodule)
// mymodule.hello()




const {students, hello} = require('./mymodule')

hello()

for (let i = 0; i < students.length; i++){
    console.log(students[i])
}