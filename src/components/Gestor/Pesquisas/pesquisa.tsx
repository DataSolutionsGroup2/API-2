import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect, useState } from "react";
import GestorPage from "../manager/GestorPage";
import { ColDef } from "ag-grid-community";
import { WorkspaceDefinition } from "./workspaceDefinition";
import FaixaGestor from "../FaixaMenuGestor.tsx/FaixaGestor";

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
      floatingFilter: true,
    },
    {
      field: "cidade",
      headerName: "Cidade",
      width: 150,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    {
      field: "atribuicao",
      headerName: "Atribuição",
      width: 150,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    {
      field: "status_val",
      headerName: "Status_val",
      width: 130,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    {
      field: "validacao",
      headerName: "Validação",
      width: 150,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    {
      field: "area_km2",
      headerName: "Área (km²)",
      width: 150,
      filter: "agNumberColumnFilter",
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

    notblank: "Não está vazio",
  };

  return (
    <div>
      <FaixaGestor />
      <div className="flex mb-4">
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
            className="ag-theme-alpine ml-20"
            style={{ height: 450, width: "100%", maxWidth: 1000 }}
          >
            <div className="text-[20px] font-bold p-2 ">
              <h1>Area de trabalho dos analistas</h1>
            </div>

            <AgGridReact
              rowData={rowData}
              pagination={true}
              columnDefs={columnDefs}
              defaultColDef={{ flex: 1 }}
              localeText={localizedTexts}
            ></AgGridReact>
          </div>
          <div className="text-[15px] mt-[40px] p-2 font-bold ml-20">
            <h1>Escolha a área para o analista</h1>
            <WorkspaceDefinition />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PesquisaDataGrid;
