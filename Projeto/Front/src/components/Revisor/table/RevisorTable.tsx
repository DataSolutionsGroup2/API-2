import React, { useContext, useState } from 'react';
import { RevisorContext } from '../../../contexts/RevisorContext';

const RevisorTable: React.FC = () => {
    const context = useContext(RevisorContext);

    if (!context) {
        return <div>Error: Context not found</div>;
    }

    const { data, error } = context;

    if (error) {
        return <div>Error: {error}</div>;
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        cidade: '',
        atribuicao: '',
        status: '',
        finalizados: '',
        areaTotal: ''
    });

    const itemsPerPage = 7;
    const filteredData = data.filter(item =>
        (filters.cidade ? item.cidade.toLowerCase().includes(filters.cidade.toLowerCase()) : true) &&
        (filters.atribuicao ? item.atribuicao.toLowerCase().includes(filters.atribuicao.toLowerCase()) : true) &&
        (filters.status ? item.status.toLowerCase().includes(filters.status.toLowerCase()) : true) &&
        (filters.finalizados ? item.count.toLowerCase().includes(filters.finalizados.toLowerCase()) : true) &&
        (filters.areaTotal ? item.sum.toString().includes(filters.areaTotal) : true)
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
                            <th className="border border-gray-300 p-2">Cidade</th>
                            <th className="border border-gray-300 p-2">Analista</th>
                            <th className="border border-gray-300 p-2">Status</th>
                            <th className="border border-gray-300 p-2">Areas Finalizadas</th>
                            <th className="border border-gray-300 p-2">Area Total Finalizada</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((row, index) => (
                            <tr key={index} className="border-b border-gray-300 text-center">
                                <td className="border border-gray-300 px-4 py-2">{row.cidade}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.atribuicao}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.status}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.count}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.sum}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-2 border border-gray-300 bg-gray-200 disabled:opacity-50 rounded"
                    >
                        Anterior
                    </button>
                    <span className="px-4 py-2 mx-2">Página {currentPage} de {totalPages}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-2 border border-gray-300 bg-gray-200 disabled:opacity-50 rounded"
                    >
                        Próxima
                    </button>
                </div>
            </div>
        </>
        );
    };
export default RevisorTable;
