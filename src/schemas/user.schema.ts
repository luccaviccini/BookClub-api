import joi from 'joi';
import { User } from '../types/user.model';

export const userSchema = joi.object<User>({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

