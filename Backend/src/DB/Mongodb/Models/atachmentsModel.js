import mongoose from 'mongoose';

const { Schema } = mongoose;

const attachmentSchema = new Schema({
  filename: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  task: {
    type: Schema.Types.ObjectId, //Referencia a Task 
    ref: 'Task',
    required: true,
  },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  }
});

const Attachment = mongoose.model('Attachment', attachmentSchema);

export default Attachment;
