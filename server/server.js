const express = require('express')
const massive = require('massive')
const axios = require('axios')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(bodyParser.json())

const {
  PORT,
  CONNECTION_STRING
} = process.env

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('DB connected')
})

app.listen(PORT, () => {
  console.log(`Server online on port ${PORT}`)
})