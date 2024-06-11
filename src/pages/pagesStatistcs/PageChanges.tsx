import SelectorButton from "../../components/gestor/menuGestor/ButtonSelector";
import FaixaGestor from "../../components/gestor/menuGestor/FaixaGestor";
import ChartChange from "../../components/gestor/statistics/ChartChange";

export default function StatisticsChanges() {
  return (
    <div className="select-none">
      <FaixaGestor />
      <div className="flex ">
        <SelectorButton />
        <div className="flex justify-center items-center m-10 ">
          <ChartChange />
        </div>
      </div>
    </div>
  );
}
