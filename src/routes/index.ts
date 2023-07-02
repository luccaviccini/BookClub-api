import {Router} from 'express';
import userRouter from './user.routes';

const routes = Router();

routes.get("/health", (_req, res) => res.status(200).json({message: "OK"}));
routes.use("/users", userRouter);

export default routes;