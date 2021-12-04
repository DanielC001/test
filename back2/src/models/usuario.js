const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Rol = require('./rol')
const Proyecto=require('./proyecto')

const UsuarioSchema = new Schema({
    correo:{
        type:String,
        required:true,
        unique:true
    },
    identificacion:{
        type:String,
        required:true,
        unique:true
    },
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    contrasena:{
        type:String,
        required:true
    },
    rol:{
        type:Schema.Types.ObjectId,
        ref:"Rol"
    },
    estado:{ 
        type:String,
        enum:["Pendiente","Autorizado","NoAutorizado"],
        default:"Pendiente"
    },
    idProyecto:[{
        type:Schema.Types.ObjectId,
        ref:"Proyecto"
    }]
})

module.exports = mongoose.model("Usuario",UsuarioSchema)