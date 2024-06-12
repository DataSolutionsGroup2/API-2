import SelectorButton from "../../components/Gestor/menuGestor/ButtonSelector";
import FaixaGestor from "../../components/Gestor/menuGestor/FaixaGestor";
import ChartChange from "../../components/Gestor/Statistics/ChartChange";


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
