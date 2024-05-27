import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import GestorPage from "./components/manager/GestorPage";

import PageGestor from "./pages/PaginaGestor";

import CriacaoEdidorRevisorModal from "./pages/Gestor/Criar Usuario/CriacaoEditorRevisorModal";
import PesquisaDataGrid from "./pages/Gestor/Pesquisas/pesquisa";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/gestorPage" element={<GestorPage />} />
      <Route path="/createUser" element={<CriacaoEdidorRevisorModal />} />
      <Route path="/pagegestor" element={<PageGestor />} />
      <Route path="/pesquisa" element={<PesquisaDataGrid />} />
    </Routes>
  );
}

export default Rotas;
