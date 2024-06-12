import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect, useState } from "react";

const UsersGrid = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3001/Listusers", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRowData(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  const columnDefs: ColDef[] = [
    {
      field: "id",
      headerName: "ID",
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "mail",
      headerName: "E-mail",
      sortable: true,
      filter: true,
      floatingFilter: true,
    },

    {
      field: "profile",
      headerName: "Profile",
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 439, width: 600 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default UsersGrid;
