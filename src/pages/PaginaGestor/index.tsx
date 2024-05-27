import { Graphic } from "../../components/Gestor/Statistics/Graphic";
import GestorPage from "../../components/Gestor/manager/GestorPage";

export default function PageGestor() {
  return (
    <div>
      <GestorPage />
      <div className="mt-5">
        <Graphic />
      </div>
    </div>
  );
}
