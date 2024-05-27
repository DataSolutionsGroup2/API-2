import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect, useState } from "react";
import GestorPage from "../manager/GestorPage";
import { ColDef } from "ag-grid-community";

const PesquisaDataGrid = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3100/Gradeatuacao");
        const data = await response.json();
        setRowData(data);
      } catch (error) {
        console.error("Erro ao obter os dados:", error);
      }
    };

    fetchData();
  }, []);

  const columnDefs: ColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      filter: "agNumberColumnFilter",
      floatingFilter: true, // Adiciona filtro flutuante
    },
    {
      field: "cidade",
      headerName: "Cidade",
      width: 150,
      filter: "agTextColumnFilter",
      floatingFilter: true, // Adiciona filtro flutuante
    },
    {
      field: "atribuicao",
      headerName: "Atribuição",
      width: 150,
      filter: "agTextColumnFilter",
      floatingFilter: true, // Adiciona filtro flutuante
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      filter: "agTextColumnFilter",
      floatingFilter: true, // Adiciona filtro flutuante
    },
    {
      field: "validacao",
      headerName: "Validação",
      width: 150,
      filter: "agTextColumnFilter",
      floatingFilter: true, // Adiciona filtro flutuante
    },
    {
      field: "area_km2",
      headerName: "Área (km²)",
      width: 150,
      filter: "agNumberColumnFilter",
      floatingFilter: true, // Adiciona filtro flutuante
    },
  ];

  const localizedTexts = {
    filterOoo: "Filtrar...",
    equals: "Igual a",
    notEqual: "Diferente de",
    startsWith: "Começa com",
    endsWith: "Termina com",
    contains: "Contém",
    notContains: "Não contém",
    filter: "Filtro",
    applyFilter: "Aplicar Filtro",
    clearFilter: "Limpar Filtro",
    resetFilter: "Redefinir Filtro",
    blank: "Em branco",
    // Usando "Não está vazio" para traduzir "não em branco"
    notblank: "Não está vazio",
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
        <div
          className="ag-theme-alpine"
          style={{ height: 400, width: "100%", maxWidth: 1200 }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{ flex: 1 }}
            localeText={localizedTexts}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default PesquisaDataGrid;
