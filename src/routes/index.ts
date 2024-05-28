import { Router, Request, Response } from "express";
import userController from "../controllers/UserController";
import user from "./user";
import { validadeAcess } from "../middlewares";

const routes = Router();

routes.post("/login", userController.login);
routes.use("/usuario", validadeAcess, user);

//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );

export default routes;