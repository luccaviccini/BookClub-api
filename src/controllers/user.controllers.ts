import { Request, Response } from "express";
import httpStatus from "http-status";
import { userService } from "../services";

async function create(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    await userService.create({ name, email, password });

    return res.status(httpStatus.CREATED).send({ name, email, password });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
}

async function login(req: Request, res: Response) {
  const {email, password} = req.body;

  try {
    const token = await userService.login({email, password});
    console.log("Token do Usuário login:", token)
    return res.status(httpStatus.OK).send({token});
  }
  catch(err) {
    return res.status(500).send({message: err.message});
  }

}

export const userController = {
  create,
  login,
}