import express from 'express'
import config from './config.js';
import { connectdb } from './DB/index.js';
import { errorHandler } from './Middlewares/validators/errorHandler.js'
import {router as userRoutes } from './Modulos/Users/ruoutes.js'
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cookieParser())
app.set('port', config.app.port);
connectdb();

//RUTAS
app.use('/users', userRoutes)


//Con este middleware ya no tengo que agreagar try/catch a todos mis controladores
app.use(errorHandler);




export default app;

