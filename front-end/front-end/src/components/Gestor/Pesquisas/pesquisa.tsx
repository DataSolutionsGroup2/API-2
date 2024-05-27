import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import GestorPage from "../manager/GestorPage";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "cidade", headerName: "Cidade", width: 150 },
  { field: "atribuicao", headerName: "Atribuição", width: 150 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "validacao", headerName: "Validação", width: 150 },
  { field: "area_km2", headerName: "Área (km²)", width: 150 },
];

const PesquisaDataGrid = () => {
  const [rows, setRows] = useState([]);

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
            checkboxSelection
            disableRowSelectionOnClick
            components={{
              Toolbar: GridToolbar,
            }}
            autoHeight
            initialState={{
              pagination: {
                paginationModel: { pageSize: 5, page: 0 },
              },
            }}
            localeText={{
              filterOperatorEquals: "Igual a",
              filterOperatorContains: "Contém",
              filterOperatorStartsWith: "Começa com",
              filterOperatorEndsWith: "Termina com",
              filterOperatorIsEmpty: "Está vazio",
              filterOperatorIsNotEmpty: "Não está vazio",
              columnMenuLabel: "Menu da Coluna",
              columnMenuShowColumns: "Exibir Colunas",
              columnMenuFilter: "Filtrar",
              columnMenuHideColumn: "Esconder",
              columnMenuUnsort: "Desordenar",
              columnMenuSortAsc: "Ordenar Ascendente",
              columnMenuSortDesc: "Ordenar Descendente",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PesquisaDataGrid;
