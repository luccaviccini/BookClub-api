import { prisma } from "../config";
import { User, CreateUser } from "types/user.types";

async function create({ name, email, password }: CreateUser): Promise<User> {
  return prisma.users.create({ data: { name, email, password } });
}

async function findbyEmail(email: string) {
  return await prisma.users.findUnique({ where: { email } });
}

async function createSession(userId: number, token: string) {
  const session = await prisma.sessions.upsert({
    where: { userId },
    create: { userId, token },
    update: { token },
  });

  return session;
}


async function findbyId(userId: number) {
  return await prisma.users.findUnique({ where: { id: userId } });
}

export const userRepositories = {
  create,
  findbyEmail,
  createSession,
  findbyId,
};
