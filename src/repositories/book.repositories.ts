import {prisma} from "../config"


async function create({name, author, userId} ) {
  await prisma.books.create({
    data: {
      name,
      author,
      userId
    }
  })
}

async function findBookByName(name: string) {
  return await prisma.books.findMany({where: {name}});
}

export const bookRepositories = {
  create,
  findBookByName
}