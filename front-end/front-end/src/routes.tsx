import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import GestorPage from "./components/Gestor/manager/GestorPage";
import CriacaoEdidorRevisorModal from "./components/Gestor/Criar Usuario/CriacaoEditorRevisorModal";
import PesquisaDataGrid from "./components/Gestor/Pesquisas/pesquisa";
import PageGestor from "./pages/PaginaGestor";

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
