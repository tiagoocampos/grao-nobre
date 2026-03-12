import connection from "../database/connection.js";

export const adicionarCarrinho = (req, res)=>{
    const { produto_id, quantidade } = req.body;
    const sql = 'INSERT INTO carrinho_itens (carrinho_id, produto_id, quantidade)VALUES (1, ?, ?)'
    connection.query(sql, [produto_id, quantidade], (err, results)=>{
        if(err){
            return res.status(500).json({ erro: 'Erro ao adicionar ao carrinho'})
        }
        res.json({ mensagem: 'Produto adicionado ao carrinho'})
    })
}

export const verCarrinho = (req, res)=>{
    const sql = `SELECT
    produtos.nome,
    produtos.preco,
    carrinho_itens.quantidade
    FROM carrinho_itens
    JOIN produtos
    ON carrinho_itens.produto_id = produtos.id
    WHERE carrinho_itens.carrinho_id = 1`;

    connection.query(sql, (err, results)=>{
        if(err){
            return res.status(500).json({
                erro: 'Erro ao buscar carrinho'
            })
        }
        res.json(results);
    })
}