import { useState } from "react";

export function WorkspaceDefinition() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue2, setSelectValue2] = useState("");

  const handleInsert = () => {
    console.log("Inserting:", inputValue, selectValue2);
  };

  return (
    <div className="flex min-w-[1000px] justify-around border-gray-400 border py-3 p-2 space-x-4 rounded-sm">
      <input
        className="border-gray-400 border py-3 px-4 rounded-sm"
        type="text"
        placeholder="Digite o ID"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <select
        className="border-gray-400 border py-3 px-4 rounded-sm"
        value={selectValue2}
        onChange={(e) => setSelectValue2(e.target.value)}
      >
        <option value="">Selecione a cidade</option>
        <option value="opcaoA">Atibaia</option>
        <option value="opcaoB">Cruzeiro</option>
        <option value="opcaoC">Taubaté</option>
      </select>
      <button
        onClick={handleInsert}
        className="py-3 px-6 rounded-sm text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-700"
      >
        Inserir
      </button>
    </div>
  );
}
