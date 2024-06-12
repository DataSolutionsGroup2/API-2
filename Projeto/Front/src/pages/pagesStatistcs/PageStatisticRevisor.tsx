import SelectorButton from "../../components/Gestor/menuGestor/ButtonSelector";
import FaixaGestor from "../../components/Gestor/menuGestor/FaixaGestor";
import GraficRevisor from "../../components/Gestor/Statistics/GraficRevisor";



export default function PagestatisticsRevisor() {
  return (
    <div className="select-none">
      <FaixaGestor />
      <div className="flex mb-4">
        <SelectorButton />
        <GraficRevisor />
      </div>
    </div>
  );
}
