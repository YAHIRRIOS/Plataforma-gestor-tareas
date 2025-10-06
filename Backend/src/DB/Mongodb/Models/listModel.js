import mongoose from 'mongoose';

const { Schema } = mongoose;

const listSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  board: {
    type: Schema.Types.ObjectId,  // Referencia a Board
    ref: 'Board',
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  }
});

// Middleware para mantener actualizado el campo `updated_at`
listSchema.pre('save', function (next) {
  if (this.isModified()) {
    this.updated_at = Date.now();
  }
  next();
});

const List = mongoose.model('List', listSchema);

export default List;
