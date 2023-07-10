import {Router} from 'express';
import userRouter from './user.routes';
import bookRouter from './book.routes';


const routes = Router();

routes.get("/health", (_req, res) => res.status(200).json({message: "OK"}));
routes.use("/users", userRouter);
routes.use("/books", bookRouter);

export default routes;