import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String, // Da igual el tamaño por que mongo no me limita
  },
  owner: {
    type: Schema.Types.ObjectId, // Referencia a otro documento
    ref: 'User',                 // Referencia a el Schema User
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
projectSchema.pre('save', function (next) {
  if (this.isModified()) {
    this.updated_at = Date.now();
  }
  next();
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
