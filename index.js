const express       = require('express')
const bodyParser    = require('body-parser')
const app           = express()
let server          = require("http").Server(app)
const io            = require('socket.io')(server)


const port = process.env.PORT || 5000;

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

io.on('connection', (socket) => {
    console.log('Connection: ' + socket.id); 
})


app.get('/', (req, res) => {
  res.render('home')
})

server.listen(port, () => {
  console.log(`Socket app listening at http://localhost:${port}`)
})