const express = require('express')
const question_Controller = require('./controllers/question_Controller')
const room_Controller = require('./controllers/room_Controller')

const route = express.Router() 

// req é a requisissão da rota, e res é o response
route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))    
route.get('/create-room', (req, res) => res.render('index', {page :'create-room'}))    

route.post('/start-room', room_Controller.create)
route.get('/room/:room', room_Controller.open)   
route.post('/enterroom', room_Controller.enter)

route.post('/question/create/:room' , question_Controller.create)
route.post('/question/:room/:question/:action', question_Controller.index)

//exportando a constante route
module.exports = route