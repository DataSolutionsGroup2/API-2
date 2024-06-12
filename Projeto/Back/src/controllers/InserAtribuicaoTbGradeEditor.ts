import { Request, Response } from "express";
import {query} from "../database/connection";

class InsertOrUpdateAtribuicao {
  async insertOrUpdateAtribuicao(req: Request, res: Response) {
    try {
      const { cidade, atribuicao } = req.body;
      const id = parseInt(req.body.id); // Converter o ID para um número

      // Verificar se todos os campos estão presentes
      if (!cidade) {
        return res.status(400).json({
          error: "Todos os campos são obrigatórios: cidade e atribuicao.",
        });
      }

      console.log("Dados recebidos na solicitação:", {
        id,
        cidade,
        atribuicao,
      }); // Log dos dados recebidos

      // Inserir ou atualizar o registro na tabela correspondente à cidade do post
      const updateText = `
        INSERT INTO public.tbgrade_atuacao_${cidade.toLowerCase()} (id,atribuicao)
        VALUES ($1, $2)
        ON CONFLICT (id) DO UPDATE SET atribuicao = $2
      `;
      console.log("Consulta SQL para INSERT:", updateText); // Log da consulta SQL para INSERT
      await query(updateText, [id, atribuicao]);

      return res
        .status(201)
        .json({ message: "Atribuição inserida ou atualizada com sucesso." });
    } catch (error) {
      console.error("Erro ao inserir ou atualizar validação:", error);
      return res
        .status(500)
        .json({ error: "Erro ao inserir ou atualizar validação." });
    }
  }
}

export default InsertOrUpdateAtribuicao;
