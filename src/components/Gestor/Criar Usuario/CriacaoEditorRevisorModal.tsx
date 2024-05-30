import { useState } from "react";
import axios from "axios";
import GestorPage from "../manager/GestorPage";
import FaixaGestor from "../FaixaMenuGestor.tsx/FaixaGestor";

export default function CriacaoEdidorRevisorModal() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [funcao, setFuncao] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const criarUsuario = async () => {
    try {
      const response = await axios.post("http://localhost:3100/usuarios", {
        nome,
        email,
        senha,
        funcao,
      });
      console.log(response.data);

      setNome("");
      setEmail("");
      setSenha("");
      setFuncao("");

      setSucesso(true);

      setTimeout(() => setSucesso(false), 3000);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      setErro("Erro ao criar usuário.");
    }
  };

  return (
    <div>
      <FaixaGestor />
      <div className="flex mb-4">
        <GestorPage />

        <div className="flex w-full  ml-[350px] mt-4">
          <div className="w-full max-w-md border-2 border-[#ca5f42] rounded-lg h-auto p-4 bg-white">
            <header className="mb-2 bg-gradient-to-r from-blue-500 to-orange-700 rounded-lg  py-4 text-white text-center">
              <h1 className="text-xl font-bold ">Criar usuário</h1>
            </header>
            <div className="flex flex-col mb-2">
              <label htmlFor="usuario" className="font-bold mb-1">
                Usuário:
              </label>
              <input
                type="text"
                id="usuario"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
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
                value={funcao}
                onChange={(e) => setFuncao(e.target.value)}
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
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-[#ca5f42] rounded-lg px-2 py-2"
              />
            </div>
            <button
              type="button"
              onClick={criarUsuario}
              className="mt-3 w-full bg-[#ca5f42] text-white font-bold py-2 rounded-lg hover:bg-[#355ea9] transition-colors"
            >
              Criar
            </button>
          </div>

          {sucesso && (
            <div className="bg-green-500 text-white rounded">
              Usuário criado com sucesso!
            </div>
          )}
          {erro && <div className="text-red-600">{erro}</div>}
        </div>
      </div>
    </div>
  );
}
