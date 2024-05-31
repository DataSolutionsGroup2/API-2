interface Button {
  name: string;
  onClick: () => void;
}

interface HeaderProps {
  buttons: Button[];
}

const HeaderComponent = ({ buttons }: HeaderProps) => {
  return (
    <div className=" flex-col h-auto w-[250px] bg-[#3241F0] rounded-br-lg">
      <img className="ml-[250px]" src="/src/imagens/desgn.png" alt="" />
      <div className="p-4">
        <ul>
          {buttons.map((button, index) => (
            <li key={index}>
              <button
                className="p-2 text-white font-bold hover:bg-blue-800 m-2 rounded-xl"
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
