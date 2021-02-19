const authUser = (req, res, next) => {
    if(!req.user) {
        res.status(403)
        return res.send('You need to sign in')
    }

    next()
}

const authRole = role => {
    return (req, res, next) => {
        if(req.user.role !== role) {
            res.status('401')
            return res.send("You dont have the required permission to access this route.")
        }

        next()
    }
}

module.exports = {
    authUser,
    authRole   
}