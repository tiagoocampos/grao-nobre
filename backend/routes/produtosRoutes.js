import express from 'express';
import { listarProdutos, buscarProdutoPorId } from '../controllers/produtosController.js';


const router = express.Router();

router.get('/', listarProdutos);
router.get('/:id', buscarProdutoPorId);


export default router;