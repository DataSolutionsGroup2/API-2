import express from "express";
import GradeAtuacaoController from "../controllers/GradeAtuacaoController";
import DeleteUsuarios from "../controllers/DeleteUserController";
import u1 from "../controllers/PutUsuarios"
import pool from "../controllers/db";
import CreateUserController from "../controllers/CreateUserController";
import GetAnalistaController from "../controllers/GetAnalistaController";

const router = express.Router();
const gradeAtuacaoController = new GradeAtuacaoController(pool);
const deleteUserController = new DeleteUsuarios();
const createUserController = new CreateUserController();
const getAnalistaController = new GetAnalistaController();

router.get('/grade-atuacao/analista', gradeAtuacaoController.getGradeAtuacaoAnalista.bind(gradeAtuacaoController));
router.get('/grade-atuacao/analistas', gradeAtuacaoController.getGradeAtuacaoAnalistas.bind(gradeAtuacaoController));
router.get('/grade-atuacao/analistas/todos', gradeAtuacaoController.getGradeAtuacaoTodos.bind(gradeAtuacaoController));

router.post('/create-user', createUserController.postUser.bind(createUserController));
router.get('/atribuicao-analista', getAnalistaController.getAnalista.bind(getAnalistaController))

router.put('/usuarios',u1);
router.delete("/usuarios", deleteUserController.deleteUsuario);

export default router;
