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
}

export default GetStatistics;
