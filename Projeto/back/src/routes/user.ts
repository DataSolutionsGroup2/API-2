import { Router, Request, Response } from "express";
import controller from "../controllers/UserController";
import { checkAdm } from "../middlewares";

const router = Router();
//somente o proprio usuario pode acessar;

//somente o adm pode acessar;
router.get("/", checkAdm, controller.list);
router.post("/", checkAdm, controller.create);
router.delete("/", checkAdm, controller.delete);

//aceita qualquer método HTTP ou URL
router.use( (_:Request,res:Response) => res.json({error:"Operação desconhecida com o usuário"}) );

export default router