import express from "express";
import AutoresController from "../controllers/autoresControllers.js";

const router = express.Router();

router
    .get('/autores', AutoresController.listarAutores)
    .get('/autores/:id', AutoresController.listaAutoresPorId)
    .post('/autores', AutoresController.cadastrarAutor)
    .put('/autores/:id', AutoresController.atualizarAutor)
    .delete('/autores/:id', AutoresController.deletaAutorPorId)

export default router;