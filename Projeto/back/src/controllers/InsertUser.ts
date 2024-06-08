import { Request, Response } from "express";
import pool from "../databases/connection";

class InsertUsuario {
  async insertUsuario(req: Request, res: Response) {
    try {
      const { nome, email, senha, funcao } = req.body;

      const queryText = `
        INSERT INTO usuarios (nome, email, senha, funcao)
        VALUES ($1, $2, $3, $4);
      `;

      await pool.query(queryText, [nome, email, senha, funcao]);
      res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ error: "Erro ao criar usuários." });
    }
  }
}

export default InsertUsuario;
