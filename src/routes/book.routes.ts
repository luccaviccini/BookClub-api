import { Router } from "express";
import { validateSchema, authValidation } from "../middlewares";
import { bookSchema } from "../schemas";
import { bookController } from "../controllers";

const bookRouter = Router();

bookRouter.post("/", authValidation, validateSchema(bookSchema), bookController.create);

export default bookRouter;