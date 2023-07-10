import { Prisma } from "@prisma/client";

export type Book = Prisma.BooksCreateManyInput;
export type Session = Prisma.SessionsCreateManyInput;
export type createBook = {
  name: string;
  author: string;
  userId: number;
};