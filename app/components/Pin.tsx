"use client";

const Pin = ({ name = "", handleRemove = (name: string) => {} }) => {
  return (
    <div className="bg-red-200 p-2 rounded-lg text-sm flex gap-2">
      {name}{" "}
      <span onClick={() => handleRemove(name)} className="bg-red-600 h-[20px] w-[20px] rounded-full flex justify-center items-center text-white cursor-pointer">
        x
      </span>
    </div>
  );
};

export default Pin;
