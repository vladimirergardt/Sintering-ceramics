/**
 * Created by Ergardt.Vladimir on 20.01.2019.
 */

const express = require('express')
const router = express.Router()
const User = require('../models/auth-models')

router.post('/addUser', (req, res) => {
    const user = new User({
        login: req.body.login,
        password: req.body.password,
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
    User.find({} ,(err, data) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send( { data: data } )
        }
    })
})

router.post('/auth', (req, res) => {
    const auth = {
        login: req.body.login,
        password: req.body.password,
    }
    User.find((err, data) => {
        if (err) {
            console.log(err)
        } else {
            let status = false;

            data.map((item) => {
                item.login === auth.login && item.password === auth.password
                    ? status = true
                    : false;
            });
            res.send({
                // data,
                // auth,
                // success: true,
                // message: `User: ${data.__id}`
                status: status,
            })
        }
    })
})

module.exports = router