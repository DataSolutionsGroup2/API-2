import SelectList from "./SelectList";
import SelectRegion from "./SelectRegion";

const LayoutPage = () => {
  return (
    <div className="relative h-screen">
      <header className="h-20 flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-700 text-white text-center text-4xl font-bold shadow-md">
        Gestor - Relatórios
      </header>
      <div className="absolute  left-1/4 ">
        <div className="w-1/2">
          <SelectRegion />
        </div>
      </div>
      <div className="absolute  right-1/4 ">
        <div className="w-1/2">
          <SelectList />
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
