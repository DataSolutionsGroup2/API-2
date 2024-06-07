import SelectorButton from "../../components/gestor/menuGestor/ButtonSelector";
import FaixaGestor from "../../components/gestor/menuGestor/FaixaGestor";
import GraficRevisor from "../../components/gestor/statistics/GraficRevisor";

export default function PagestatisticsRevisor() {
  return (
    <div>
      <FaixaGestor />
      <div className="flex mb-4">
        <SelectorButton />
        <GraficRevisor />
      </div>
    </div>
  );
}
