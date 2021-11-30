const User = require('../models/user')

createUser = async(user)=>{
    let user = new User(user)
    user = await userInstance.save()
    return user
}

getUsers = async()=>{
    let user = await User.find({})
    return user
}

getUserById = async(userId)=>{
    let user = await User.findById((userId)).populate("projects") //variable del esquema
    return user
}

updateUser = async(userId,user)=>{
    let newuser = User.findByIdAndUpdate(userId,user,{new:true}) //{new:true} -> para traer el dato actualizado
    return newuser
}

//para llenar el array
UpdateProject = async(userId,projectId)=>{
    let user = await User.findByIdAndUpdate(userId,{
        $push:{
            projects:projectId
        }
    })
    return user
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    updateProject
}