const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const port = 8000;

app.use((req, res, next) => {
    console.log('Request Made')
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method: ${req.method}`)
    next()
})

app.get('/', function (req, res) {
    // res.send('Hello World')
    // res.sendFile(`./views/index.html`, {root: __dirname})
    res.render('index', {heading: "We're gonna find it!"})
})

app.get('/about', function (req, res) {
    // res.sendFile(`./views/about.html`, {root: __dirname})
    res.render('about')
})

app.get('/home', (req, res) => {
    res.redirect('/')
})

app.get('/aboutus', (req, res) => {
    res.redirect('/about')
})

app.use((req, res) => {
    // res.status(404).sendFile(`./views/error.html`, {root: __dirname})
    res.render('error')
})

app.listen(port, () => {
    console.log(`Server is Running On Port ${port}`)
})