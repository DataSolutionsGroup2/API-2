import { useNavigate } from "react-router-dom";
import HeaderComponent from "../FaixaMenuGestor.tsx/BoxButton";

const GestorPage = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/CreateUser");
  };

  const buttons = [
    {
      name: "Home",
      onClick: () => navigate("/pagegestor"),
    },
    {
      name: "Criar Revisor/Editor",
      onClick: handleButton,
    },
    {
      name: "Área de trabalho",
      onClick: () => navigate("/pesquisa"),
    },

    {
      name: "Estatísticas dos editores",
      onClick: () => navigate("/pagestatisticseditor"),
    },
    {
      name: "Estatísticas dos revisores",
      onClick: () => navigate("/pagestatisticsrevisor"),
    },
  ];

  return (
    <div>
      <HeaderComponent buttons={buttons} />
    </div>
  );
};

export default GestorPage;
