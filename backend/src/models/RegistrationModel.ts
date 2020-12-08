import mongoose from 'mongoose';

const RegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  registration :{
    type: Number,
    require: true,
  },

  institution_where_it_operates: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
  },

  password: {
    type: String,
    require: true,
    select: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Registration = mongoose.model('Registration', RegistrationSchema);

export default Registration;
