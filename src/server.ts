import express, { Express, json } from "express";
import cors from "cors";
import routes from "./routes";

const app: Express = express();
app.use(json());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));