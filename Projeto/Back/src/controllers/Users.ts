import { Request, Response } from "express";
import {query} from "../database/connection";

class ListUsers {
  public async listUsers(req: Request, res: Response): Promise<void> {
    try {
      const sql = "SELECT * FROM users";
      const users = await query(sql);

      res.json(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      res.status(500).json({ error: "Erro ao buscar usuários" });
    }
  }
}

export default ListUsers;
