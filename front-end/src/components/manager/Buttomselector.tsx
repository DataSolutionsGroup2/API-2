// ButtonSelector.tsx
import React from "react";

interface ButtonSelectorProps {
  id: string;
  onSelect: (regionName: string) => void;
}

const ButtonSelector: React.FC<ButtonSelectorProps> = ({ id, onSelect }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    console.log("isChecked", isChecked);
    onSelect(isChecked == false ? id : "");
  };

  return (
    <div className="">
      <input
        type="checkbox"
        id={id}
        className="hidden"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label
        htmlFor={id}
        className={`${
          isChecked ? "bg-green-500" : "bg-gray-500"
        } switch-label inline-block w-8 h-4 rounded-full cursor-pointer`}
      >
        <span
          className={`${
            isChecked ? "translate-x-full" : ""
          } slider block w-4 h-4 rounded-full bg-white shadow-md`}
        ></span>
      </label>
    </div>
  );
};

export default ButtonSelector;
