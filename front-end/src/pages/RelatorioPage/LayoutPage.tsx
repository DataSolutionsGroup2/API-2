import { useCallback, useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import SelectRegion from "../../components/manager/SelectRegion";

import { useNavigate } from "react-router-dom";
import { MockedRegion } from "../../utils/mockedData/regionMocked";
import { userMocked } from "../../utils/mockedData/userMocked";

interface regionInterface {
  id: string;
  atribuicao: string;
  status: string;
  validacao: string;
  status_val: string;
  area_km2: number;
}

const LayoutPage = () => {
  const [regionData, setRegionData] = useState<regionInterface[]>();

  useEffect(() => {
    console.log("Estado mudou: ", regionData);
  }, [regionData]);

  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/pagegestor");
  };

  const buttons = [
    {
      name: "Home",
      onClick: handleButton,
    },
  ];

  const handleRegionData = useCallback((regionName: string) => {
    if (regionName) {
      MockedRegion.regiao.map((item) => {
        if (item.name === regionName) {
          setRegionData(item.data);
        }
      });
    } else {
      setRegionData([]);
    }
  }, []);

  return (
    <div>
      <HeaderComponent buttons={buttons} />
      <div className="flex justify-around">
        {/*<SelectRegion onRegionChange={handleRegionData}/>*/}
        <SelectRegion onRegionChange={handleRegionData} options={userMocked} />
      </div>

      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gradient-to-r from-orange-500 to-orange-700 text-white text-lg">
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Atribuição</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Validação</th>
              <th className="py-2 px-4">Status de Validação</th>
              <th className="py-2 px-4">Área (km²)</th>
            </tr>
          </thead>
          <tbody>
            {regionData &&
              regionData?.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  }`}
                >
                  <td className="py-2 px-4 text-center flex-wrap">{item.id}</td>
                  <td className="py-2 px-4 text-center flex-wrap">
                    {item.atribuicao}
                  </td>
                  <td className="py-2 px-4 text-center flex-wrap">
                    {item.status}
                  </td>
                  <td className="py-2 px-4 text-center flex-wrap">
                    {item.validacao}
                  </td>
                  <td className="py-2 px-4 text-center flex-wrap">
                    {item.status_val}
                  </td>
                  <td className="py-2 px-4 text-center flex-wrap">
                    {item.area_km2}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LayoutPage;
