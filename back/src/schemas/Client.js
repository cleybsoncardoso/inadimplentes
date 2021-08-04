const mongoose = require('mongoose')

const Client = new mongoose.Schema({
    name: { type: String, required: true },
    billets: { type: Array, required: true }
})

module.exports = mongoose.model('Client', Client)