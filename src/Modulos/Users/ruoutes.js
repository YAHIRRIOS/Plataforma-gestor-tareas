import express from 'express'
import { userController } from '../../Components/index.js'
import { validateCreateUser, validateLogin} from '../../Middlewares/validators/validateUser.js'
export const router = express.Router();


router.post('/register', validateCreateUser, userController.createUser)
router.post('/login', validateLogin, userController.login)


export default router ;