import { Request, Response } from "express";
import pool from "./db";

class CreateUserController{
    async postUser(req:Request, res:Response){
        try{
            const {nome, email, senha, funcao} = req.body;
            const queryText = `
               INSERT INTO usuarios(nome, email, senha, funcao) VALUES ($1, $2, $3, $4)
            `;
            await pool.query(
                queryText, [nome, email, senha, funcao]
            );
            res.status(200).json({message:"Usuario adicionado com sucesso!"});  
            
        }
        catch(error){
            console.error('Não foi possivel inserir usuario', error);
            res.status(500).send('Internal Server Error');
        }
    }
}

export default CreateUserController;