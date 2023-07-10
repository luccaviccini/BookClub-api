import { Request, Response } from 'express';

async function create(req: Request, res: Response) {
  try {
    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
