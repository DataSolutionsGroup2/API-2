import { useNavigate } from "react-router-dom";
import HeaderComponent from "../HeaderComponent";

const GestorPage = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/CreateUser");
  };

  const buttons = [
    {
      name: "Criar Revisor/Editor",
      onClick: handleButton,
    },
    {
      name: "Pesquisar",
      onClick: () => navigate("/relatorios"),
    },
    {
      name: "Home",
      onClick: () => navigate("/pagegestor"),
    },
  ];

  return (
    <div>
      <HeaderComponent buttons={buttons} />
    </div>
  );
};

export default GestorPage;
