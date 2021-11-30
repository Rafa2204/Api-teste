const express = require('express')

const User = require('../models/user')

const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.create(req.body)

        console.log(user)
        return res.send({ user })
    }
    catch (erro) {
        console.log(erro)
        return res.status(400).send({ error:'Registration failed'})
    }

})

module.exports = app => app.use('/auth', router)