import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(""); // Estado para mensagem de erro
  const navigate = useNavigate();

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter" && buttonRef.current) {
      buttonRef.current.click();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const handleLogin = async () => {
    setError(""); // Limpar mensagem de erro antes de tentar login

    if (!usuario || !senha) {
      setError("Usuário e senha são obrigatórios");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/login", {
        mail: usuario,
        password: senha,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        navigate("/pagegestor");
      } else {
        setError("Erro ao Logar");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Usuário ou senha incorretos");
      } else {
        setError("Erro ao Logar");
      }
    }
  };

  return (
    <div className="h-screen bg-visionai flex justify-center items-center italic">
      <div className="flex h-screen items-center">
        <div className="flex flex-col">
          <div
            id="esquerda"
            className="rounded-l-3xl border-solid border-2 bg-white h-96 w-96 flex flex-col items-center shadow-2xl shadow-visiona"
          >
            <div className="text-2xl bg-white mt-8 font-bold">Olá!</div>
            <div className="bg-white">Entre com a sua conta</div>
            <label htmlFor="i1" className="pt-3 bg-white pr-56 font-medium">
              Usuario
            </label>
            <input
              className="rounded-2xl bg-white p-1 w-72 border-solid
                            border-visiona border-2 hover:p-1.5 hover:w-80 transition-all"
              type="text"
              id="i1"
              placeholder="Entre com o seu usuário"
              value={usuario}
              onChange={handleUserChange}
            />
            <label htmlFor="i2" className="pt-7 bg-white pr-60 font-medium">
              Senha
            </label>
            <input
              className="rounded-2xl bg-white p-1 w-72 border-solid 
                            border-visiona border-2 hover:p-1.5 hover:w-80 transition-all"
              type="password"
              id="i2"
              placeholder="Entre com o sua senha"
              value={senha}
              onChange={handlePasswordChange}
            />
            <div className="flex flex-row mt-4">
              <input type="checkbox" id="c1" />
              <label htmlFor="c1" className="text-xs pl-1 text-black">
                Lembrar de mim.
              </label>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}{" "}
            {/* Mostrar mensagem de erro */}
            <div>
              <button
                className="border-solid border-visiona border-2 rounded-lg
                                bg-visiona w-32 p-1 mt-4 hover:bg-white hover:text-visiona 
                                hover:p-1.5 hover:w-36 transition-all text-white text-bold "
                onClick={handleLogin}
                ref={buttonRef}
                id="Login"
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div
          id="direita"
          className="flex flex-col gap-4 justify-center items-center bg-visionai2 h-96 w-80 rounded-r-3xl shadow-2xl shadow-visiona "
        >
          <div
            id="texto"
            className="flex flex-col justify-center items-center gap-4"
          ></div>
        </div>
      </div>
    </div>
  );
}
