const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const bodyParser = require('body-parser')
const fs = require('fs')

//Set up our server to allow cross origin requests
//You can copy and paste this.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Use bodyparser middleware to handle JSON and create req.body for us
app.use(bodyParser.json())

//Some sample data
//cart is an object, with skis as the key, and an array of ski name(s) for each name

let cart = []

initFile = () => {
  fs.writeFile('cart.json', '[]')
}

fs.readFile('cart.json', (err, data) => {
  if (err) {
    initFile()
  } else if (data) {
    cart = JSON.parse(data)
  }
})

app.get('/checkout', (req, res) => {
  //Get the cart
  let savedCart = cart
  res.json(savedCart)
})

app.post('/checkout', (req, res) => {
  console.log(req.body.cart)

  let newCart = req.body.cart
  cart = newCart

  if (cart) {
    fs.writeFile('cart.json', JSON.stringify(cart))
    //Send back a success message
    res.json({ success: true })
  } else {
    res.json("ARE YOU POSTMANNING THIS SHIT RIGHT NOW? Cause it's working but this fucks up the cart.json file with undefined and prevents me adding new cart items again in future. Caught it this time though!")
  }
})

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})