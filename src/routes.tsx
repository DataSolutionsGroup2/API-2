import { Route, Routes } from "react-router-dom";
import GestorPage from "./components/Gestor/manager/GestorPage";
import Login from "./pages/LoginPage/LoginPage";
import CriacaoEdidorRevisorModal from "./components/Gestor/Criar Usuario/CriacaoEditorRevisorModal";
import PageGestor from "./pages/PaginaGestor";
import PesquisaDataGrid from "./components/Gestor/Pesquisas/AreaEditor";
import StatisticsEditor from "./components/Gestor/StatisticsEditor/PageStatisticsEditor";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/gestorPage" element={<GestorPage />} />
      <Route path="/createUser" element={<CriacaoEdidorRevisorModal />} />
      <Route path="/pagegestor" element={<PageGestor />} />
      <Route path="/pesquisa" element={<PesquisaDataGrid />} />
      <Route path="/pagestatisticseditor" element={<StatisticsEditor />} />
    </Routes>
  );
}

export default Rotas;
