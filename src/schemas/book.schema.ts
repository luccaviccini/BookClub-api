import joi from 'joi';
import { Book } from 'types';


export const bookSchema = joi.object<Book>({
  name: joi.string().required(),
  author: joi.string().required(),
  available: joi.boolean(),
  userId: joi.number(),
})