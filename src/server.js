const express = require('express') //requisita o express
const route = require('./route') //mostra localização do route.js
const path = require('path')

//executa o express e guarda no server
const server = express() 

// falando pro express, que é nosso server, que nossa view engine vai ser ejs
server.set('view engine', 'ejs') 

//manda puxar a pasta /public e o conteúdo como estáticos
server.use(express.static("public"))

//Muda o diretório da pasta views
server.set('views', path.join(__dirname, 'views')) 

//pega o conteudo vindo do formulario e passa para o controller(middlewere)
server.use(express.urlencoded({extended:true}))

server.use(route)

//chama uma funcionalidade do express (listen) e cria um server na porta indicada. 
server.listen(3000, () => console.log("RODANDO")) 