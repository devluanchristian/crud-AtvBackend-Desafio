import dotenv from "dotenv";
import express from "express";
import { db } from "./database/db";
import { router } from "./routes";

dotenv.config();
const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, async () => {
  await db.sync();
  console.log(`servidor rodando ${process.env.DATABASE_NAME}`);
});
