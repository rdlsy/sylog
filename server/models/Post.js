const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  message: {
    type: String,
  },
  privacy: {
    type: Number,
  }
}, { timestamps: true })

const Post = mongoose.model('Post', PostSchema);

module.exports = { Post }