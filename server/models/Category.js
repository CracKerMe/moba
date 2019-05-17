const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: { type: String},
  parent: { type: String }
})
module.exports = mongoose.model('Category', schema)
