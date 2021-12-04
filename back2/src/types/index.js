const {projectType} = require('./proyecto')
const {userType} = require('./usuario')
//const {inscripcion} = require('./inscripcion')
const{rolType} = require('./rol')
const{advanceType}=require('./avance')

const types = [projectType,userType,rolType,advanceType]

module.exports= {
    types
}