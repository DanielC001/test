const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InscripcionSchema = new Schema({
    idProyecto:{
        type:Schema.Types.ObjectId,
        ref:"proyecto"
    },
    idEstudiante:{
        type:Schema.Types.ObjectId,
        ref:"usuario"
    },
    aceptadoIsActive:{
        type:Boolean
    },
    fechaIngreso:{
        type:Date
    },
    fechaEgreso:{
        type:Date
    }
})

module.exports = mongoose.model("Inscripcion",InscripcionSchema)