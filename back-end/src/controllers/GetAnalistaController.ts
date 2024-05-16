import { Response, Request } from "express";
import pool from "./db";


class GetAnalistaController {
    async getAnalista(req: Request, res: Response) {
        try {
            const { regiao, analista } = req.query;

            const analistasArray = Array.isArray(analista)
                ? analista.map((analista: any) => analista.trim())
                : [(analista as string)];
            if (analistasArray?.length > 1) {
                const queryText = `
                SELECT id, atribuicao, status, validacao, status_val, obs, area_km2 from ${regiao}
                WHERE atribuicao IN (${analistasArray.map((_, i) => `$${i + 1}`).join(', ')})
            `;

                const client = await pool.connect();
                const result = await client.query(
                    queryText, analistasArray
                );
                client.release();
                res.json(result.rows);
            }
        }
        catch (error) {
            console.error("Erro ao buscar atribuições", error)
            res.status(500).json({ message: " Erro ao buscar atribuições" })
        }
    }
};

export default GetAnalistaController