import FaixaGestor from "../../components/Gestor/FaixaMenuGestor.tsx/FaixaGestor";
import City from "../../components/Gestor/Statistics/GraficCyt";
import { GraphicNumberPol } from "../../components/Gestor/Statistics/GraphicQuantityofGraphs";
import GestorPage from "../../components/Gestor/manager/GestorPage";

export default function PageGestor() {
  return (
    <div>
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
