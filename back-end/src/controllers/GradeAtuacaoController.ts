import {Request, Response} from 'express';
import { GradeAtuacaoModel, AtuacaoInterface } from '../models/GradeAtuacaoModel';
import { Pool } from 'pg';


export class GradeAtuacaoController {
    private gradeAtuacaoModel: GradeAtuacaoModel;

    constructor(banco: Pool){
        this.gradeAtuacaoModel = new GradeAtuacaoModel(banco);
    }

    async getGradeAtuacaoAnalista(req: Request, res: Response): Promise<void>{
        
        try {
            const atribuicao: string = req.query.analista as string;
            const regiao: string = req.query.regiao as string;
            
            const gradeAtuacao: AtuacaoInterface[] = await this.gradeAtuacaoModel.getGradeAtuacaoAnalista(atribuicao, regiao);
            res.json(gradeAtuacao);
        } catch (error) {
            console.error('Erro ao consultar tabela:', error);
            res.status(500).json({ error: 'Erro ao consultar tabela' });
        }
    }

    async getGradeAtuacaoAnalistas(req: Request, res: Response):Promise<void>{
        const {regiao} = req.query;
        const analistas = req.query.analista as string[]

        try {
            const gradeAtuacaoAnalistas: AtuacaoInterface[] = await this.gradeAtuacaoModel.getGradeAtuacaoAnalistas(analistas, regiao )
            res.json(gradeAtuacaoAnalistas);
        } catch (error) {
            console.error('Erro ao consultar tabela:', error);
            res.status(500).json({ error: 'Erro ao consultar tabela' });
        }
    }

    async getGradeAtuacaoTodos(req: Request, res: Response):Promise<void>{
        
        const regiao: string = req.query.regiao as string;
        
        try {
            const gradeAtuacaoTodos: AtuacaoInterface[] = await this.gradeAtuacaoModel.getGradeAtuaçãoTodos(regiao)
            res.json(gradeAtuacaoTodos);
        } catch (error) {
            console.error('Erro ao consultar tabela:', error);
            res.status(500).json({ error: 'Erro ao consultar tabela' });
        }
    }

    
}

export default GradeAtuacaoController;