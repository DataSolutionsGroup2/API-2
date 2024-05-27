import { Pool, QueryResult } from 'pg';

export class SearchModel {
    private banco: Pool;

    constructor(banco: Pool) {
        this.banco = banco;
    }

    async listarAnalistasSomarKm(): Promise<any[]> {
        const query = 'SELECT analista, SUM(km_percorridos) AS total_km FROM tbgradeAtuacao GROUP BY analista';

        const result: QueryResult = await this.banco.query(query);
        return result.rows;
    }
}
