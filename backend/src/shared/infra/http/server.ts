import express, { Request, Response, NextFunction } from "express";
import "dotenv/config";

import "express-async-errors";
import AppError from "@shared/errors/AppErrors";

import { errors } from "celebrate";

import "reflect-metadata";
import DataBase from "@shared/infra/typeorm/";

import routes from "./routes";

import "@shared/container";

const dataBase = new DataBase();
const connection = dataBase.conecta().then(() => console.log("carregado"));

const app = express();

app.use(express.json());

app.use(routes);

app.use(errors());

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    console.log(err);

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(process.env.PORT, () => console.log("Server is running!"));
