import express from 'express';
import GradeAtuacaoController from '../controllers/GradeAtuacaoController';
import u1 from "../controllers/PutUsuarios"

const router = express.Router();
const gradeAtuacaoController = new GradeAtuacaoController();

router.get('/grade-atuacao', gradeAtuacaoController.getGradeAtuacao);
router.put('/usuarios',u1);

export default router;