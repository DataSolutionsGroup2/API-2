import FaixaGestor from "../FaixaMenuGestor.tsx/FaixaGestor";
import GraficRevisor from "../Statistics/GraficRevisor";
import GestorPage from "../manager/GestorPage";

export default function PagestatisticsRevisor() {
  return (
    <div>
      <FaixaGestor />
      <div className="flex mb-4">
        <GestorPage />
        <GraficRevisor />
      </div>
    </div>
  );
}
