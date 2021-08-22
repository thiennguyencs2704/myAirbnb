import { XIcon } from "@heroicons/react/solid";
import React from "react";

interface ClearButtonProps {
  handlerClearData: () => void;
  style?: string;
}

const ClearDataButton: React.FC<ClearButtonProps> = ({
  handlerClearData,
  style,
}) => {
  return (
    <button
      onClick={handlerClearData}
      className={`absolute flex items-center justify-center z-30 w-[26px] h-[26px] text-base bg-[#f0f0f0] rounded-full right-4 top-[17px] ${style}`}
      type="button"
    >
      <XIcon className="w-[14px] h-[14px]" />
    </button>
  );
};

export default ClearDataButton;
