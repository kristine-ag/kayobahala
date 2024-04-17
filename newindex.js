const express = require('express')
const app = express()

const { students, hello } = require('./lesson/mymodule')

app.set('view engine', 'ejs')

const port = 8000;

const weather = require('weather-js')

var admin = require("firebase-admin");

var serviceAccount = require("./kayobahala-de725-firebase-adminsdk-waxnb-50009c95c9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore()
const memberColl = db.collection('unis')


app.get('/davao', function (req, res) {
    weather.find({search: 'Davao, PH', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weatherdvo: eval(JSON.stringify(result, null, 2))
            }
            res.render('davao', data)
        }
      });
})


// import cryptoRandomString from 'crypto-random-string';
// let randomString = await cryptoRandomString({length:10});

console.log(students)

app.use((req, res, next) => {
    console.log('Request Made')
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method: ${req.method}`)
    next()
})

app.get('/', async function (req, res) {
    const items = await memberColl.get()
    console.log(items.docs.length)
    let data = {
        itemData: items.docs,
        heading: "UnIS Members",
        song: "superwoman"
    }
    res.render('index', data)
})

app.get('/about', function (req, res) {
    // res.sendFile(`./views/about.html`, {root: __dirname})
    res.render('about', {studentData: students, helloFunc: hello})
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