import mongoose from 'mongoose';

import HeightTypes from '../../helpers/enums/heightTypes';

const AnimalHeightSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    enum: Object.values(HeightTypes),
    default: 'medio'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const AnimalHeight = mongoose.model('AnimalHeight', AnimalHeightSchema);

module.exports = AnimalHeight;
