import type { RequestHandler } from "express";

export const notFoundRequest: RequestHandler = (req, res) => {
    res.status(404).json({ errorOfRouter: `Erro ao procurar a rota: ( ${req.originalUrl} )` });
};