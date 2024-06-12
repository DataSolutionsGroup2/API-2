import { useState } from "react";
import axios from "axios";
import FaixaGestor from "../menuGestor/FaixaGestor";
import SelectorButton from "../menuGestor/ButtonSelector";
import UsersGrid from "./Users";

export default function CriacaoEdidorRevisorModal() {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState("");
  const [erro, setErro] = useState<string | undefined>("");
  const [sucesso, setSucesso] = useState(false);

  const criarUsuario = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:3001/createUser",
        {
          mail,
          password,
          profile,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      setEmail("");
      setPassword("");
      setProfile("");

      setSucesso(true);
      setErro(undefined);

      setTimeout(() => setSucesso(false), 3000);
    } catch (error: any) {
      console.error("Erro ao criar usuário:", error);

      if (error.response && error.response.data && error.response.data.error) {
        setErro(error.response.data.error);
      } else {
        setErro("Erro ao criar usuário.");
      }
      setSucesso(false);
    }
  };

  return (
    <div className="select-none">
      <FaixaGestor />
      <div className="flex mb-4">
        <SelectorButton />

        <div className="flex w-full  ml-[100px] mt-10 ">
          <UsersGrid />
          <div className="justify-around">
            <div className="w-full  border border-gray-300 rounded-sm h-auto p-4 justify-around  bg-gray-100 ">
              <header className="mb-2 bg-gradient-to-r from-blue-500 to-blue-800 rounded-sm py-4 text-white text-center">
                <h1 className="text-xl font-bold">Criar usuário</h1>
              </header>

              <div className="flex flex-col mb-2 justify-around">
                <label htmlFor="funcao" className="font-bold mb-1">
                  Função:
                </label>
                <select
                  id="funcao"
                  className="border border- border-gray-400 rounded-sm px-2 py-2"
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                >
                  <option value="" disabled>
                    Selecione uma função
                  </option>
                  <option value="user">User</option>
                  <option value="adm">Adm</option>
                </select>
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="email" className="font-bold mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={mail}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border- border-gray-400 rounded-sm px-2 py-2"
                />
              </div>
              <div className="flex flex-col mb-2">
                <label htmlFor="senha" className="font-bold mb-1">
                  Senha:
                </label>
                <input
                  type="password"
                  id="senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border- border-gray-400 rounded-sm px-2 py-2"
                />
              </div>

              <button
                type="button"
                onClick={criarUsuario}
                className="mt-3 w-full bg-green-600 text-white font-bold py-2 rounded-sm hover:bg-green-700 transition-colors"
              >
                Criar
              </button>

              {sucesso && (
                <div className="bg-green-500 text-center text-white rounded mt-2 p-2">
                  Usuário criado com sucesso!
                </div>
              )}
              {erro && (
                <div className="text-blue-600 text-center mt-2">{erro}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
