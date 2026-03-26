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

export const atualizarQuantidade = (req, res)=>{
    const { id } = req.params;
    const { quantidade } = req.body;

    if(!quantidade || quantidade<= 0){
        return res.status(400).json({ erro: "Quantidade invalida"});
    }
    const sql = 'UPDATE carrinho_itens SET quantidade = ? WHERE id = ?'
    connection.query(sql, [quantidade, id], (err, result)=>{
        if(err){
            return res.status(500).json({ erro: "Erro ao atualizar quantidade"})
        }
        if(result.affectedRows === 0){
            return res.status(400).json({ erro: "Item não encontrado"})
        }
        res.json({ mensagem: "Quantidade atualizada com sucesso"})
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

export const removerItemCarrinho = (req, res)=>{
    const { id } = req.params;
    const sql = 'DELETE FROM carrinho_itens WHERE id = ?'

    connection.query(sql, [id], (err, result)=>{
        if(err){
            console.log(err)
            return res.status(500).json({ error: "Erro ao remover item"});
        }
        if(result.affectedRows === 0){
            return res.status(404).json({ erro: "Item não encontrado"});
        }
        res.json({ mensagem: "Item removido do carrinho"});
    });
}

