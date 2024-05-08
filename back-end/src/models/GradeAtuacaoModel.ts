import { Pool, QueryResult } from "pg";

export interface AtuacaoInterface{
    analista: string;
    status: string;
    km2: number;
}

export class GradeAtuacaoModel{
    private pool: Pool;

    constructor(pool:Pool){
        this.pool = pool
    }

    async getGradeAtuacaoAnalista(atribuicao: string, regiao:string): Promise<AtuacaoInterface[]>{
        const query = `
            SELECT atribuicao as analista, status, area_km2 as km2
            FROM ${regiao}
            WHERE atribuicao = $1
        `;

        const { rows }: QueryResult<AtuacaoInterface> = await this.pool.query(query, [atribuicao]);
        return rows;
    }

    async getGradeAtuacaoAnalistas(atribuicao: any, regiao: any): Promise<AtuacaoInterface[]>{
        
        const placeholders = atribuicao.map((_: any, index: number) => `$${index + 1}`).join(', ');

        const query = `
            SELECT atribuicao as analista, status, area_km2 as km2
            FROM ${regiao}
            WHERE atribuicao IN (${placeholders})
        `;

        const { rows }: QueryResult<AtuacaoInterface> = await this.pool.query(query, atribuicao);

        return rows;
    }

    async getGradeAtuaçãoTodos(regiao:string): Promise<AtuacaoInterface[]>{
        const query = `
            SELECT atribuicao as analista, status, area_km2 as km2
            FROM ${regiao}
        `
        const { rows }: QueryResult<AtuacaoInterface> = await this.pool.query(query);

        return rows;
    }
}

