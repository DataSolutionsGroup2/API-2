import express from "express";
import DeleteUsuarios from "../controllers/DeleteUserController";
import u1 from "../controllers/PutUsuarios";
import InsertUsuario from "../controllers/InsertUser";
import GetGradeAtuacao from "../controllers/GetTbGradeAtuacaoCidades";
import InsertOrUpdateAtribuicao from "../controllers/InserAtribuicaoTbGrade";
import GetStatistcs from "../controllers/GetStastistcs";

const router = express.Router();
const deleteUserController = new DeleteUsuarios();
const insertUserController = new InsertUsuario();
const selectGradeAtuacao = new GetGradeAtuacao();
const insertUpdateAnalistaController = new InsertOrUpdateAtribuicao();
const getStatistcs = new GetStatistcs();
const getAreaStatistcs = new GetStatistcs();
const getStatusEditorStatistcs = new GetStatistcs();
const getStatusRevisorStatistcs = new GetStatistcs();

router.put("/usuarios", u1);
router.post("/usuarios", insertUserController.insertUsuario);
router.delete("/usuarios", deleteUserController.deleteUsuario),
  router.get("/Gradeatuacao", selectGradeAtuacao.getGradeAtuacao);
router.post(
  "/Gradeatuacao",
  insertUpdateAnalistaController.insertOrUpdateAtribuicao
);
router.get("/statistcs", getStatistcs.getStatistics);
router.get("/tbaoistatistcs", getAreaStatistcs.getAreaStatistics);
router.get(
  "/tbgradestatuseditor",
  getStatusEditorStatistcs.getStatusEditorStatistics
);
router.get(
  "/tbgradestatusrevisor",
  getStatusRevisorStatistcs.getStatusRevisorStatistics
);
export default router;
