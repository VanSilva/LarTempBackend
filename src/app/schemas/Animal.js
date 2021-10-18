import mongoose from 'mongoose';

const AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'sem nome'
  },
  image: {
    type: String,
    required: true
  },
  history: {
    type: String
  },
  observation: {
    type: String
  },
  years: {
    type: Number,
    required: true
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AnimalType'
  },
  height: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AnimalHeight'
  },
  vaccine: {
    type: [
      {
        vaccine: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Vaccine'
        },
        date: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  castration: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Castration'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Animal = mongoose.model('Animal', AnimalSchema);

module.exports = Animal;
