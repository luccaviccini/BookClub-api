import { Request, Response, NextFunction } from 'express';
import httpStatus from "http-status";
import { authRepositories, userRepositories } from '../repositories';



export async function authValidation(req: Request, res: Response, next:NextFunction){
  const { authorization } = req.headers; // Bearer token
  const token = authorization?.replace('Bearer', '').trim();

  if(!token){
    return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Token is required' });
  }

  try {
    const session = await authRepositories.findSessionByToken(token);
    if(!session) {
      return res.status(httpStatus.NOT_FOUND).json({ message: 'Session not found' });
    }

    const user = await userRepositories.findbyId(session.userId);
    if(!user) {
      return res.status(httpStatus.NOT_FOUND).json({ message: 'User not found' });
    }

    res.locals.user = user;

  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message }); 
  }

}



