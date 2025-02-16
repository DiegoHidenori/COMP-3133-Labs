const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    trim: true
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  },
  city: {
    type: String,
    required: true,
    match: /^[A-Za-z\s]+$/
  },
  website: {
    type: String,
    required: true,
    match: /^https?:\/\/[^\s$.?#].[^\s]*$/
  },
  zipCode: {
    type: String,
    required: true,
    match: /^\d{5}-\d{4}$/
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{1}-\d{3}-\d{3}-\d{4}$/
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
