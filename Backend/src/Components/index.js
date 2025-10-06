import { userService } from './services.js'
import {UserController} from '../Modulos/Users/controller.js'

export const userController = new UserController(userService)
