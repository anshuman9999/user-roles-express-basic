const { ROLE } = require('../data')

const canViewProject = (user, project) => {
    return (
        user.role === ROLE.ADMIN ||
        user.id === project.userId
    )
}

const scopedProjects = (user, projects) => {
    if(user.role === ROLE.ADMIN) return projects
    return projects.filter(project => project.userId === user.id)
}

const canDeleteProject = (user, project) => {
    return (
        user.id === project.userId
    )
}

module.exports = {
    canViewProject,
    scopedProjects,
    canDeleteProject
}