import { bookRepositories } from "../repositories";


async function create({name, author, userId}: {name: string, author: string, userId: number}) {
  const book = await bookRepositories.findBookByName(name);
  console.log("Book: ", book)
  if(book.length > 0) {
    throw new Error('Book already exists');
  }
  return await bookRepositories.create({name, author, userId});
} 

export const bookService = {
  create
}