import { Request, Response } from "express";
import query from "../database/connection";
import { tokenize } from "../middlewares";

class UserController {
  public async login(req: Request, res: Response): Promise<void> {
    const { mail, password } = req.body;

    if (!mail) {
      res.status(400).json({ erro: "Forneça o e-mail" });
    } else if (!password) {
      res.status(400).json({ erro: "Forneça a senha" });
    } else {
      const response: any = await query(
        `SELECT id, mail, profile 
          FROM users 
          WHERE mail=$1 AND password=$2`,
        [mail, password]
      );

      if (response.length > 0) {
        const [object] = response;
        res.status(200).json({ ...object, token: tokenize(object) });
      } else {
        res.status(401).json({ erro: "Dados de login não conferem" });
      }
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    const { mail, password, profile } = req.body;

    if (!mail) {
      res.status(400).json({ erro: "Forneça o e-mail" });
    } else if (!password) {
      res.status(400).json({ erro: "Forneça a senha" });
    } else if (!profile) {
      res.status(400).json({ erro: "Forneça o perfil" });
    } else if (profile !== "adm" && profile !== "user") {
      res.status(400).json({ erro: "O perfil precisa ser adm ou user" });
    } else {
      try {
        const response: any = await query(
          "INSERT INTO users(mail, password, profile) VALUES ($1, $2, $3) RETURNING id, mail, profile",
          [mail, password, profile]
        );
        res.status(201).json(response);
      } catch (error: any) {
        if (error.message.startsWith("duplicate key")) {
          res
            .status(409)
            .json({ erro: `O e-mail ${mail} já existe no cadastro` });
        } else {
          res.status(500).json({ erro: error.message });
        }
      }
    }
  }

  public async list(_: Request, res: Response): Promise<void> {
    const response: any = await query(
      "SELECT id, mail, profile FROM users ORDER BY mail"
    );
    res.status(200).json(response);
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { iduser } = req.params;
    if (!iduser) {
      res.status(400).json({ erro: "Forneça o usuário a ser excluído" });
    } else {
      const response: any = await query(
        "DELETE FROM users WHERE id = $1 RETURNING id, mail, profile",
        [iduser]
      );

      if (response && response.rowCount > 0) {
        res.status(200).json(response.rows);
      } else if (response.message.startsWith("update or delete on table")) {
        res.status(400).json({ erro: `O usuário possui atribuições` });
      } else {
        res.status(404).json({ erro: "Usuário não localizado" });
      }
    }
  }

  public async updateMail(req: Request, res: Response): Promise<void> {
    const { mail } = req.body;
    const { id } = res.locals;
    if (!mail) {
      res.status(400).json({ erro: "Forneça o novo e-mail" });
    } else {
      try {
        const response: any = await query(
          "UPDATE users SET mail=$2 WHERE id=$1 RETURNING id, mail, profile",
          [id, mail]
        );
        if (response.rowCount === 1) {
          res.status(200).json({ mail });
        } else {
          res.status(404).json({ erro: "Usuário não localizado" });
        }
      } catch (error: any) {
        if (error.message.startsWith("duplicate key")) {
          res
            .status(409)
            .json({ erro: `O e-mail ${mail} já existe no cadastro` });
        } else {
          res.status(500).json({ erro: "Não foi possível alterar o e-mail" });
        }
      }
    }
  }

  public async updatePassword(req: Request, res: Response): Promise<void> {
    const { password } = req.body;
    const { id } = res.locals;
    if (!password) {
      res.status(400).json({ erro: "Forneça a nova senha" });
    } else {
      const response: any = await query(
        "UPDATE users SET password=$2 WHERE id=$1 RETURNING id, mail, profile",
        [id, password]
      );
      res.status(200).json(response);
    }
  }

  public async updateProfile(req: Request, res: Response): Promise<void> {
    const { id, profile } = req.body;
    if (profile === "adm" || profile === "user") {
      const response: any = await query(
        "UPDATE users SET profile=$2 WHERE id=$1 RETURNING id, mail, profile",
        [id, profile]
      );
      res.status(200).json(response);
    } else {
      res.status(400).json({ erro: "Perfil inexistente" });
    }
  }
}

export default new UserController();
