import "tailwindcss/tailwind.css";
import RegionReport from "./RegionReport";
import { MockedRegion } from "../../../utils/mockedData/regionMocked";

interface optionsInterface {
  user: string;
}
interface Props {
  options?: optionsInterface[];
  onRegionChange: (regionName: string) => void;
}

export default function Desktop({ onRegionChange, options }: Props) {
  const handleRegionSelect = (regionName: string) => {
    onRegionChange(regionName);
  };

  const regionNamesData = {
    name: MockedRegion.regiao.map((item) => item.name),
  };

  console.log("name: ", regionNamesData);

  return (
    <div className=" flex-col  w-full  ">
      <div className="">
        <ul>
          <li>
            <button
              onClick={() => {}}
              className="w-full  bg-gradient-to-r from-blue-500 to-orange-700 text-white px-11 py-4 text-lg font-bold  cursor-pointer"
            >
              Selecione a Região
            </button>
          </li>
        </ul>

        <div className=" bg-gradient-to-r from-blue-500 to-orange-700 ]">
          <ul className="">
            <li>
              <RegionReport
                data={regionNamesData ? regionNamesData : options}
                onRegionSelect={handleRegionSelect}
              />
            </li>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}
