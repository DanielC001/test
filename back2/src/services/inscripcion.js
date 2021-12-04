

createInscripcion = async (project) => {
    let projectInstance = new Proyecto(project)
    created_project = await projectInstance.save()
    await userService.UpdateProject(project[''], created_project['_id'])
    return created_project
}

getInscripciones = async () => {
    let projects = await Proyecto.find({})
    return projects
}

getInscripcionById = async (projectId) => {
    let project = await Proyecto.findById(projectId).exec()
    return project
}

updateInscripcion = async (projectId, project) => {
    newProject = await Proyecto.findByIdAndUpdate(projectId, project, { new: true })
    return newProject
}

deleteInscripcion = async (projectId) => {
    let project = await Proyecto.findByIdAndDelete(projectId)
    return project
}

module.exports = {
    
}