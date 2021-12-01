const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AvanceSchema = new Schema({
    idProyecto:{
        type:Schema.Types.ObjectId,
        ref:"proyecto"
    },
    fechaAvance:{
        type:Date
    },
    descripcion:{
        type:String
    },
    observaciones:{
        type:String
    }
})

module.exports = mongoose.model("Avance",AvanceSchema)