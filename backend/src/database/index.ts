import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/register', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
