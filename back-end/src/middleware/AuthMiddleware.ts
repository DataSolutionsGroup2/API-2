import { NextFunction,Request, Response } from "express";
import { verify } from "jsonwebtoken";

type TokenInterface = {
    funcao: string,
    iat: number,
    exp: number
}


export function AuthMiddleware(req: Request, res: Response, next: NextFunction){
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({error: "Token vazio"});
    }

    const [, token] = authorization.split(" ");

    try {
        const decoded = verify(token, "secret");
        const {funcao} = decoded as TokenInterface;

        //req.funcao = funcao;
        next();
    } catch (error) {
        return res.status(401).json({error: "Token invalido"});
    }
}