import {Router} from 'express';
import {userController} from '../controllers/user.controllers';
import {validateSchema} from '../middlewares';
import { userSchema } from '../schemas';


const userRoutes = Router();

userRoutes.post("/signup", validateSchema(userSchema), userController.create)
userRoutes.post("/login", userController.login);

export default userRoutes;