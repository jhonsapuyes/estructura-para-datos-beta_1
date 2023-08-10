
// ctrl + f // para buscar cuantas etiquetas comparten atributos

//import express from "express"; //package.json aqui trabaja  con type module
const express = require("express"); //package.json aqui trabaja  con type commonjs

//import bodyParser  from "body-parser";
const bodyParser = require("body-parser"); 

//import cors from "cors";
const cors = require("cors"); 

const app = express()

const puerto= 9000
app.set('port', puerto)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.use('/', require('./src/end_points/routes'));

app.listen(app.get('port'),()=>{
    console.log(`server running to port ${app.get('port')}`)
})


