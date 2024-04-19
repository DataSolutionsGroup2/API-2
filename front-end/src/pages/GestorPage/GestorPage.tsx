import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HeaderComponent from "../../components/HeaderComponent";
import CriacaoEdidorRevisorModal from "../../components/CriacaoEditorRevisorModal";
import { Graphic } from "../../components/manager/Statistics/Graphic";

interface userInterface {
  name: string;
  password: string;
  email: string;
  role: string;
}

const GestorPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const [userData, setUserData] = useState<userInterface[]>([]);

  const navigate = useNavigate();

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleButton = () => {
    navigate("/relatorios");
  };

  const handleSaveUser = (data: userInterface) => {
    setUserData((prevData) => [...prevData, data]);
    console.log(userData);
  };

  const buttons = [
    {
      name: "Criar Revisor/Editor",
      onClick: handleModal,
    },
    {
      name: "Pesquisar",
      onClick: handleButton,
    },
  ];

  return (
    <div>
      <HeaderComponent buttons={buttons} />
      {openModal && (
        <div style={{ marginBottom: "20px" }}>
          <CriacaoEdidorRevisorModal
            onClose={handleModal}
            onSave={handleSaveUser}
          />
        </div>
      )}

      {userData && (
        <div style={{ marginTop: "40px" }}>
          {userData.map((user, index) => (
            <div key={index}>
              <span>{user.name}</span>
              <br />
              <span>{user.email}</span>
              <br />
              <span>{user.role}</span>
              <br />
            </div>
          ))}
          <Graphic />
        </div>
      )}
    </div>
  );
};

export default GestorPage;
