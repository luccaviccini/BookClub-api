import bcrypt from 'bcrypt';
import { User } from '../types';
import { userRespositories } from '../repositories/';
import { v4 as uuidV4 } from 'uuid';



async function create({name, email, password} : User): Promise<User> {
  const user = await findbyEmail(email); 
  if(user) {
    throw new Error('Email already exists');
  }
  const hashedPassword = bcrypt.hashSync(password, 10);

  return await userRespositories.create({name, email, password: hashedPassword});
}

async function findbyEmail(email: string) {
  const user =  await userRespositories.findbyEmail(email);
  return user;
}

async function login({email, password}: Pick<User, 'email' | 'password'> ){
  const user = await findbyEmail(email);
  if(!user) {
    throw new Error('Email not found');
  }
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if(!isPasswordValid) {
    throw new Error('Invalid password');
  }
  
  const token = uuidV4();
  await userRespositories.createSession(user.id, token);
  return token;
}


export const userService = {
  create,
  login,
}
