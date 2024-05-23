import GestorPage from "../../components/manager/GestorPage";

export default function Pesquisa() {
  return (
    <div>
      <GestorPage />
      <div className="w-full p-4 h-auto flex flex-wrap md:flex-nowrap mb-2 justify-between py-4">
        <div className="mb-2 p-4 w-full md:w-1/3">
          <div className="text-left border-2 border-[#ca5f42] py-4 p-2 rounded-lg">
            <h1 className="text-center font-bold">Editor</h1>
            <div className="mb-4">
              <label htmlFor="pesquisaH1" className="block font-bold">
                Nome:
              </label>
              <input
                type="text"
                id="pesquisaH1"
                className="border-2 border-[#ca5f42] rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="selecaoCidadeEditor" className="block font-bold">
                Cidade:
              </label>
              <select
                id="selecaoCidadeEditor"
                className="border-2 border-[#ca5f42] rounded-lg w-full"
              >
                <option value="Cruzeiro">Cruzeiro</option>
                <option value="Taubaté">Taubaté</option>
                <option value="Atibaia">Atibaia</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="areaEditor" className="block font-bold">
                Área Finalizada:
              </label>
              <input
                type="text"
                id="areaEditor"
                className="border-2 border-[#ca5f42] rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        <div className="mb-2 p-4 w-full md:w-1/3">
          <div className="text-left border-2 border-[#ca5f42] py-4 p-2 rounded-lg">
            <h1 className="text-center font-bold">Revisor</h1>
            <div className="mb-4">
              <label htmlFor="pesquisaH2" className="block font-bold">
                Nome:
              </label>
              <input
                type="text"
                id="pesquisaH2"
                className="border-2 border-[#ca5f42] rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="selecaoCidadeRevisor" className="block font-bold">
                Cidade:
              </label>
              <select
                id="selecaoCidadeRevisor"
                className="border-2 border-[#ca5f42] rounded-lg w-full"
              >
                <option value="Cruzeiro">Cruzeiro</option>
                <option value="Taubaté">Taubaté</option>
                <option value="Atibaia">Atibaia</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="areaRevisor" className="block font-bold">
                Área Finalizada:
              </label>
              <input
                type="text"
                id="areaRevisor"
                className="border-2 border-[#ca5f42] rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        <div className="mb-2 p-4 w-full md:w-1/3">
          <div className="text-left border-2 border-[#ca5f42] py-4 p-2 rounded-lg">
            <h1 className="text-center font-bold">Cidade</h1>
            <div className="mb-4">
              <label htmlFor="selecaoCidadeCidade" className="block font-bold">
                Nome:
              </label>
              <select
                id="selecaoCidadeCidade"
                className="border-2 border-[#ca5f42] rounded-lg w-full"
              >
                <option value="Cruzeiro">Cruzeiro</option>
                <option value="Taubaté">Taubaté</option>
                <option value="Atibaia">Atibaia</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="areaCidade" className="block font-bold">
                Área Total:
              </label>
              <input
                type="text"
                id="areaCidade"
                className="border-2 border-[#ca5f42] rounded-lg w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="areaFinalizadaCidade" className="block font-bold">
                Área Total Finalizada:
              </label>
              <input
                type="text"
                id="areaFinalizadaCidade"
                className="border-2 border-[#ca5f42] rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
