import mongoose from 'mongoose';

const AnimalTypeSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const AnimalType = mongoose.model('AnimalType', AnimalTypeSchema);

module.exports = AnimalType;
