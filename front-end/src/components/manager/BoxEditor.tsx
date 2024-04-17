import { useState } from "react";

export default function BoxEditor() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded p-4">
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="bg-gray-200 px-3 py-2 rounded"
      >
        {open ? "Fechar Lista" : "Abrir Lista"}
      </button>
      {open && <div className="mt-4"></div>}
    </div>
  );
}
