import GestorPage from "../../GestorPage/GestorPage";

export default function CriacaoEdidorRevisorModal() {
  return (
    <div>
      <GestorPage />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-full max-w-md border-2 border-[#ca5f42] rounded-lg h-auto p-4 bg-white">
          <header className="mb-2 bg-gradient-to-r rounded-lg from-orange-700 to-orange-900 py-4 text-white text-center">
            <h1 className="text-xl font-bold ">Criação de Editor/Revisor</h1>
          </header>
          <div className="flex flex-col mb-2">
            <label htmlFor="usuario" className="font-bold mb-1">
              Usuário:
            </label>
            <input
              type="text"
              id="usuario"
              value={""}
              onChange={(e) => e.target.value}
              className="border-2 border-[#ca5f42] rounded-lg px-2 py-2"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="funcao" className="font-bold mb-1">
              Função:
            </label>
            <select
              id="funcao"
              className="border-2 border-[#ca5f42] rounded-lg px-2 py-2"
              defaultValue=""
              onChange={(e) => e.target.value}
            >
              <option value="" disabled>
                Selecione uma função
              </option>
              <option value="gestor">Gestor</option>
              <option value="editor">Editor</option>
              <option value="revisor">Revisor</option>
            </select>
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="senha" className="font-bold mb-1">
              Senha:
            </label>
            <input
              type="password"
              id="senha"
              value={""}
              onChange={(e) => e.target.value}
              className="border-2 border-[#ca5f42] rounded-lg px-2 py-2"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="email" className="font-bold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={""}
              onChange={(e) => e.target.value}
              className="border-2 border-[#ca5f42] rounded-lg px-2 py-2"
            />
          </div>
          <button
            type="button"
            className="mt-3 w-full bg-[#ca5f42] text-white font-bold py-2 rounded-lg hover:bg-[#a94b35] transition-colors"
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
}
