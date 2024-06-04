import { Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import PageGestor from "./pages/PaginaGestor";
import PageStatisticscEditor from "./pages/pagesStatistcs/PageStatisticsEditor";
import PagestatisticsRevisor from "./pages/pagesStatistcs/PageStatisticRevisor";
import CriacaoEdidorRevisorModal from "./components/gestor/criar Usuario/CriacaoEditorRevisorModal";
import AreaDeTrabalho from "./components/gestor/areaDeTrabalho/Desktop";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/createUser" element={<CriacaoEdidorRevisorModal />} />
      <Route path="/pagegestor" element={<PageGestor />} />
      <Route path="/areadetrabalho" element={<AreaDeTrabalho />} />
      <Route path="/statisticseditor" element={<PageStatisticscEditor />} />
      <Route path="/statisticsrevisor" element={<PagestatisticsRevisor />} />
    </Routes>
  );
}

export default Rotas;
