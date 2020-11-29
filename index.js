const express       = require('express')
const bodyParser    = require('body-parser')
const { log } = require('console')
const app           = express()
let server          = require("http").Server(app)
const io            = require('socket.io')(server)


const port = process.env.PORT || 5000;

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// SOCKET IO
var listUsers = []
io.on('connection', (socket) => {
    console.log('Connection: ' + socket.id); 
    // socket.on('disconnect', () => {
    //   console.log(socket.id + ' disconneted');
    // })
    socket.on('client-send-data', (data) => {
      
      // send to all connected clients
      // io.sockets.emit('server-send-data', data)

      // send comeback
      // socket.emit('server-send-data', data)

      // send to all connected clients excepting the sender
      // socket.broadcast.emit('server-send-data', data)
      
      // send number
    })

    // socket.on('send-number', data => {
    //   let {n1, n2} = data
    //   function sum(n1, n2) {
    //     return parseInt(n1) + parseInt(n2)
    //   }
    //   socket.broadcast.emit('server-send-result-num', sum(n1, n2))
    // })

   

    socket.on('client-register', data => {
      let {userName} = data
      if( listUsers.indexOf(userName) >= 0){
        socket.emit('server-not-register')
      }
      else{
        listUsers[listUsers.length] = userName;
        // listUsers.push(userName)
        socket.userName = userName
        socket.emit('server-register-success', userName)
        io.sockets.emit('server-send-list-users', listUsers)
      }
    }) 

    socket.on('client-send-chat', data => {
      io.sockets.emit('server-send-message', {userName: socket.userName, message: data})
    })

    // rooms
    socket.on('create-room', data => {
      socket.join(data)
      socket.nameRoom = data
      console.log('room', socket.adapter.rooms);
      for(var room in socket.adapter.rooms){
        console.log(room);
      }
      socket.emit('show-name-rooms', socket.nameRoom)
    //  commit2
    })
    socket.on('send-message-room', data => {
      io.sockets.to(socket.nameRoom).emit('server-send-message-roommm', data)
    })
    
}) 


app.get('/', (req, res) => {
  res.render('home')
})

server.listen(port, () => {
  console.log(`Socket app listening at http://localhost:${port}`)
})