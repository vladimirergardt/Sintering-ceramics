/**
 * Created by Ergardt.Vladimir on 02.11.2018.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loginSchema = new Schema({
    login: {
        type: String,
    },
    password: {
        type: String,
    }
})

const loginModel = mongoose.model('logins', loginSchema)
module.exports = loginModel