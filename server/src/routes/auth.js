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
        access: req.body.access,
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
            let access = 'access denied';

            data.map((item) => {
                item.login === auth.login && item.password === auth.password
                    ? (status = true) && (access = item.access)
                    : false;
            });
            res.send({
                status: status,
                access: access,
            })
        }
    })
})

module.exports = router