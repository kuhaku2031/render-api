import express from "express";
import useRoutes from "./routes/users.routes.js";
import { config } from "dotenv";

config();
const app = express();

app.use(express.json());
app.use(useRoutes);

console.log(process.env.PORT);
app.listen(process.env.PORT || 3000);
