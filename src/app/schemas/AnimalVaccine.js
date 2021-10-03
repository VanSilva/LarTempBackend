import mongoose from 'mongoose';

const AnimalVaccineSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const AnimalVaccine = mongoose.model('AnimalVaccine', AnimalVaccineSchema);

module.exports = AnimalVaccine;
