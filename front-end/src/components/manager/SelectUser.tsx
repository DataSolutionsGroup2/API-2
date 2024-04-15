import ButtonSelector from "./Buttomselector";

export default function SelectUser() {
  return (
    <div>
      <ul>
        <li className=" bg-gradient-to-r from-orange-500 to-orange-700 text-white text-lg font-bold py-2 px-12 rounded-b flex justify-between items-center">
          <span className="mr-4">Editor</span>
          <ButtonSelector id="Seleditor" />
        </li>
        <li className=" bg-gradient-to-r from-orange-500 to-orange-700 text-white text-lg font-bold py-2 px-12 rounded-b flex justify-between items-center">
          <span className="mr-4">Revisor</span>
          <ButtonSelector id="Selrevisor" />
        </li>
      </ul>
    </div>
  );
}
