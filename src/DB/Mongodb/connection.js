import mongoose from 'mongoose'
import config from '../../config.js';

export const connectMongoDb = () =>{
mongoose.connect(config.mongo.url)
  .then(() => {
    console.log("MongoDB conectado ✅");
  })
  .catch(err => console.error("Error de conexión a MongoDB:", err));
}

export default connectMongoDb;
