import express from 'express';
import { adicionarCarrinho, verCarrinho } from '../controllers/carrinhoController.js';

const router = express.Router();

router.post('/', adicionarCarrinho);
router.get('/', verCarrinho);

export default router;