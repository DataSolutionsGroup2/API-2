import {Request, Response} from 'express';
import {sign} from 'jsonwebtoken';
import UsuarioModel, { UsuarioInterface } from '../models/UsuarioModel';
import { Pool } from 'pg';


class AuthController {
    private usuarioModel: UsuarioModel;

    constructor(banco: Pool){
        this.usuarioModel = new UsuarioModel(banco);
    }

    
    async getLoginUsuario(req: Request, res: Response): Promise<any> {
        //pegar o login e senha e ir para o model para criptografar a senha
        const usuario: UsuarioInterface = req.body;
        const usuarioEncontrado : UsuarioInterface  = await this.usuarioModel.encontrarUsuarioPorEmail(usuario.email);
            
        if(usuarioEncontrado == undefined){
            console.error('Usuario nao encontrado.');
            return res.status(500).json({ error: 'Usuario não encontrado' });
        } else{
            const senhaValida = await this.usuarioModel.compararSenha(usuarioEncontrado.senha, usuario.senha)
            console.log('senhaValida: ', senhaValida)                       
            if(senhaValida){
                //authService.autenticacao(usuarioEncontrado);
                const token = sign({funcao: usuarioEncontrado.funcao}, "secret", {expiresIn:'2h'});
                const result = res.json({
                    usuario:{
                        nome: usuarioEncontrado.nome,
                        email: usuarioEncontrado.email,
                        funcao: usuarioEncontrado.funcao
                    }, 
                    token
                });
                return result
            }else{
                console.error('Senha invalida.');
                return res.status(500).json({ error: 'Senha invalida' });
            }
        } 
    }
}
export default AuthController;