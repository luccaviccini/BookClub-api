import bcrypt from 'bcrypt';
import { User } from '../types';
import { userRespositories } from '../repositories/';



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


export const userService = {
  create,
}
