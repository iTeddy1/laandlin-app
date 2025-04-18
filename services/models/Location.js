const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
   url: {
      type: String,
      required: true
   },
   position: {
      type: Array,
      required: true
   },
   address: {
      type: String,
      required: true
   }
});

module.exports = mongoose.model('Location', locationSchema);