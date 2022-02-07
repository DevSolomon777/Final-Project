const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
  name: {
    type: String
  },
  SKU: {
    type: String
  },
  ID: {
    type: Number
  }
}, {
  collection: 'inventory'
})

module.exports = mongoose.model('Inventory', productSchema)