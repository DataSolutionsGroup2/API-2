import { Request, Response } from "express";
import pool from "./db";

class DeleteUsuarios {
  async deleteUsuario(req: Request, res: Response) {
    try {
      const nome = req.query.nome as string;

      const queryText = `
        DELETE FROM usuarios
        WHERE nome = $1;
      `;

      await pool.query(queryText, [nome]);
      res
        .status(200)
        .json({ message: "Dados do usuário deletados com sucesso!" });
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      res.status(500).json({ error: "Erro ao deletar usuário." });
    }
  }
}

export default DeleteUsuarios;
