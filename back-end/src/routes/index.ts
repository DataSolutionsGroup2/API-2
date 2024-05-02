import express from 'express';
import GradeAtuacaoController from '../controllers/GradeAtuacaoController';

const router = express.Router();
const gradeAtuacaoController = new GradeAtuacaoController();

router.get('/grade-atuacao', gradeAtuacaoController.getGradeAtuacao);

export default router;