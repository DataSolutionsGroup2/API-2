import { Button } from "../../../types";

interface HeaderProps {
  buttons: Button[];
}

const HeaderComponent = ({ buttons }: HeaderProps) => {
  return (
    <div className="select-none flex-col h-auto w-[250px] bg-[#3241F0] rounded-br-lg">
      <img className="ml-[250px]" src="/src/imagens/desgn.png" alt="" />
      <div className="p-4">
        <ul>
          {buttons.map((button, index) => (
            <li key={index}>
              <button
                className="w-full p-2 text-left text-white font-bold hover:bg-white hover:text-blue-800 rounded-xl mb-4"
                onClick={() => {
                  button.onClick();
                }}
              >
                {button.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
