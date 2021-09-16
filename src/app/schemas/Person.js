import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City'
  },
  eLar: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

PersonSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 4);
  this.password = hash;

  next();
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
