import jwt from 'jsonwebtoken'
import config from '../config.js';

export const verifyToken = (req,res, next) => {
    const token = req.cookie.token

    if(!token)return res.status(401).json({error: 'token no enviado'});
    
    try{
        const decoded = jwt.verify(token, config.jwt_secret.jwt )
        req.user = decoded
        next()
    }catch{
        res.status(403).json({error: 'Tiempo expirado'})
    }

}