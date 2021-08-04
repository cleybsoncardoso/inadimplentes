const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/inadimplentes-teste', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors());
app.use('/', require('./src'));

app.listen(3000, () => {
  console.log('Express started')
})