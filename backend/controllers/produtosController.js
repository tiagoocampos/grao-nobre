import connection from "../database/connection.js";
export const listarProdutos = (req, res)=>{
    const sql = "SELECT * FROM produtos";
    connection.query(sql, (err, results)=>{
        if(err){
            return res.status(500).json({ erro: 'Erro ao buscar produtos' });
        }
        res.json(results)
    })
}

export const buscarProdutoPorId = (req, res) =>{
    const { id } = req.params
    const sql = "SELECT * FROM produtos WHERE id = ?";
    connection.query(sql, [id], (err, results)=>{
        if(err){
            return res.status(500).json({ erro: 'Produto não encontrado'})
        }
        res.json(results[0])
    })
}





