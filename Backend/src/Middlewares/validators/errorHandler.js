export const errorHandler = (err, req, res, next) => {
  console.error('Error capturado:', err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno del servidor';
  const errorResponse = {
    message,
  };
  // Agregar stack trace solo si no estás en producción
  if (process.env.NODE_ENV !== 'production') {
    errorResponse.stack = err.stack;
  }
  // Opcionalmente incluir un código de error personalizado
  if (err.code) {
    errorResponse.code = err.code;
  }
  res.status(statusCode).json(errorResponse);
};
