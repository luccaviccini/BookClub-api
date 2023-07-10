import { Request, Response, NextFunction } from 'express';
import { bookService } from '../services/';
import { createBook } from 'types';

async function create(req: Request, res: Response, next: NextFunction) {
  const {name, author} = req.body;
  const userId = res.locals.user.id;

  const createBookObject: createBook = {
    name,
    author,
    userId
  }

  try {
    await bookService.create(createBookObject);
    return res.status(201).json({ message: 'Book created' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export const bookController = {
  create
}