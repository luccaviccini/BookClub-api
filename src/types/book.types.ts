import { Prisma } from "@prisma/client";

export type Book = Prisma.BooksCreateManyInput;
export type Session = Prisma.SessionsCreateManyInput;