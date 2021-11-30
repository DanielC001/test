const express = require('express')
const mongoose = require('mongoose')
const {ApolloServer} = require('apollo-server-express')
//require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();
const {BD_URI}=process.env;


const app = express()

mongoose.connect(BD_URI,async()=>{
  console.log("conexion a BD establecida correctamente");
  app.listen(5010,async()=>{
    console.log("Servidor conectado en el puerto 5010");
  })
})

