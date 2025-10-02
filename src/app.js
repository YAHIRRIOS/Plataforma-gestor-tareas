import express from 'express'
import config from './config.js';
import { connectdb } from './DB/index.js';
import { errorHandler } from './Middlewares/validators/errorHandler.js'
import {router as userRoutes } from './Modulos/Users/ruoutes.js'

const app = express();
app.use(express.json());
app.set('port', config.app.port);
connectdb();
app.use(errorHandler);
//RUTAS
app.use('/users', userRoutes)

//Con este middleware ya no tengo que agreagar try/catch a todos mis controladores





export default app;

