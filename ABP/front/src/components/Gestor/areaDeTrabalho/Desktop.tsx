import { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

import { ColDef } from "ag-grid-community";
import FaixaGestor from "../menuGestor/FaixaGestor";
import SelectorButton from "../menuGestor/ButtonSelector";
import { WorkspaceDefinition } from "./workspaceDefinitionEditor";

const AreaDeTrabalho = () => {
  const [rowData, setRowData] = useState([]);
  const [dataUpdated, setDataUpdated] = useState(false);
  const gridRef = useRef(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3100/Gradeatuacao");
      const data = await response.json();
      setRowData(data);
    } catch (error) {
      console.error("Erro ao obter os dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (dataUpdated) {
      fetchData();
      setDataUpdated(false);
    }
  }, [dataUpdated]);

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
      field: "validacao",
      headerName: "Validação",
      width: 150,
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

  const exportToPDF = () => {
    const doc = new jsPDF();
    const filteredData = gridRef.current.api
      .getModel()
      .rowsToDisplay.map((rowNode) => rowNode.data);
    const tableColumn = columnDefs.map((colDef) => colDef.headerName);
    const tableRows = filteredData.map((data) =>
      columnDefs.map((colDef) => data[colDef.field])
    );

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("filtered_data.pdf");
  };

  return (
    <div>
      <FaixaGestor />
      <div className="flex mb-4">
        <SelectorButton />
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
          <button
            className="p-4 rounded-sm border-blue-900 font-bold justify-end ml-[900px] text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-blue-600 hover:to-blue-900"
            onClick={exportToPDF}
          >
            Exportar para PDF
          </button>
          <div
            className="ag-theme-alpine ml-20"
            style={{ height: 400, width: "100%", maxWidth: 1000 }}
          >
            <div className="text-[20px] font-bold p-2 ">
              <h1>Area de trabalho dos analistas</h1>
            </div>
            <AgGridReact
              ref={gridRef}
              rowData={rowData}
              pagination={true}
              columnDefs={columnDefs}
              defaultColDef={{ flex: 1 }}
              localeText={localizedTexts}
            ></AgGridReact>
          </div>
          <div className="text-[15px] mt-[40px] p-2 font-bold ml-20">
            <h1>Escolha a área para o Editor</h1>
            <WorkspaceDefinition onInsert={() => setDataUpdated(true)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaDeTrabalho;
