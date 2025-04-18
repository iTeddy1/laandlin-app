const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema({
   key: {
      type: String,
      required: true,
      index: true
   },
   translations: {
      type: Map,
      of: String,
      default: {}
   }
});

module.exports = mongoose.model('Translation', translationSchema);
