import React, { useContext, useState } from 'react';
import { EditorContext } from '../../../contexts/EditorContext';

const EditorTable: React.FC = () => {
  const context = useContext(EditorContext);

  if (!context) {
    return <div>Error: Context not found</div>;
  }

  const { data, error } = context;

  if (error) {
    return <div>Error: {error}</div>;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    id: '',
    cidade: '',
    analista: '',
    status: ''
  });

  const itemsPerPage = 7;
  const filteredData = data.filter(item =>
    (filters.id ? item.id.toString().includes(filters.id) : true) &&
    (filters.cidade ? item.cidade.toLowerCase().includes(filters.cidade.toLowerCase()) : true) &&
    (filters.analista ? item.atribuicao.toLowerCase().includes(filters.analista.toLowerCase()) : true) &&
    (filters.status ? item.status.toLowerCase().includes(filters.status.toLowerCase()) : true)
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center p-4">

        <p className="text-center">Total de Itens: {totalItems}</p>

        <table className="w-6/12 mt-4 border-collapse max-w-full">
          <thead >
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Cidade</th>
              <th className="border border-gray-300 p-2">Atribuição</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 ">
                <input
                  type="text"
                  name="id"
                  value={filters.id}
                  onChange={handleFilterChange}
                  className="border border-gray-300 text-center h-6 rounded-md w-32 p-2"
                />
              </th>

              <th className="border border-gray-300">
                <input
                  type="text"
                  name="cidade"
                  value={filters.cidade}
                  onChange={handleFilterChange}
                  className="border border-gray-300 text-center h-6 rounded-md w-32 p-2"
                />
              </th>

              <th className="border border-gray-300 ">
                <input
                  type="text"
                  name="analista"
                  value={filters.analista}
                  onChange={handleFilterChange}
                  className="border border-gray-300 text-center h-6 rounded-md w-32 p-2"
                />
              </th>

              <th className="border border-gray-300 p-2">
                <input
                  type="text"
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="border border-gray-300 text-center h-6 rounded-md w-32"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((row, index) => (
              <tr key={index} className="border-b border-gray-300 text-center">
                <td className="border border-gray-300 px-4 py-2">{row.id}</td>
                <td className="border border-gray-300 px-4 py-2">{row.cidade}</td>
                <td className="border border-gray-300 px-4 py-2">{row.atribuicao}</td>
                <td className="border border-gray-300 px-4 py-2">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 border border-gray-300 bg-gray-200 disabled:opacity-50"
          >
            Anterior
          </button>
          <span className="px-4 py-2 mx-2">Página {currentPage} de {totalPages}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 border border-gray-300 bg-gray-200 disabled:opacity-50"
          >
            Próxima
          </button>
        </div>
      </div>
    </>
  );
};

export default EditorTable;
