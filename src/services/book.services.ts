import { bookRepositories } from "../repositories";


async function create({name, author, userId}: {name: string, author: string, userId: number}) {
  const book = await bookRepositories.findBookByName(name);
  if(book) {
    throw new Error('Book already exists');
  }
  return await bookRepositories.create({name, author, userId});
} 

export const bookService = {
  create
}