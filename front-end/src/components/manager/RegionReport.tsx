import ButtonSelector from "./Buttomselector";

export default function RegionReport() {
  return (
    <div>
      <ul>
        <li className="bg-gradient-to-r from-orange-500 to-orange-700 text-white text-lg font-bold py-2 px-12 rounded-b flex justify-between items-center">
          <span className="mr-4">Atibaia</span>
          <ButtonSelector id="Selatibaia" />
        </li>
        <li className="bg-gradient-to-r from-orange-500 to-orange-700 text-white text-lg font-bold py-2 px-12 rounded-b flex justify-between items-center">
          <span className="mr-4">Cruzeiro</span>
          <ButtonSelector id="Selcruzeiro" />
        </li>
        <li className="bg-gradient-to-r from-orange-500 to-orange-700 text-white text-lg font-bold py-2 px-12 rounded-b flex justify-between items-center">
          <span className="mr-4">Taubate</span>
          <ButtonSelector id="Seltaubate" />
        </li>
      </ul>
    </div>
  );
}
