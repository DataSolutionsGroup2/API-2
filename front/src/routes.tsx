import { Route, Routes } from "react-router-dom";
import GestorPage from "./components/Gestor/manager/GestorPage";
import Login from "./pages/LoginPage/LoginPage";
import CriacaoEdidorRevisorModal from "./components/Gestor/Criar Usuario/CriacaoEditorRevisorModal";
import PageGestor from "./pages/PaginaGestor";
import PesquisaDataGrid from "./components/Gestor/Pesquisas/pesquisa";

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
