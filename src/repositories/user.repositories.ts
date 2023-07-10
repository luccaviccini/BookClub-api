import {prisma} from "../config"
import { User, CreateUser } from "types/user.types";

async function create({name, email, password} : CreateUser): Promise<User> {  
  return prisma.users.create({data: {name, email, password}});
}

async function findbyEmail(email: string) {
  return await prisma.users.findUnique({where: {email}});
}

async function createSession(userId: number, token: string) {
  return await prisma.sessions.create({data: {userId, token}});
}


export const userRespositories = {
  create,
  findbyEmail,
  createSession,
}
