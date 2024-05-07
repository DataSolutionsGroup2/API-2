import express from "express";
import GradeAtuacaoController from "../controllers/GradeAtuacaoController";
import DeleteUsuarios from "../controllers/DeleteUserController";
import u1 from "../controllers/PutUsuarios"

const router = express.Router();
const gradeAtuacaoController = new GradeAtuacaoController();
const deleteUserController = new DeleteUsuarios();

router.get('/grade-atuacao', gradeAtuacaoController.getGradeAtuacao);
router.put('/usuarios',u1);
router.delete("/usuarios", deleteUserController.deleteUsuario);

export default router;
