const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProyectoSchema = new Schema({
    nombre:{
        type:String
    },
    objetivoGeneral:{
        type:String
    },
    objetivoEspecifico:[{
        type:String
    }],
    presupuesto:{
        type:Double
    },
    fechaInicio:{
        type:Date
    },
    fechaTerminacion:{
        type:Date
    },
    lider:{
        type:Schema.Types.ObjectId,
        ref:"usuario"
    },
    estadoIsActive:{
        type:Boolean
    },
    fase:{ //corregir
        type:String,
        required:true,
        enum:["Iniciado,En desarrollo,Terminado"]
    }
})

module.exports = mongoose.model("Proyecto",ProyectoSchema)