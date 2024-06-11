import SelectorButton from "../../components/gestor/menuGestor/ButtonSelector";
import FaixaGestor from "../../components/gestor/menuGestor/FaixaGestor";
import ChartChange from "../../components/gestor/statistics/ChartChange";

export default function StatisticsChanges() {
  return (
    <div className="select-none">
      <FaixaGestor />
      <div className="flex justify-between">
        <SelectorButton />
        <div className="mt-8 mr-6">
          <ChartChange />
        </div>
      </div>
    </div>
  );
}
