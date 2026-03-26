import express from 'express';

import cors from 'cors';
import connection from './database/connection.js'; 
import produtosRoutes from './routes/produtosRoutes.js';
import carrinhoRoutes from './routes/carrinhoRoutes.js'

const app = express();

app.use(express.json());
app.use(cors());
app.use('/produtos', produtosRoutes)
app.use('/carrinho', carrinhoRoutes)

const PORT = 3000

app.get('/', (req, res)=>{
    res.send('Servidor funcionando')
})



app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta: http://localhost:${PORT}`)
})