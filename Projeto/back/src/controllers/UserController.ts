import { Request, Response } from "express";
import { tokenize } from "../middlewares";
import { query } from "../databases/connection";

class UserController {
    public async login(req: Request, res: Response): Promise<void> {
        const { mail, password } = req.body;

        if (!mail || !password) {
            res.status(401).json({ erro: "Forneça o E-mail e Senha" });
        } else {
            const response: any = await query(`
                SELECT id, mail, profile
                FROM usuarios
                WHERE mail=$1 AND password=$2`,
                [mail, password]
            );

            if (response.length > 0) {
                const [object] = response;
                res.json({ ...object, token: tokenize(object) });
            } else {
                res.json({ erro: "Dados de login não conferem" })
            }
        }
    }
    public async create(req: Request, res: Response): Promise<void> {
        const { nome, mail, password, funcao, profile } = req.body;
        if (!mail || !password || !profile) {
            res.status(401).json({ erro: "Forneça o e-mail, perfil e senha" });
        } else if (profile !== "adm" && profile !== "user") {
            res.status(401).json({ erro: "O perfil precisa ser adm ou user" });
        } else {
            const response: any = await query(
                "INSERT INTO usuarios(nome, mail, password, funcao) VALUES ($1,$2,$3,$4) RETURNING id, mail, funcao, profile",
                [nome, mail, password, funcao]
            );

            if (response && response.id) {
                res.json(response);
            } else if (response.message.startsWith("duplicate key")) {
                res.json({ erro: `O e-mail ${mail} já existe no cadastro` });
            } else {
                res.json({ erro: response.message });
            }
        }
    }
    public async list(_: Request, res: Response): Promise<void> {
        const response: any = await query(
            "SELECT id,nome,mail,funcao,profile FROM usuarios ORDER BY mail"
        );
        res.json(response);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { iduser } = req.body;
        if (!iduser) {
            res.status(401).json({ erro: "Forneça o usuário a ser excluído" });
        } else {
            const response: any = await query(
                "DELETE FROM usuarios WHERE id = $1 RETURNING id, mail, profile",
                [iduser]
            );

            if (response && response.rowcount && response.rowcount > 0) {
                res.json(response.rows);
            } else {
                res.json({ erro: "Usuário não localizado" });
            }
        }
    }

}

export default new UserController();