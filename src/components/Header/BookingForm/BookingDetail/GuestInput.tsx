import React from "react";

interface GuestInputProps {
  title: string;
  age: string;
  border?: string;
  number: number;
  updateNumber: React.Dispatch<React.SetStateAction<number>>;
  atLeastOneAdult?: boolean;
}

const GuestInput: React.FC<GuestInputProps> = ({
  title,
  age,
  border,
  number,
  updateNumber,
  atLeastOneAdult,
}) => {
  const handlerDecrement = () => {
    updateNumber((prev) => prev - 1);
  };
  const handlerIncrement = () => {
    updateNumber((prev) => prev + 1);
  };

  // const renderCount = useRef(1);
  // useEffect(() => {
  //   renderCount.current += 1;
  //   console.log("Render times:", renderCount.current);
  // });

  return (
    <div
      className={`flex items-center justify-between w-full h-full mx-auto ${border}`}
    >
      <div>
        <h1 className="text-lg text-black">{title}</h1>
        <p className="font-normal text-gray-700">{age}</p>
      </div>

      <div className="flex items-center space-x-4">
        <button
          disabled={number === 0 || atLeastOneAdult ? true : false}
          type="button"
          onClick={handlerDecrement}
          className={`flex justify-center w-[34px] h-[34px] text-xl border border-gray-300 rounded-full ${
            number === 0 || atLeastOneAdult
              ? "disabled:opacity-30 hover:cursor-not-allowed"
              : ""
          }`}
        >
          <span className="pb-2">-</span>
        </button>
        <p className="text-base font-normal">{number}</p>
        <button
          type="button"
          onClick={handlerIncrement}
          className="flex justify-center w-[34px] h-[34px] pb-1 text-xl border border-gray-300 rounded-full items-cemter"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GuestInput;
