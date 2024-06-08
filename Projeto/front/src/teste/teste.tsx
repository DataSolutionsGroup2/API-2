import { useContext } from 'react';
import { EditorContext } from '../contexts/EditorContext';

const Teste = () => {
  const context = useContext(EditorContext);

  if (!context) {
    return <div>Error: Context not found</div>;
  }

  const { data, error } = context;

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Apontamentos feitos pelo Revisor</h1>
      <table className='bg-black-400'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cidade</th>
            <th>Atribuição</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.cidade}</td>
              <td>{row.atribuicao}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teste;