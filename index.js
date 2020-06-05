const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const logger = require('./lib/logger')
const { port, dbURI } = require('./config/environmental')
const router = require('./config/router')

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

