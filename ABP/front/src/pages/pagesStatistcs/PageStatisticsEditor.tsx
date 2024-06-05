import SelectorButton from "../../components/Gestor/menuGestor/ButtonSelector";
import FaixaGestor from "../../components/Gestor/menuGestor/FaixaGestor";
import GraficEditor from "../../components/Gestor/Statistics/GraficEditor";

export default function PageStatisticscEditor() {
  return (
    <div>
      <FaixaGestor />
      <div className="flex mb-4">
        <SelectorButton />
        <GraficEditor />
      </div>
    </div>
  );
}
