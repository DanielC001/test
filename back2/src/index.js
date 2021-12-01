const express = require('express')
const mongoose = require('mongoose')
const {ApolloServer} = require('apollo-server-express')
//require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();
const {BD_URI}=process.env;

const {resolvers}=require('./resolvers')
const{types} = require('./types')


const app = express()
const server = new ApolloServer({
  typeDefs:types,
  resolvers:resolvers
})

mongoose.connect(BD_URI,async()=>{
  console.log("conexion a BD establecida correctamente");
  app.listen(5010,async()=>{
    await server.start()
    server.applyMiddleware({app})
    console.log("Servidor conectado en el puerto 5010");
  })
})

