import { Router, Request, Response } from "express";
import userController from "../controllers/UserController";
import user from "./user";
import { checkAdm, validadeAcess } from "../middlewares";
import stats from "./stats";
import InsertOrUpdateValidacao from "../controllers/InsertValidacaoTbgradeRevisor";
import InsertOrUpdateAtribuicao from "../controllers/InserAtribuicaoTbGradeEditor";
import ListUsers from "../controllers/Users";
import Users from "../controllers/CreateController";
import GetRevisor from "../controllers/RevisorController";
import { ApontamentoRevisor } from "../controllers/RevisorController";
import Editor from "../controllers/Tbapontamento_alteracao";

const routes = Router();
const insertOrUpdateValidacao = new InsertOrUpdateValidacao();
const insertOrUpdateAtribuicao = new InsertOrUpdateAtribuicao();
const createUser = new Users();
const listUsers = new ListUsers();
const deleteUser = new Users();

routes.get("/apontamentorevisor", ApontamentoRevisor);
routes.get("/revisor", GetRevisor);
routes.get("/editor",Editor);
routes.post("/login", userController.login);
routes.use("/usuario", validadeAcess, user);
routes.use("/estatisticas", validadeAcess, checkAdm, stats);
routes.post("/insertValidacaoRevisor", (req: Request, res: Response) =>
  insertOrUpdateValidacao.insertOrUpdateValidacao(req, res)
);
routes.post("/insertAtribuicaoEditor", (req: Request, res: Response) =>
  insertOrUpdateAtribuicao.insertOrUpdateAtribuicao(req, res)
);
routes.post("/createUser", (req: Request, res: Response) =>
  createUser.createUser(req, res)
);
routes.post("/deleteUser", (req: Request, res: Response) =>
  deleteUser.deleteUser(req, res)
);
routes.get("/Listusers", async (req: Request, res: Response) =>
  listUsers.listUsers(req, res)
);

routes.use((_: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default routes;
