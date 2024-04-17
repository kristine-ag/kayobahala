var admin = require("firebase-admin");

var serviceAccount = require("./kayobahala-de725-firebase-adminsdk-waxnb-50009c95c9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore()
const memberColl = db.collection('unis')


app.get('/', async function (req, res) {
    const items = await memberColl.get()
    console.log(items.docs.length)
    let data = {
        itemData: items.docs,
        heading: "UnIS Members",
        song: "superwoman"
    }
    res.render('index', data , {heading: "We're gonna find it!"})
})