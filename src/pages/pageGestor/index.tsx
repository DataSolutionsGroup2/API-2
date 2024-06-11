import FaixaGestor from "../../components/gestor/menuGestor/FaixaGestor";
import City from "../../components/gestor/statistics/GraficCyt";
import { GraphicNumberPol } from "../../components/gestor/statistics/GraphicQuantityofGraphs";
import GestorPage from "../../components/gestor/menuGestor/ButtonSelector";

export default function PageGestor() {
  return (
    <div className="select-none">
      <FaixaGestor />
      <div className="flex">
        <GestorPage />
        <div className=" flex mt-[50px] p-2 py-3">
          <GraphicNumberPol />
          <City />
        </div>
      </div>
    </div>
  );
}
