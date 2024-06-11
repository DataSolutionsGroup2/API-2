import SelectorButton from "../../components/gestor/menuGestor/ButtonSelector";
import FaixaGestor from "../../components/gestor/menuGestor/FaixaGestor";
import GraficEditor from "../../components/gestor/statistics/GraficEditor";

export default function PageStatisticscEditor() {
  return (
    <div className="select-none">
      <FaixaGestor />
      <div className="flex mb-4">
        <SelectorButton />
        <GraficEditor />
      </div>
    </div>
  );
}
