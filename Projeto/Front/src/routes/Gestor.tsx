import { Route, Routes } from "react-router-dom";
import PageGestor from "../pages/pageGestor";
import PageStatisticscEditor from "../pages/pagesStatistcs/PageStatisticsEditor";
import PagestatisticsRevisor from "../pages/pagesStatistcs/PageStatisticRevisor";
import AreaDeTrabalho from "../components/Gestor/areaDeTrabalho/Desktop";
import CriacaoEdidorRevisorModal from "../components/Gestor/criar Usuario/CriacaoEditorRevisorModal";
import Editor from "../pages/EditorPage/EditorPage";
import Apontamento from "../pages/RevisorPage/Apontamento";
import Revisor from "../pages/RevisorPage/RevisorPage";
import Login from "../pages/loginPage/LoginPage";


function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/createUser" element={<CriacaoEdidorRevisorModal />} />
      <Route path="/pagegestor" element={<PageGestor />} />
      <Route path="/areadetrabalho" element={<AreaDeTrabalho />} />
      <Route path="/statisticseditor" element={<PageStatisticscEditor />} />
      <Route path="/statisticsrevisor" element={<PagestatisticsRevisor />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/revisor" element={<Revisor />} />
      <Route path="/apontamentorevisor" element={<Apontamento />} />
    </Routes>
  );
}

export default Rotas;
