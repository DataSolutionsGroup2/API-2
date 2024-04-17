import { useState } from "react";
import "tailwindcss/tailwind.css";
import RegionReport from "./RegionReport";

export default function Desktop() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center mt-20">
      <div className="custom-container">
        <ul>
          <li>
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className="w-[300px] inline-flex  bg-gradient-to-r from-orange-500 to-orange-700 text-white px-12 py-4 text-lg font-bold rounded cursor-pointer"
            >
              Região
              <svg
                className="w-12 h-6 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.707 10.293a1 1 0 011.414 0L10 14.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ul>
        {open && (
          <div className=" bg-gradient-to-r from-orange-500 to-orange-700 rounded-b mt-[-5px]">
            <ul className="block">
              <li>
                <RegionReport />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
