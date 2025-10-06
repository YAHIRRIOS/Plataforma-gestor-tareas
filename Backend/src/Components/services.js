import {userRepository} from './repositories.js'
import {UserService} from '../Services/userService.js'

export const userService = new UserService(userRepository);