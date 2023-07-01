import express, { Express, json } from "express";
import cors from "cors";

const app: Express = express();
app.use(json());
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));