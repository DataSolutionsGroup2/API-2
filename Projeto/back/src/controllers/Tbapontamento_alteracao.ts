import { Request, Response } from "express";
import { QueryResult } from "pg";
import pool from "../databases/connection";

export default async function Editor(_req: Request, res: Response) {
  try {
    const comando_bd = `
      SELECT id, 'Cruzeiro' AS cidade, atribuicao, status
      FROM tbgrade_atuacao_cruzeiro
      WHERE atribuicao IS NOT NULL AND status IS NOT NULL
      UNION ALL
      SELECT id, 'Atibaia' AS cidade, atribuicao, status
      FROM tbgrade_atuacao_atibaia
      WHERE atribuicao IS NOT NULL AND status IS NOT NULL
      UNION ALL
      SELECT id, 'Taubate' AS cidade, atribuicao, status
      FROM tbgrade_atuacao_taubate
      WHERE atribuicao IS NOT NULL AND status IS NOT NULL;
    `;

    const client = await pool.connect();
    try {
      const result: QueryResult = await client.query(comando_bd);
      res.json(result.rows);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Erro ao buscar a consulta", error);
    res.status(500).json({ message: "Erro ao buscar" });
  }
}


// import { Request, Response } from "express";
// import pool from "./db";
// import { QueryResult } from "pg";
// import NodeCache from 'node-cache';

// const cache = new NodeCache({ stdTTL: 600 }); // Tempo de expiração de 10 minutos (em segundos)

// // Função para buscar dados, usando cache se possível
// async function fetchDataFromDatabase(): Promise<QueryResult> {
//   const cacheKey = 'editorData';
//   const cachedData = cache.get(cacheKey) as QueryResult | undefined;

//   if (cachedData) {
//     return cachedData;
//   }

//   const comando_bd = `
//     SELECT id, 'Cruzeiro' AS cidade, atribuicao, status
//     FROM tbgrade_atuacao_cruzeiro
//     WHERE atribuicao IS NOT NULL AND status IS NOT NULL
//     UNION ALL
//     SELECT id, 'Atibaia' AS cidade, atribuicao, status
//     FROM tbgrade_atuacao_atibaia
//     WHERE atribuicao IS NOT NULL AND status IS NOT NULL
//     UNION ALL
//     SELECT id, 'Taubate' AS cidade, atribuicao, status
//     FROM tbgrade_atuacao_taubate
//     WHERE atribuicao IS NOT NULL AND status IS NOT NULL;
//   `;

//   const client = await pool.connect();
//   try {
//     const result: QueryResult = await client.query(comando_bd);
//     cache.set(cacheKey, result, 600); // Armazenar os resultados no cache
//     return result;
//   } finally {
//     client.release();
//   }
// }

// // Endpoint para buscar dados, usando cache se possível
// export default async function Editor(_req: Request, res: Response) {
//   try {
//     const result: QueryResult = await fetchDataFromDatabase();
//     res.json(result.rows);
//   } catch (error) {
//     console.error("Erro ao buscar a consulta", error);
//     res.status(500).json({ message: "Erro ao buscar" });
//   }
// }
