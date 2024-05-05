import express from "express";
import GradeAtuacaoController from "../controllers/GradeAtuacaoController";
import DeleteUsuario from "../controllers/DeleteUserController";

const router = express.Router();
const gradeAtuacaoController = new GradeAtuacaoController();
const deleteUserController = new DeleteUsuario();

router.get("/grade-atuacao", gradeAtuacaoController.getGradeAtuacao);
router.delete("/usuarios", deleteUserController.deleteUsuario);

export default router;
