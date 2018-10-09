const express = require('express')
const bodyParser = require('body-parser')
const  cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')

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
