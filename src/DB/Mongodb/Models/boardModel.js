import mongoose from 'mongoose';

const { Schema } = mongoose;

const boardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  project: {
    type: Schema.Types.ObjectId,  // Referencia a Project
    ref: 'Project',
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

// Middleware para actualizar `updated_at`
boardSchema.pre('save', function (next) {
  if (this.isModified()) {
    this.updated_at = Date.now();
  }
  next();
});

const Board = mongoose.model('Board', boardSchema);

export default Board;
