import {Request, Response} from 'express';
import pool from './db';

class GradeAtuacaoController {
    async getGradeAtuacao(req: Request, res: Response) {
        try {
            const { regiao, analista } = req.query;
            const analistasArray = Array.isArray(analista) 
            ? analista.map((analista: any) => analista.trim()) 
            : [(analista as string)];

            if(analistasArray?.length > 1){
                const queryText = `
                    SELECT atribuicao, status, area_km2 
                    FROM ${regiao} 
                    WHERE atribuicao IN (${analistasArray.map((_, i) => `$${i + 1}`).join(', ')})
                `;
                const client = await pool.connect();
                const result = await client.query(
                    queryText, analistasArray
                );
                client.release();
                res.json(result.rows);
                    
            } else if (analistasArray[0] === 'Todos') {
                const client = await pool.connect();
                const result = await client.query(
                    `SELECT atribuicao, status, area_km2 FROM ${regiao}`
                )
                client.release();
                res.json(result.rows);

            } else {
                const client = await pool.connect();
                const result = await client.query(
                    `SELECT atribuicao, status, area_km2 FROM ${regiao}`,
                    [String(analistasArray[0])]
                );
                client.release();
                res.json(result.rows);
            }
          
        } catch (err) {
            console.error('Não foi possivel retornar informações', err);
            res.status(500).send('Internal Server Error');
        }
    }
}

export default GradeAtuacaoController;