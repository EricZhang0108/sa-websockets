import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  text: String,
  x: Number,
  y: Number,
  zIndex: Number,
}, {
  toJSON: {
    virtuals: true,
  },
});

// create model class
const NoteModel = mongoose.model('Poll', NoteSchema);

export default NoteModel;
