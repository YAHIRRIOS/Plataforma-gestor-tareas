import bcrypt from 'bcrypt'
import config from '../config.js'

export class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    createUser = async (userData) => {
        const { name, email, password, role } = userData

        const emailExists = await this.userRepository.findByEmail(email)
        if (emailExists) { throw new Error('El Email ya esta registrado') }
        const saltRounds = Number(config.secret.salt);
        const hashPassword = await bcrypt.hash(password, saltRounds)
        const newUser = {
            name,
            email,
            password: hashPassword,
            role
        }

        return await this.userRepository.create(newUser);
    }
    loginUser = async (email, password) => {
        const user = await this.userRepository.findByEmail(email)
        if (!user || !await bcrypt.compare(password, user.password)) {
            throw new Error('Email o contraseña incorrectos')
        }

        const { password: _, ...userWithoutPassword } = user.toObject()

        return userWithoutPassword
    }
}
