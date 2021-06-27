const sqlite3 = require('sqlite3');
const { open } = require('sqlite'); //traz só o open dentro de sqlite

module.exports = () => 
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database // driver é quem comanda o arquivo do banco de dados
    })
