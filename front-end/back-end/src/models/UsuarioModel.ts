import bcrypt from 'bcrypt';
import { Pool, QueryResult } from "pg";

export interface UsuarioInterface{
    nome: string;
    senha: string;
    email:string;
    funcao: string;
}

class UsuarioModel{
    private pool: Pool;

    constructor(pool:Pool){
        this.pool = pool
    }
    
    async encontrarUsuarioPorEmail(email: string): Promise<UsuarioInterface>{

        const query = `
            SELECT nome, email, senha, funcao
            FROM usuarios
            WHERE email = $1
        `;
        
        const data: QueryResult<UsuarioInterface> = await this.pool.query(query, [email]);
    
        const result:UsuarioInterface = data.rows[0]
        return result
    }

    async compararSenha(senha: string, hashSenha: string): Promise<boolean>{
        const senhaValida =  await bcrypt.compare(senha, hashSenha);
        return senhaValida;
    }


}

export default UsuarioModel