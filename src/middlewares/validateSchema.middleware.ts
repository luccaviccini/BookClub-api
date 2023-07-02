import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";


export function validateSchema<T>(schema: ObjectSchema<T>): (req: Request, res: Response, next: NextFunction) => void {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(422).send(error.details.map((err) => err.message));
    }
    next();
  };
}

