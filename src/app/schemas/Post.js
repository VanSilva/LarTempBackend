import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  },
  datePost: {
    type: Date,
    default: Date.now
  },
  dateLar: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean
  },
  animal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animal'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
