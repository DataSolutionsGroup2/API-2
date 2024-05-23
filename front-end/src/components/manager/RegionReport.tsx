import ButtonSelector from "./Buttomselector";

interface RegionInterface {
  name: string;
}

interface PropsInterface {
  data: RegionInterface[];
  onRegionSelect: (regionName: string) => void;
}

export default function RegionReport({ data, onRegionSelect }: PropsInterface) {
  return (
    <div>
      <ul>
        {data.name.map((item, index) => (
          <li
            key={index}
            className="w-full bg-gradient-to-r from-blue-500 to-orange-700 text-white text-lg font-bold py-2 px-12 flex justify-between "
          >
            <span className="inline-flex">{item}</span>
            <ButtonSelector id={item} key={item} onSelect={onRegionSelect} />
          </li>
        ))}
      </ul>
    </div>
  );
}
