import config from "../config.js";
import indexMongo from '../DB/Mongodb/index.js'

export let connectdb
export let repositories
export let models

switch(config.dbUse.type){
    case 'mongo':
        connectdb = indexMongo.db
        repositories = indexMongo.repositories
        models = indexMongo.models
        break;
    default:
        throw new Error('No se pudo conectar a ningua base de datos');
        
}

export default {
    connectdb,
    repositories,
    models
}