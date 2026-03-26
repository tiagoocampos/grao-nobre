import express from 'express';
import { adicionarCarrinho, atualizarQuantidade, removerItemCarrinho, verCarrinho } from '../controllers/carrinhoController.js';

const router = express.Router();

router.post('/', adicionarCarrinho);
router.get('/', verCarrinho);
router.delete('/:id', removerItemCarrinho)
router.patch('/:id', atualizarQuantidade)

export default router;