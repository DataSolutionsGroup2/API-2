import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import GestorPage from "./components/manager/GestorPage";
import LayoutPage from "./pages/RelatorioPage/LayoutPage";
import PageGestor from "./pages/PaginaGestor";

import CriacaoEdidorRevisorModal from "./pages/Criar Usuario/CriacaoEditorRevisorModal";
import PesquisaDataGrid from "./pages/Criar Usuario/Pesquisas/pesquisa";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/gestorPage" element={<GestorPage />} />
      <Route path="/relatorios" element={<LayoutPage />} />
      <Route path="/relatorioPage" element={<LayoutPage />} />
      <Route path="/createUser" element={<CriacaoEdidorRevisorModal />} />
      <Route path="/pagegestor" element={<PageGestor />} />
      <Route path="/pesquisa" element={<PesquisaDataGrid />} />
    </Routes>
  );
}

export default Rotas;
