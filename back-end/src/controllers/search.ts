import { Pool, QueryResult } from 'pg';
import { AtuacaoInterface } from '../models/GradeAtuacaoModel';

export class SearchModel {
    private banco: Pool;

    constructor(banco: Pool) {
        this.banco = banco;
    }

    async searchPorAnalistaERegiao(analista: string, regiao: string): Promise<AtuacaoInterface[]> {
        const query = {
            text: 'SELECT * FROM tbgradeAtuacao WHERE analista = $1 AND regiao = $2',
            values: [analista, regiao],
        };

        const result: QueryResult = await this.banco.query(query);
        return result.rows;
    }

    async searchPorAnalistasERegiao(analistas: string[], regiao: string): Promise<AtuacaoInterface[]> {
        const query = {
            text: 'SELECT * FROM tbgradeAtuacao WHERE analista IN ($1) AND regiao = $2',
            values: [analistas, regiao],
        };

        const result: QueryResult = this.banco.query(query);
        return result.rows;
    }

    async searchPorRegiao(regiao: string): Promise<AtuacaoInterface[]> {
        const query = {
            text: 'SELECT * FROM tbgradeAtuacao WHERE regiao = $1',
            values: [regiao],
        };

        const result: QueryResult = await this.banco.query(query);
        return result.rows;
    }
}
