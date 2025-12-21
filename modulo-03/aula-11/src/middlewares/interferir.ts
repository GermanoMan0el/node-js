import type { RequestHandler } from "express";

export const interferir:RequestHandler = (req, res, next) => {
    console.log("Executou Middleware!");
    const logged = false;

    if (logged) {
        next();
    } else {
        res.status(404).json({ error: "Middleware não permitiu" });
    };
    // res.json({ error: "Middleware não permitiu" }); Bloqueia a requisição
    // next(); // Faz com que a gente prossiga!
}