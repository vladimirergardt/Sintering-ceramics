const express = require('express')
const bodyParser = require('body-parser')
const  cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

// add mongoose
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect(`mongodb://vladimir:12345a@ds231643.mlab.com:31643/sintering`, { useNewUrlParser: true })

mongoose.connection.once('open', () => {
  console.log('connected to database');
})


const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || config.port,
  () => console.log(`Server start on port ${ config.port } ...`))

// first path
app.get('/posts', (req, res) => {
  res.send(
    [{
      title: 'Hello world!',
      description: 'Hi there'
    }]
  )
})

// mongoose.connect(config.dbURL, config.dbOptions)
//
// mongoose.connection
//   .once('open', () => {
//     console.log('Mongoose - successful connection ...')
//     app.listen(process.env.PORT || config.port,
//       () => console.log(`Server start on port ${config.port} ...`))
//   })
//   .on('error', error => console.warn(error))

