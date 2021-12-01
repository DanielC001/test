const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    contraseña:{
        type:String,
        required:true
    },
    rol:{
        type:Schema.Types.ObjectId,
        ref:"rol"
    },
    estado:{ 
        type:String,
        required:true,
        enum:["Pendiente","Autorizado","No autorizado"]
    }
})

module.exports = mongoose.model("Usuario",UsuarioSchema)