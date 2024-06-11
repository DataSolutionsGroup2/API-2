import { useState, useEffect } from "react";

interface Props {
  onInsert: () => void;
}

export function WorkspaceDefinitionRevisor({ onInsert }: Props) {
  const [idValue, setIdValue] = useState<number | undefined>(undefined);
  const [selectValue2, setSelectValue2] = useState("");
  const [analistaValue, setAnalistaValue] = useState("");
  const [message, setMessage] = useState<string>("");

  const handleInsert = async () => {
    const confirmInsert = window.confirm("Deseja realmente fazer a inserção?");
    if (!confirmInsert) return;

    const url = "http://localhost:3001/insertValidacaoRevisor";
    const data = {
      id: idValue,
      cidade: selectValue2,
      validacao: analistaValue,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        setMessage("Inserção realizada com sucesso!");
        onInsert();
      } else {
        setMessage(
          responseData.error ||
            "O id não pertence a essa cidade, verifique por favor!"
        );
      }
    } catch (error: unknown) {
      console.error("Erro ao fazer a requisição:", error);
      setMessage("Erro ao inserir ou atualizar atribuição.");
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="flex min-w-[1000px] justify-around border-gray-400 border py-3 p-2 space-x-4 rounded-sm">
      <input
        className="border-gray-400 border py-3 px-4 rounded-sm"
        type="number"
        placeholder="Digite o ID"
        value={idValue !== undefined ? idValue : ""}
        onChange={(e) => setIdValue(Number(e.target.value))}
      />

      <select
        className="border-gray-400 border py-3 px-4 rounded-sm"
        value={selectValue2}
        onChange={(e) => setSelectValue2(e.target.value)}
      >
        <option value="">Selecione a cidade</option>
        <option value="Atibaia">Atibaia</option>
        <option value="Cruzeiro">Cruzeiro</option>
        <option value="Taubaté">Taubaté</option>
      </select>
      <input
        className="border-gray-400 border py-3 px-4 rounded-sm"
        type="text"
        placeholder="Digite o analista"
        value={analistaValue}
        onChange={(e) => setAnalistaValue(e.target.value)}
      />

      <button
        onClick={handleInsert}
        className="py-3 px-6 rounded-sm text-white bg-gradient-to-r from-blue-400 to-blue-800 hover:from-blue-600 hover:to-blue-900"
      >
        Inserir
      </button>

      {message && <p className="text-blue-500 text-sm">{message}</p>}
    </div>
  );
}
