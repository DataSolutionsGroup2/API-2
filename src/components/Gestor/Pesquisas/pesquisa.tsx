import { DataGrid, GridFilterModel } from "@mui/x-data-grid";
import GestorPage from "../manager/GestorPage";
import { useEffect, useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "cidade",
    headerName: "Cidade",
    width: 150,
  },
  {
    field: "atribuicao",
    headerName: "Atribuição",
    width: 150,
  },
  { field: "status", headerName: "Status", width: 130 },
  { field: "validacao", headerName: "Validação", width: 150 },
  { field: "area_km2", headerName: "Área (km²)", width: 150 },
];

const PesquisaDataGrid = () => {
  const [rows, setRows] = useState([]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3100/Gradeatuacao");
        const data = await response.json();
        setRows(data);
      } catch (error) {
        console.error("Erro ao obter os dados:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterModelChange = (newModel: GridFilterModel) => {
    setFilterModel(newModel);
  };

  const handleAddFilter = () => {
    console.log("Add Filter clicked");
  };

  return (
    <div>
      <GestorPage />

      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginBottom: 10,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: 1200,
          }}
        ></div>
        <div style={{ width: "100%", maxWidth: 1200 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            filterModel={filterModel}
            onFilterModelChange={handleFilterModelChange}
            componentsProps={{
              toolbar: {
                filterButton: {
                  onClick: handleAddFilter,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PesquisaDataGrid;
