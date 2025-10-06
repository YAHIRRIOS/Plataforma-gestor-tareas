import {generateToken} from '../../auth/authService.js'
import config from '../../config.js'

export class UserController {
    constructor(userService) {
        this.userService = userService
    }

    createUser = async (req, res) => {
        try {
            const { name, email, password, role } = req.body
            // Llamada al servicio
            const newUser = await this.userService.createUser({
                name,
                email,
                password,
                role
            })
            // Respuesta de éxito
            res.status(201).json({
                message: 'Usuario creado exitosamente',
                user: {
                    name: newUser.nombre,
                    email: newUser.email,
                    role: newUser.role
                }
            })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
    login = async (req,res) => {
        try{
            const { email, password} = req.body
            const user = await this.userService.loginUser(email, password);
            const token = generateToken(user)

            res.cookie('token', token,{
                httpOnly: true,
                secure: config.env.node_env,
                sameSite: 'strict',
                maxAge: 15*60*1000,
            });

            res.status(200).json({
                message: 'Usuario Logeado',
                user:{ 
                    name: user.name,
                    role: user.role,                                                                                                                                                                                                                   
                    email: user.email,
                } 
            })
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }
    logout = (res,req) =>{
        res.clearCookie('token')
        res.json({message: 'Sesion cerrada'})
    }

}
