const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const logger = require('./lib/logger')
const { port, dbURI } = require('./config/environmental')

mongoose.connect(
  dbURI, 
  { useNewUrlParser: true , useUnifiedTopology: true },
  (err) => {
    if (err) return console.log(err)
    console.log('Mongo is connected')
  })

  



app.use(bodyParser.json())
app.use(logger) 


mongoose.connect(dbURI)
app.listen(port, () => console.log(`Up and running on port ${port}`))
