import { useNavigate } from "react-router-dom";
import HeaderComponent from "./BoxButton";


const SelectorButton = () => {
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
      name: "Criar usuário",
      onClick: handleButton,
    },
    {
      name: "Área de trabalho",
      onClick: () => navigate("/areadetrabalho"),
    },

    {
      name: "Estatísticas dos editores",
      onClick: () => navigate("/statisticseditor"),
    },
    {
      name: "Estatísticas dos revisores",
      onClick: () => navigate("/statisticsrevisor"),
    },
    {
      name: "Estatísticas de Alterações",
      onClick: () => navigate("/statisticschanges"),
    },
    {
      name: "Logout",
      onClick: () => navigate("/"),
    },
  ];

  return (
    <div>
      <HeaderComponent buttons={buttons} />
    </div>
  );
};

export default SelectorButton;
