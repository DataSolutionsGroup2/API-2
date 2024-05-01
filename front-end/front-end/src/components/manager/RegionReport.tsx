import ButtonSelector from "./Buttomselector";

interface RegionInterface{
  name: string;
}

interface PropsInterface{
  data: RegionInterface[];
  onRegionSelect: (regionName: string) => void
}

export default function RegionReport({data, onRegionSelect}: PropsInterface) {
  
  return (
    <div>
      <ul>
        {data.name.map((item, index) => (
          <li key={index} className="bg-gradient-to-r from-orange-500 to-orange-700 text-white text-lg font-bold py-2 px-12 rounded-b flex justify-between items-center">
            <span className="mr-4">{item}</span>
            <ButtonSelector id={item} key={item} onSelect={onRegionSelect}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
