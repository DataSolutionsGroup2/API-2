import { Route, Routes } from "react-router-dom";
import Login from "./pages/loginPage/LoginPage";
import PageGestor from "./pages/pageGestor";
import PageStatisticscEditor from "./pages/pagesStatistcs/PageStatisticsEditor";
import PagestatisticsRevisor from "./pages/pagesStatistcs/PageStatisticRevisor";
import CriacaoEdidorRevisorModal from "./components/gestor/criar Usuario/CriacaoEditorRevisorModal";
import AreaDeTrabalho from "./components/gestor/areaDeTrabalho/Desktop";
import StatisticsChanges from "./pages/pagesStatistcs/PageChanges";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/createUser" element={<CriacaoEdidorRevisorModal />} />
      <Route path="/pagegestor" element={<PageGestor />} />
      <Route path="/areadetrabalho" element={<AreaDeTrabalho />} />
      <Route path="/statisticseditor" element={<PageStatisticscEditor />} />
      <Route path="/statisticsrevisor" element={<PagestatisticsRevisor />} />
      <Route path="/statisticschanges" element={<StatisticsChanges />} />
    </Routes>
  );
}

export default Rotas;
