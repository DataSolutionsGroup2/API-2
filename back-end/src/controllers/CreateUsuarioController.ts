import {Request, Response} from 'express';
import {sign} from 'jsonwebtoken';
import UsuarioModel, { UsuarioInterface } from '../models/UsuarioModel';
import { Pool } from 'pg';

class CreateUsuarioController{
    private usuarioModel: UsuarioModel;

    constructor(banco: Pool){
        this.usuarioModel = new UsuarioModel(banco);
    }
}