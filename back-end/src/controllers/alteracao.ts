import { Request,Response } from "express";
import pool from "./db";

export async function list(req: Request, res: Response, tablename: string) {
    try {
      const response = await pool.query(`SELECT id, area_km2, municipio, cod_estado, cod_class, class, obs FROM ${tablename}`);
      res.json(response.rows);
    } catch (error) {
      console.error("Erro ao listar dados:", error);
      res.status(500).json({ error: "Erro ao listar dados" });
    }
  }