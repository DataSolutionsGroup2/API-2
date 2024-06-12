import { QueryResult } from "pg";
import { Request, Response } from "express";
import pool from "../database/connection";

export default async function GetRevisor(_req: Request, res: Response) {
    try {
        const bd_command = `
        SELECT cidade, atribuicao,status, COUNT(area_km2), SUM(area_km2)
        FROM(
	        SELECT id, 'Atibaia' AS cidade, atribuicao, status, area_km2 FROM tbgrade_atuacao_atibaia
	        WHERE atribuicao IS NOT NULL AND status IS NOT NULL
	        UNION ALL
	        SELECT id, 'Cruzeiro' AS cidade, atribuicao, status, area_km2  FROM tbgrade_atuacao_cruzeiro
	        WHERE atribuicao IS NOT NULL AND status IS NOT NULL
	        UNION ALL
	        SELECT id, 'Taubate' AS cidade, atribuicao, status, area_km2  FROM tbgrade_atuacao_taubate
	        WHERE atribuicao IS NOT NULL AND status IS NOT NULL
        ) WHERE status = 'finalizado' GROUP BY cidade, atribuicao,status;
            `;
        const client = await pool.connect();
        try {
            const result: QueryResult = await client.query(bd_command);
            res.json(result.rows);
        }
        finally {
            client.release()
        }
    } catch (error) {
        console.error("Erro ao buscar a consulta", error);
        res.status(500).json({ message: "Erro ao buscar" });
    }
}

export async function ApontamentoRevisor(_req:Request, res:Response){
    try {
        const bd_command = `
    SELECT 
        g.atribuicao,
        'Atibaia' AS cidade,
        a.correcao
    FROM 
        tbgrade_atuacao_atibaia g,
        tbapontamento_alteracao_atibaia a
    WHERE 
        ST_Intersects(g.geom, a.geom)
    UNION ALL
    SELECT 
        g.atribuicao,
        'Cruzeiro' AS cidade,
        a.correcao
    FROM 
        tbgrade_atuacao_cruzeiro g,
        tbapontamento_alteracao_cruzeiro a
    WHERE 
        ST_Intersects(g.geom, a.geom)
    UNION ALL
    SELECT 
        g.atribuicao,
        'Taubate' AS cidade,
        a.correcao
    FROM 
        tbgrade_atuacao_taubate g,
        tbapontamento_alteracao_taubate a
    WHERE 
        ST_Intersects(g.geom, a.geom);
`;
        const client = await pool.connect();
        try {
            const result: QueryResult = await client.query(bd_command);
            res.json(result.rows);
        }
        finally {
            client.release()
        }
    } catch (error) {
        console.error("Erro ao buscar a consulta", error);
        res.status(500).json({ message: "Erro ao buscar" });
    }
}
