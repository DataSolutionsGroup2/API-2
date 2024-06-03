import FaixaGestor from "../FaixaMenuGestor.tsx/FaixaGestor";
import GraficEditor from "../Statistics/GraficEditor";
import GestorPage from "../manager/GestorPage";

export default function StatisticsEditor() {
  return (
    <div>
      <FaixaGestor />
      <div className="flex mb-4">
        <GestorPage />
        <GraficEditor />
      </div>
    </div>
  );
}
