import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/LoginPage";
import GestorPage from "./pages/GestorPage/GestorPage";
import LayoutPage from "./pages/RelatorioPage/LayoutPage";

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/gestorPage" element={<GestorPage />} />
            <Route path="/relatorios" element={<LayoutPage />} />
            <Route path="/relatorioPage" element={<LayoutPage />} />
        </Routes>
    );
}

export default Rotas;