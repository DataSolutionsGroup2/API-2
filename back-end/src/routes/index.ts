import express from "express";
import GradeAtuacaoController from "../controllers/GradeAtuacaoController";
import DeleteUsuarios from "../controllers/DeleteUserController";
import u1 from "../controllers/PutUsuarios"
import pool from "../controllers/db";

const router = express.Router();
const gradeAtuacaoController = new GradeAtuacaoController(pool);
const deleteUserController = new DeleteUsuarios();

router.get('/grade-atuacao/analista', gradeAtuacaoController.getGradeAtuacaoAnalista.bind(gradeAtuacaoController));
router.get('/grade-atuacao/analistas', gradeAtuacaoController.getGradeAtuacaoAnalistas.bind(gradeAtuacaoController));
router.get('/grade-atuacao/analistas/todos', gradeAtuacaoController.getGradeAtuacaoTodos.bind(gradeAtuacaoController));

router.put('/usuarios',u1);
router.delete("/usuarios", deleteUserController.deleteUsuario);

export default router;
