import { Request, Response } from 'express';
import { Pool } from 'pg';
import { SearchModel } from '../models/SearchModel';

export class SearchController {
    private searchModel: SearchModel;

    constructor(private banco: Pool) {
        this.searchModel = new SearchModel(banco);
    }

    async listarAnalistasSomarKm(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.searchModel.listarAnalistasSomarKm();
            res.json(result);
        } catch (error) {
            console.error('Erro ao listar analistas e somar km:', error);
            res.status(500).json({ error: 'Erro ao listar analistas e somar km' });
        }
    }
}
