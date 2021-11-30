const User = require('../models/user')

createUser = async(user)=>{
    let user = new User(user)
    user = await userInstance.save()
    return user
}

getUser = async()=>{
    let user = await User.find({})
    return user
}

getUserById = async(userId)=>{
    let user = await User.findById((userId)).populate("projects") //variable del esquema
    return user
}

updateUser = async(userId,user)=>{
    let new_user = User.findByIdAndUpdate(userId,user,{new:true}) //{new:true} -> para traer el dato actualizado
}
