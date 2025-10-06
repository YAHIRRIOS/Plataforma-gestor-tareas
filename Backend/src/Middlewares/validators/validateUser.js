import { body } from 'express-validator';
import { handleValidationErrors } from '../handleValidationErrors.js';
export const validateLogin = [
  body('email')
    .trim()
    .escape()
    .notEmpty().withMessage('El email es obligatorio')
    .isEmail().withMessage('Debe ser un email válido')
    .normalizeEmail(),

  body('password')
    .notEmpty().withMessage('La contraseña es obligatoria')
    .escape()
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
    .matches(/[a-zA-Z]/).withMessage('La contraseña debe contener al menos una letra')
    .matches(/\d/).withMessage('La contraseña debe contener al menos un número')
    .matches(/[\W_]/).withMessage('La contraseña debe contener al menos un carácter especial'),
    handleValidationErrors
];

export const validateCreateUser = [
    // Validaciones
   body('name')
    .trim()
    .escape()
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({ min: 2, max: 30 }).withMessage('El nombre debe tener entre 2 y 50 caracteres')
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/).withMessage('El nombre debe contener solo letras, sin espacios'),

    body('role')
    .notEmpty().withMessage('El rol es necesario')
    .isIn(['user','admin']).withMessage('Rol invalido'),
    
    validateLogin,
    handleValidationErrors  //Este es mi middleware generico
];

