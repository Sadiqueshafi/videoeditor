const mongoose = require('mongoose')

const videoschema = mongoose.Schema({
  title: {String},
  url:{String},
  description:{String}
})

module.exports = mongoose.model('video',videoschema)
