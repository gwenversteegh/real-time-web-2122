/* https://socket.io/get-started/chat */

const express = require('express')
const app = express()
const fetch = require('node-fetch')
const http = require('http').createServer(app)
const path = require('path')
const socket = require('socket.io')(http)

const port = process.env.PORT || 9876

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.resolve('public')))


app.get("/", renderPagina)

function renderPagina (req, res){
  fetch(`https://opentdb.com/api.php?amount=20&category=27&difficulty=medium&type=multiple`)
  .then(function(response){
    return response.json()
  })
  .then((jsonData) =>{
    res.render('index', {
      data: jsonData.results
    })
  })
  .catch((err)=>{
    res.render('error', {
      pageTitle: "Error"
    })
  })
}

http.listen(port, () => {
    console.log('listening on port ', port)
  })



// socket.on('name', (name) => {
//   let object = {username: name , id: socket.id}
//   online.push(object)
//   io.emit('name', {username: name , id: socket.id})
// })

