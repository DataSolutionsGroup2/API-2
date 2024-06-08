import { Request, Response } from 'express';
import pool from '../databases/connection';

class Usuario {
    async putUsuario(req: Request, res: Response) {
        try {
            const { nome, email, senha, funcao } = req.body;
            const userId = req.query.id;

            const queryText = `
                UPDATE usuarios
                SET nome = $1, email = $2, senha = $3, funcao = $4
                WHERE id = $5;
            `;

            await pool.query(queryText, [nome, email, senha, funcao, userId]);
            res.status(200).json({ message: 'Dados do usuário atualizados com sucesso!' });
        }

        catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            res.status(500).json({ error: 'Erro ao atualizar usuário.' });
        }
    }
}

const u1 = new Usuario();
export default u1.putUsuario ;
