// console.log("Hello World!")

const express = require ("express")
const app = express ()

const port = 8000
console.log(app)
app.listen (port, () => {
    console.log (`Server connected to port  ${port}`)
})

app.get('/', (req, res) => {
    res.send (`
        <H1>
            Hello World!
        </H1>
    `)

    console.log("request received")
})