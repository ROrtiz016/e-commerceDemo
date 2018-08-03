const express = require('express')
const massive = require('massive')
const bodyParser = require('body-parser')
const controllers = require('./controllers')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(bodyParser.json())

const {
  PORT,
  CONNECTION_STRING
}=process.env

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('DB connected')
})

app.get('/api/products', controllers.getProducts)
app.post('/api/addcart/:id', controllers.addToCart)
app.put('/api/addcart/:id', controllers.addToCart)
app.get('/api/selectproduct/:id', controllers.getSelectedProduct)
app.get('/api/cart', controllers.getCart)
app.delete('/api/cart/:id', controllers.delete)
app.delete('/api/deleteAllCart', controllers.deleteAllCart)



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})