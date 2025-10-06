import mongoose from 'mongoose'
import { Schema } from 'mongoose';

// Creacion del Schema de User  
const userSchema = new Schema({
  name: {
    type: String,
    required: true,  //Esto me sirve para campos obligatorios
  },
  email: {
    type: String,
    required: true,
    unique: true,    //Para que pueda asignar un email solo una vez
    match: [/.+@.+\..+/, 'Ingresa una direccion valida'],  // Validación de email
  },
  password: {
    type: String,
    required: true,  // Para el hash de mi contraseña
  },
  created_at: {
    type: Date,
    default: Date.now, // Fecha de creación 
  },
  updated_at: {
    type: Date,
    default: Date.now, // Fecha de actualización automatizada a la fecha que se detecte la actualizacion
  },
  role: {
    type: String,
    enum: ['user', 'admin'],  // Role con un enum para user o admnin
    default: 'user', // Valor por defecto
  }
});

// Función para actualizar el `updated_at` antes de guardar el documento
userSchema.pre('save', function (next) {
  if (this.isModified()) {
    this.updated_at = Date.now();
  }
  next();
});


// Crear el modelo como User
const User = mongoose.model('User', userSchema);

export default User;
