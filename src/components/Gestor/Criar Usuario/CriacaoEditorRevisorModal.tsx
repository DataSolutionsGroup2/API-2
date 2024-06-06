import { useState } from "react";
import axios from "axios";
import FaixaGestor from "../menuGestor/FaixaGestor";
import SelectorButton from "../menuGestor/ButtonSelector";

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
      setErro("");

      setTimeout(() => setSucesso(false), 3000);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      setErro("Erro ao criar usuário.");
      setSucesso(false);
    }
  };

  return (
    <div className="select-none">
      <FaixaGestor />
      <div className="flex mb-4">
        <SelectorButton />
        <div className="flex  w-full  ml-[350px] mt-4">
          <div className="w-full max-w-md border-2 border-blue-800 rounded-lg h-auto p-4 bg-white">
            <header className="mb-2 bg-gradient-to-r from-blue-500 to-blue-800 rounded-lg  py-4 text-white text-center">
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
                className="border-2 border-blue-600 rounded-lg px-2 py-2"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="funcao" className="font-bold mb-1">
                Função:
              </label>
              <select
                id="funcao"
                className="border-2 border- border-blue-600 rounded-lg px-2 py-2"
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
                className="border-2 border- border-blue-600 rounded-lg px-2 py-2"
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
                className="border-2 border- border-blue-600 rounded-lg px-2 py-2"
              />
            </div>
            <button
              type="button"
              onClick={criarUsuario}
              className="mt-3 w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Criar
            </button>
            {sucesso && (
              <div className="bg-green-500 text-center text-white rounded mt-2 p-2">
                Usuário criado com sucesso!
              </div>
            )}
            {erro && (
              <div className="text-red-600 text-center mt-2">{erro}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
