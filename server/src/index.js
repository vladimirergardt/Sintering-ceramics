const express = requeire('express')
const bodyParser = requeire('body-parser')
const  cors = requeire('cors')
const morgan = requeire('morgan')
const config = requeire('./config/config')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || config.port,
  () => console.log(`Server start on port ${ config.port } ...`))
