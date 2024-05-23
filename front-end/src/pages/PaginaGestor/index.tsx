import { Graphic } from "../../components/manager/Statistics/Graphic";
import GestorPage from "../../components/manager/GestorPage";

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
