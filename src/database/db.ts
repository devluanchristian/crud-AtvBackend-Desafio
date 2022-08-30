import { Sequelize } from "sequelize";

export const db = new Sequelize(
  process.env.DATABASE_NAME || "postgres",
  process.env.DATABASE_USER || "postgres",
  process.env.DATABASE_PASS,
  {
    dialect: "postgres",
    host: process.env.DATABASE_HOST,
    port: 5432,
  } 
  
);
