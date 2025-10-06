import jwt from 'jsonwebtoken'
import config from '../config.js'

export const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email, role: user.role },
        config.jwt_secret.jwt,
        {
            expiresIn: '15m'
        }
    )
}