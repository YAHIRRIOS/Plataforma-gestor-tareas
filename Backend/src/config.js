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
    },
    jwt_secret:{
        jwt: process.env.SECRET
    },
    env:{
        node_env: process.env.NODE_ENV
    }

}