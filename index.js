const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const router = require('./config/router')
const { port, dbURI } = require('./config/environment')
const logger = require('./lib/logger')



mongoose.connect(
  dbURI, 
  { useNewUrlParser: true , useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is connected')
  })

  

  app.use((req, res, next) => {
    console.log(`Ìncoming ${req.method} to ${req.url}`)
    next()
  })

app.use(bodyParser.json())
app.use(logger) 
app.use('/api', router)

app.use(express.static(`${__dirname}/dist`))
app.use(express.static(`${__dirname}/public`))
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))




app.listen(port, () => console.log(`Up and running on port ${port}`))

module.exports = app

