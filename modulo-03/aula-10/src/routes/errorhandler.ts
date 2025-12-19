// Manipulação de erros no Express
// Aqui a gente não vai criar um router e sim uma função!

import type { ErrorRequestHandler, RequestHandler } from "express";

export const notFoundRequest: RequestHandler = (req, res) => {
    res.status(404).json({ error: "Route not found" });
}

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ error: "Ocorreu um erro" });
}