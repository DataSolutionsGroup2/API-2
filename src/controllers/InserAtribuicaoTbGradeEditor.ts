import { Request, Response } from "express";
import query from "../database/connection";

class InsertOrUpdateAtribuicao {
  async insertOrUpdateValidacao(req: Request, res: Response) {
    try {
      const { id, cidade, atribuicao } = req.body;

      // Consulta para unir os resultados das três tabelas
      const queryText = `
        SELECT 'Cruzeiro' AS cidade, * FROM tbgrade_atuacao_cruzeiro
        UNION ALL
        SELECT 'Atibaia' AS cidade, * FROM tbgrade_atuacao_atibaia
        UNION ALL
        SELECT 'Taubate' AS cidade, * FROM tbgrade_atuacao_taubate
      `;

      console.log("Query:", queryText);

      // Execute a consulta usando pool.query
      const { rows } = await query(queryText);

      console.log("Resultado da consulta:", rows);

      // Verifique se o id e a cidade estão na mesma linha
      const found = rows.find(
        (row: any) => row.id === id && row.cidade === cidade
      );

      console.log("Encontrado:", found);

      if (found) {
        // Se encontrou, atualize a coluna atribuicao
        const updateText = `UPDATE tbgrade_atuacao_${cidade.toLowerCase()} SET atribuicao = $1 WHERE id = $2`;
        await query(updateText, [atribuicao, id]);
        return res
          .status(200)
          .json({ message: "Atribuição atualizada com sucesso." });
      } else {
        // Se não encontrou, retorne um erro
        return res
          .status(403)
          .json({ error: "ID não pertence à cidade especificada." });
      }
    } catch (error) {
      console.error("Erro ao inserir ou atualizar validação:", error);
      return res
        .status(500)
        .json({ error: "Erro ao inserir ou atualizar validação." });
    }
  }
}

export default new InsertOrUpdateAtribuicao();
