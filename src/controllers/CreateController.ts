import { Request, Response } from "express";
import query from "../database/connection";

class CreateUserController {
  public async createUser(req: Request, res: Response): Promise<void> {
    const { mail, password, profile } = req.body;

    if (!mail) {
      res.status(400).json({ error: "Forneça o e-mail" });
      return;
    }

    if (!password) {
      res.status(400).json({ error: "Forneça a senha" });
      return;
    }

    if (!profile) {
      res.status(400).json({ error: "Forneça o perfil" });
      return;
    }

    if (profile !== "adm" && profile !== "user") {
      res.status(400).json({ error: "O perfil precisa ser adm ou user" });
      return;
    }

    try {
      const response = await query(
        "INSERT INTO users(mail, password, profile) VALUES ($1, $2, $3) RETURNING id, mail, profile",
        [mail, password, profile]
      );

      if (response.rows && response.rows.length > 0) {
        res.status(201).json(response.rows[0]);
        return;
      } else {
        res.status(500).json({ error: "Erro ao criar usuário" });
        return;
      }
    } catch (error: any) {
      if (error.message.includes("duplicate key")) {
        res
          .status(400)
          .json({ error: `O e-mail ${mail} já existe no cadastro` });
        return;
      } else {
        res.status(500).json({ error: error.message });
        return;
      }
    }
  }
}

export default new CreateUserController();
