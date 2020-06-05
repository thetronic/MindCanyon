const mongoose = require ('mongoose')


const blogSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now, required: true },
  title: { type: String, required: true },
  summary: { type: String, required: true },
  image: { type: String, required: true },
  body: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: false },
}, {
  timestamps: true 
})

module.exports = mongoose.model('Blog', blogSchema)
