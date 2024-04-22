import { Router } from "express";
import { list } from "../controllers/alteracao";

const router = Router();

router.get("/:tablename", async (req, res) => {
    try {
      const { tablename } = req.params; // Obter o nome da tabela dos parâmetros da URL
      const result = await list(req, res, tablename); // Passar o nome da tabela como parâmetro
      res.json(result);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      res.status(500).json({ error: "Erro ao buscar dados" });
    }
  });
  
  export default router;