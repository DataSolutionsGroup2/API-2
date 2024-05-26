import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import GestorPage from "../../../components/manager/GestorPage";

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
  const [filteredRows, setFilteredRows] = useState([]);
  const [uniqueCities, setUniqueCities] = useState([]);
  const [uniqueAtribuicoes, setUniqueAtribuicoes] = useState([]);
  const [uniqueStatus, setUniqueStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3100/Gradeatuacao");
        const data = await response.json();
        setRows(data);
        setFilteredRows(data); // Inicialmente, os dados filtrados são os mesmos que os dados brutos

        // Obter valores únicos para cada coluna
        const uniqueCities = [...new Set(data.map((row) => row.cidade))];
        const uniqueAtribuicoes = [
          ...new Set(data.map((row) => row.atribuicao)),
        ];
        const uniqueStatus = [...new Set(data.map((row) => row.status))];
        setUniqueCities(uniqueCities);
        setUniqueAtribuicoes(uniqueAtribuicoes);
        setUniqueStatus(uniqueStatus);
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
            rows={filteredRows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            disableSelectionOnClick
            components={{
              Toolbar: GridToolbar,
            }}
            autoHeight
            localeText={{
              // Textos dos operadores de filtro
              filterOperatorEquals: "Igual a",
              filterOperatorNotEquals: "Diferente de",
              filterOperatorContains: "Contém",
              filterOperatorNotContains: "Não Contém",
              filterOperatorStartsWith: "Começa com",
              filterOperatorEndsWith: "Termina com",
              filterOperatorIs: "É",
              filterOperatorIsNot: "Não é",
              filterOperatorAfter: "Depois",
              filterOperatorOnOrAfter: "Em ou após",
              filterOperatorBefore: "Antes",
              filterOperatorOnOrBefore: "Em ou antes",
              filterOperatorIsEmpty: "Está vazio",
              filterOperatorIsNotEmpty: "Não está vazio",
              filterOperatorIsAnyOf: "É qualquer um de",
              // Textos dos filtros de coluna
              columnMenuLabel: "Menu da Coluna",
              columnMenuShowColumns: "Exibir Colunas",
              columnMenuFilter: "Filtrar",
              columnMenuHideColumn: "Esconder",
              columnMenuUnsort: "Desordenar",
              columnMenuSortAsc: "Ordenar Ascendente",
              columnMenuSortDesc: "Ordenar Descendente",
              // Textos de exportação
              densityComfortable: "Confortável",
              densityCompact: "Compacto",
              densityStandard: "Padrão",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PesquisaDataGrid;
