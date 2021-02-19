const ROLE = {
    ADMIN: 'admin',
    USER: 'user'
}

module.exports = {
    ROLE: ROLE,
    users: [
        { id: 1, name: 'John', role: ROLE.ADMIN },
        { id: 2, name: 'Doe', role: ROLE.USER },
        { id: 3, name: 'Smith', role: ROLE.USER },
    ],
    projects: [
        { id: 1, name: `John's project`, userId: 1 },
        { id: 2, name: `Doe's project`, userId: 2 },
        { id: 3, name: `Smiths' project`, userId: 3 },
    ]
}