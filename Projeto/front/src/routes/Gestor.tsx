import { Route, Routes } from "react-router-dom";
import PageGestor from "../pages/pageGestor";
import PageStatisticscEditor from "../pages/pagesStatistcs/PageStatisticsEditor";
import PagestatisticsRevisor from "../pages/pagesStatistcs/PageStatisticRevisor";
import AreaDeTrabalho from "../components/Gestor/areaDeTrabalho/Desktop";
import CriacaoEdidorRevisorModal from "../components/Gestor/Criar Usuario/CriacaoEditorRevisorModal";
import Login from "../pages/LoginPage/LoginPage";
import Editor from "../pages/EditorPage/EditorPage";
import  Teste  from "../teste/teste";

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
      <Route path="/teste" element={<Teste />} />
    </Routes>
  );
}

export default Rotas;
