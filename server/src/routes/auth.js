/**
 * Created by Ergardt.Vladimir on 20.01.2019.
 */

const express = require('express')
const router = express.Router()
const User = require('../models/auth-models')

router.post('/addUser', (req, res) => {
    const user = new User({
        login: req.login,
        password: req.password,
    })
    user.save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send({
                success: true,
                message: `User with id:${data._id} saved successfully!`
            })
        }
    })
})

router.get('/getUsers', (req, res) => {
    User.find( {} ,(err, data) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send( { data } )
        }
    })
})

module.exports = router