import FaixaGestor from "../../components/Gestor/FaixaMenuGestor.tsx/FaixaGestor";
import { Graphic } from "../../components/Gestor/Statistics/Graphic";
import GestorPage from "../../components/Gestor/manager/GestorPage";

export default function PageGestor() {
  return (
    <div>
      <FaixaGestor />
      <div className="flex ">
        <GestorPage />
        <div className="ml-5 mt-6">
          <Graphic />
        </div>
      </div>
    </div>
  );
}
