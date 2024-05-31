import express from "express";

import GradeAtuacaoController from "../controllers/GradeAtuacaoController";
import DeleteUsuarios from "../controllers/DeleteUserController";
import u1 from "../controllers/PutUsuarios";

import CreateUserController from "../controllers/CreateUserController";
import GetAnalistaController from "../controllers/GetAnalistaController";

import AuthController from "../controllers/AuthController";
import pool from "../controllers/db";
import InsertUsuario from "../controllers/InsertUser";
import GetGradeAtuacao from "../controllers/GetTbGradeAtuacaoCidades";
import InsertOrUpdateAtribuicao from "../controllers/InserAtribuicaoTbGrade";
import GetStatistcs from "../controllers/GetStastistcs";

const router = express.Router();
const gradeAtuacaoController = new GradeAtuacaoController(pool);
const deleteUserController = new DeleteUsuarios();
const insertUserController = new InsertUsuario();
const selectGradeAtuacao = new GetGradeAtuacao();
const createUserController = new CreateUserController();
const getAnalistaController = new GetAnalistaController();
const authController = new AuthController(pool);
const insertUpdateAnalistaController = new InsertOrUpdateAtribuicao();
const getStatistcs = new GetStatistcs();
const getAreaStatistcs = new GetStatistcs();

router.get(
  "/grade-atuacao/analista",
  gradeAtuacaoController.getGradeAtuacaoAnalista.bind(gradeAtuacaoController)
);
router.get(
  "/grade-atuacao/analistas",
  gradeAtuacaoController.getGradeAtuacaoAnalistas.bind(gradeAtuacaoController)
);
router.get(
  "/grade-atuacao/analistas/todos",
  gradeAtuacaoController.getGradeAtuacaoTodos.bind(gradeAtuacaoController)
);

router.post(
  "/create-user",
  createUserController.postUser.bind(createUserController)
);
router.get(
  "/atribuicao-analista",
  getAnalistaController.getAnalista.bind(getAnalistaController)
);

router.put("/usuarios", u1);
router.post("/usuarios", insertUserController.insertUsuario);
router.delete("/usuarios", deleteUserController.deleteUsuario),
  router.post("/login", authController.getLoginUsuario.bind(authController));
router.get("/Gradeatuacao", selectGradeAtuacao.getGradeAtuacao);
router.post(
  "/Gradeatuacao",
  insertUpdateAnalistaController.insertOrUpdateAtribuicao
);
router.get("/statistcs", getStatistcs.getStatistics);
router.get("/tbaoistatistcs", getAreaStatistcs.getAreaStatistics);
export default router;
