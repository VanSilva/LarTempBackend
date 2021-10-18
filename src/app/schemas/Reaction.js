import mongoose from 'mongoose';

const ReactionSchema = new mongoose.Schema({
  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person'
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Reaction = mongoose.model('Reaction', ReactionSchema);

module.exports = Reaction;
