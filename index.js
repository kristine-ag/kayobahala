// cmd: "npm install nodemon"
// package.json in script: ""serve": "nodemon index.js""
// to run: npm run serve

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    /// request
    // console.log(req.url.toString())
    
    /// response
    // res.setHeader("Content-Type", "text/html")
    // res.write("<h1> stardenburdenhardenbart </h1>")
    // res.write("<p> I'll shelter and adore you more than anything </p>")
    // res.end()

    let myurl = './views/'
    if(req.url == '/home'){
        myurl += 'index.html'
        res.statusCode = 200
    }
    else if(req.url == '/about'){
        myurl += 'about.html'
        res.statusCode = 200
    }
    else{
        myurl += 'error.html'
        res.statusCode = 200
    }

    fs.readFile(myurl, (err, data) => {
        if(err){
            console.log(err)
        }
        else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('listen hmmMmm')
})