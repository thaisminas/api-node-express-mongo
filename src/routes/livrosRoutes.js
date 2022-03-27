import express from "express";
import LivroController from "../controllers/livrosControllers.js";

const router = express.Router();

router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/busca', LivroController.listaLivroPorEditora)
    .get('/livros/:id', LivroController.listaLivroPorId)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.deletaLivroPorId)

export default router;