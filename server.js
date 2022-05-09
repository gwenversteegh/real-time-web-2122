/* https://socket.io/get-started/chat */
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const port = process.env.PORT || 9876

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.resolve('public')))

app.get("/", (req, res)=>{
    res.render('chat')
})

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('message', (message) => {
    io.emit('message', message)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

http.listen(port, () => {
  console.log('listening on port ', port)
})


/*naam meegeven*/
let users = []