import FaixaGestor from "../../components/Gestor/menuGestor/FaixaGestor";
import City from "../../components/Gestor/Statistics/GraficCyt";
import { GraphicNumberPol } from "../../components/Gestor/Statistics/GraphicQuantityofGraphs";
import GestorPage from "../../components/Gestor/menuGestor/ButtonSelector";

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
