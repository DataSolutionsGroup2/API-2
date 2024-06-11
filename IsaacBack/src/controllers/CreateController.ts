import { Request, Response } from "express";
import query from "../database/connection";

class Users {
  // Método para criar um novo usuário
  public async createUser(req: Request, res: Response): Promise<void> {
    const { mail, password, profile } = req.body;

    // Verifica se todos os campos obrigatórios foram fornecidos
    if (!mail || !password || !profile) {
      res
        .status(400)
        .json({ error: "Por favor, forneça todos os campos necessários" });
      return;
    }

    // Verifica se o perfil é válido
    if (profile !== "adm" && profile !== "user") {
      res.status(400).json({ error: "O perfil precisa ser 'adm' ou 'user'" });
      return;
    }

    try {
      const response = await query(
        "INSERT INTO users(mail, password, profile) VALUES ($1, $2, $3) RETURNING id, mail, profile",
        [mail, password, profile]
      );

      // Verifica se o usuário foi criado com sucesso
      if (response.rows && response.rows.length > 0) {
        res.status(201).json(response.rows[0]);
      } else {
        res.status(500).json({ error: "usuario criado com sucesso " });
      }
    } catch (error: any) {
      // Verifica se ocorreu um erro de chave duplicada
      if (error.message.includes("duplicate key")) {
        res
          .status(400)
          .json({ error: `O e-mail ${mail} já existe no cadastro` });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  }

  // Método para excluir um usuário
  public async deleteUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    // Verifica se o ID do usuário foi fornecido
    if (!id) {
      res
        .status(400)
        .json({ error: "Por favor, forneça o ID do usuário a ser excluído" });
      return;
    }

    try {
      const response = await query(
        "DELETE FROM users WHERE id = $1 RETURNING id",
        [id]
      );

      // Verifica se o usuário foi excluído com sucesso
      if (response.rows && response.rows.length > 0) {
        res.status(200).json({ message: "Usuário excluído com sucesso" });
      } else {
        res.status(404).json({ error: "Usuário não encontrado" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default Users;
