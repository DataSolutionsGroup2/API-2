interface Button {
  name: string;
  onClick: () => void;
}

interface HeaderProps {
  buttons: Button[];
}

const HeaderComponent = ({ buttons }: HeaderProps) => {
  return (
    <div className="h-20 flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-700 text-white text-center text-4xl font-bold shadow-md">
      {buttons.map((button, index) => (
        <button
          className="p-4  text-white hover:bg-orange-800 m-2 rounded-xl"
          key={index}
          onClick={() => {
            button.onClick();
          }}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
};

export default HeaderComponent;
