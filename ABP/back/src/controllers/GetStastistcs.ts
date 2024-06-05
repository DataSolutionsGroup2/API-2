import { Request, Response } from "express";
import pool from "./db";

class GetStatistics {
  async getStatistics(req: Request, res: Response) {
    try {
      const countQuery = `
        SELECT 
          'Cruzeiro' AS cidade,
          COUNT(*) AS total
        FROM 
          tbgrade_atuacao_cruzeiro
        UNION ALL
        SELECT 
          'Atibaia' AS cidade,
          COUNT(*) AS total
        FROM 
          tbgrade_atuacao_atibaia
        UNION ALL
        SELECT 
          'Taubate' AS cidade,
          COUNT(*) AS total
        FROM 
          tbgrade_atuacao_taubate;
      `;

      const countResult = await pool.query(countQuery);

      console.log("Count result:", countResult.rows);

      res.status(200).json(countResult.rows);
    } catch (error) {
      console.error("Erro ao buscar dados de atuação:", error);
      res.status(500).json({ error: "Erro ao buscar dados de atuação." });
    }
  }

  async getAreaStatistics(req: Request, res: Response) {
    try {
      const areaQuery = `
        SELECT 
          'Atibaia' AS cidade,
          area_km2 
        FROM 
          tbaoi_atibaia
        UNION ALL
        SELECT 
          'Cruzeiro' AS cidade,
          area_km2 
        FROM 
          tbaoi_cruzeiro
        UNION ALL
        SELECT 
          'Taubate' AS cidade,
          area_km2 
        FROM 
          tbaoi_taubate;
      `;

      const areaResult = await pool.query(areaQuery);

      console.log("Area result:", areaResult.rows);

      res.status(200).json(areaResult.rows);
    } catch (error) {
      console.error("Erro ao buscar estatísticas de área:", error);
      res.status(500).json({ error: "Erro ao buscar estatísticas de área." });
    }
  }

  async getStatusEditorStatistics(req: Request, res: Response) {
    try {
      const statusQuery = `
        SELECT 
          'Cruzeiro' AS cidade,
          atribuicao,
          SUM(CASE WHEN status = 'andamento' THEN 1 ELSE 0 END) AS andamento,
          SUM(CASE WHEN status = 'finalizado' THEN 1 ELSE 0 END) AS finalizado,
          SUM(CASE WHEN atribuicao IS NULL THEN 1 ELSE 0 END) AS sem_atribuicao
        FROM tbgrade_atuacao_cruzeiro
        GROUP BY atribuicao

        UNION ALL

        SELECT 
          'Atibaia' AS cidade,
          atribuicao,
          SUM(CASE WHEN status = 'andamento' THEN 1 ELSE 0 END) AS andamento,
          SUM(CASE WHEN status = 'finalizado' THEN 1 ELSE 0 END) AS finalizado,
          SUM(CASE WHEN atribuicao IS NULL THEN 1 ELSE 0 END) AS sem_atribuicao
        FROM tbgrade_atuacao_atibaia
        GROUP BY atribuicao

        UNION ALL

        SELECT 
          'Taubate' AS cidade,
          atribuicao,
          SUM(CASE WHEN status = 'andamento' THEN 1 ELSE 0 END) AS andamento,
          SUM(CASE WHEN status = 'finalizado' THEN 1 ELSE 0 END) AS finalizado,
          SUM(CASE WHEN atribuicao IS NULL THEN 1 ELSE 0 END) AS sem_atribuicao
        FROM tbgrade_atuacao_taubate
        GROUP BY atribuicao;
      `;

      const statusResult = await pool.query(statusQuery);

      console.log("Status result:", statusResult.rows);

      res.status(200).json(statusResult.rows);
    } catch (error) {
      console.error("Erro ao buscar estatísticas de status:", error);
      res.status(500).json({ error: "Erro ao buscar estatísticas de status." });
    }
  }

  async getStatusRevisorStatistics(req: Request, res: Response) {
    try {
      const analystStatusQuery = `
        SELECT 
          'Taubate' AS cidade,
          validacao AS analista,
          SUM(CASE WHEN status_val = 'andamento' THEN 1 ELSE 0 END) AS andamento,
          SUM(CASE WHEN status_val = 'finalizado' THEN 1 ELSE 0 END) AS finalizado
        FROM 
          tbgrade_atuacao_taubate
        GROUP BY cidade, validacao

        UNION ALL

        SELECT 
          'Cruzeiro' AS cidade,
          validacao AS analista,
          SUM(CASE WHEN status_val = 'andamento' THEN 1 ELSE 0 END) AS andamento,
          SUM(CASE WHEN status_val = 'finalizado' THEN 1 ELSE 0 END) AS finalizado
        FROM 
          tbgrade_atuacao_cruzeiro
        GROUP BY cidade, validacao

        UNION ALL

        SELECT 
          'Atibaia' AS cidade,
          validacao AS analista,
          SUM(CASE WHEN status_val = 'andamento' THEN 1 ELSE 0 END) AS andamento,
          SUM(CASE WHEN status_val = 'finalizado' THEN 1 ELSE 0 END) AS finalizado
        FROM 
          tbgrade_atuacao_atibaia
        GROUP BY cidade, validacao;
      `;

      const analystStatusResult = await pool.query(analystStatusQuery);

      console.log("Analyst Status result:", analystStatusResult.rows);

      res.status(200).json(analystStatusResult.rows);
    } catch (error) {
      console.error(
        "Erro ao buscar estatísticas de status por analista:",
        error
      );
      res
        .status(500)
        .json({ error: "Erro ao buscar estatísticas de status por analista." });
    }
  }
}

export default GetStatistics;
