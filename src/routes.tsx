import { Route, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import GestorPage from "./components/Gestor/manager/GestorPage";
import CriacaoEdidorRevisorModal from "./components/Gestor/Criar Usuario/CriacaoEditorRevisorModal";
import PageGestor from "./pages/PaginaGestor";
import PageStatisticscEditor from "./components/Gestor/PagesStatistcs/PageStatisticsEditor";
import PagestatisticsRevisor from "./components/Gestor/PagesStatistcs/PageStatisticRevisor";
import PesquisaDataGrid from "./components/Gestor/Pesquisas/Desktop";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/gestorPage" element={<GestorPage />} />
      <Route path="/createUser" element={<CriacaoEdidorRevisorModal />} />
      <Route path="/pagegestor" element={<PageGestor />} />
      <Route path="/pesquisa" element={<PesquisaDataGrid />} />
      <Route path="/pagestatisticseditor" element={<PageStatisticscEditor />} />
      <Route
        path="/pagestatisticsrevisor"
        element={<PagestatisticsRevisor />}
      />
    </Routes>
  );
}

export default Rotas;
