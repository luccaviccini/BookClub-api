import { Prisma } from "@prisma/client";

export type User = Prisma.UsersCreateInput;
export type CreateUser = Prisma.UsersUncheckedCreateInput;