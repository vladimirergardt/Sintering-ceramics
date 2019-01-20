/**
 * Created by Ergardt.Vladimir on 02.11.2018.
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authSchema = new Schema({
    login: {
        type: String,
    },
    password: {
        type: String,
    }
})

const authModel = mongoose.model('logins', authSchema)
module.exports = authModel