const express = require('express')
const app = express()
const router = express.Router()

//db
const db = require('./dbConfig')


//cetando nossa pasta views
const path = __dirname + '/views'
//routes
const sharks = require('./routes/sharks');

const port = process.env.PORT || 8083;


//logando o método
router.use((req, res, next) => {
    console.log('/' + req.method)
    console.log('from :: ' + req.socket.remoteAddress)
    next()
})

router.get('/', (req, res) => {
    res.sendFile(path + 'index.html')
})

router.get('/sharks', (req, res) => {
    res.sendFile(path + '/sharks.html')
})

//engine
app.engine('html', require('ejs').renderFile);
//default view egine
app.set('view engine', 'html');

//nested objects
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path))

app.use('/', router)
app.use('/sharks', sharks);

app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
})