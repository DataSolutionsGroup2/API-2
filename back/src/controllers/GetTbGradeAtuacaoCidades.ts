import { Request, Response } from "express";
import pool from "./db";

class GetGradeAtuacao {
  async getGradeAtuacao(req: Request, res: Response) {
    try {
      const queryText = `SELECT 'Cruzeiro' AS cidade, *
      FROM tbgrade_atuacao_cruzeiro
      UNION ALL
      SELECT 'Atibaia' AS cidade, *
      FROM tbgrade_atuacao_atibaia
      UNION ALL
      SELECT 'Taubate' AS cidade, *
      FROM tbgrade_atuacao_taubate;
      
       
      `;

      const result = await pool.query(queryText);
      res.status(200).json(result.rows);
    } catch (error) {
      console.error("Erro ao buscar dados de atuação:", error);
      res.status(500).json({ error: "Erro ao buscar dados de atuação." });
    }
  }
}

export default GetGradeAtuacao;
