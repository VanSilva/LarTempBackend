import mongoose from 'mongoose';

import CastrationTypes from '../../helpers/enums/castrationTypes';

const AnimalCastrationSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    enum: Object.values(CastrationTypes),
    default: 'nao-castrado'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const AnimalCastration = mongoose.model('AnimalCastration', AnimalCastrationSchema);

module.exports = AnimalCastration;
