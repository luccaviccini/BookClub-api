import {prisma} from "../config"
import { Session } from 'types';

async function findSessionByToken(token: string): Promise<Session[]>{
  return await prisma.sessions.findMany({where: {token}});
} 

export const authRepositories = {
  findSessionByToken
}