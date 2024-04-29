const express = require('express')
const app = express()
const { students, hello } = require('./lesson/mymodule')
app.set('view engine', 'ejs')
const port = 8000;
const weather = require('weather-js')
const cors = require('cors');



var admin = require("firebase-admin");

var serviceAccount = require("./kayobahala-de725-firebase-adminsdk-waxnb-50009c95c9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore()
const memberColl = db.collection('unis')
const studentColl = db.collection('student')

app.use(
    cors({
        origin:true,
        credentials:true,
        optionsSuccessStatus:200
    })
)

app.use(express.json)

app.post('/addstudent', async function (req, res){
    const {name, age, course, subjects} = req.body
    try{
        const docRef = await studentColl.add({
            name,
            age,
            course,
            subjects
        })
        console.log(docRef.id)
    }
    catch (error){
        console.error('Error adding student:', error);
        res.status(500).json({error : 'Failed to add student'})
    }
})

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

    const studentSnapshot = await studentColl.get();
    const studentList = studentSnapshot.docs.map(doc => doc.data());
    res.json(studentList);

    // const items = await memberColl.get()
    // console.log(items.docs.length)
    // let data = {
    //     itemData: items.docs,
    //     heading: "UnIS Members",
    //     song: "superwoman"
    // }
    // res.render('index', data)
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