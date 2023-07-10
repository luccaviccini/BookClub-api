import { Router } from "express";
import { validateSchema } from "../middlewares";
import { bookSchema } from "../schemas";

const bookRouter = Router();

bookRouter.post("/", validateSchema(bookSchema), (req, res) => res.send("Book created!"));

export default bookRouter;