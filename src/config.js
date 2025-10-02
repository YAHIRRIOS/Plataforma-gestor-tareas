import dotenv from 'dotenv'
dotenv.config();

export default {
    app:{
        port: process.env.PORT
    },
    mongo:{
        url: process.env.URL
    },
    dbUse:{
        type: process.env.TYPE
    },
    secret: {
        salt: process.env.SALT
    }
}