"use client";
import React, { useState } from "react";
import Input from "../components/Input";
import Pin from "../components/Pin";

const Page = () => {
  const [selectedNames, setSelectedNames] = useState<any>([]);
  const handleSubmit = (name: string) => {
    if (selectedNames?.includes(name) || name == "") return;
    setSelectedNames([...selectedNames, name]);
  };
  const handleRemove = (name: string) => {
    let removedName = selectedNames?.[selectedNames?.length - 1];
    setSelectedNames(selectedNames.filter((selectedName: string) => selectedName !== removedName));
  };
  const suggestions = ["Hello", "World", "How", "Are", "You"];
  return (
    <div className="flex justify-center  h-[100vh] flex-col p-96 ">
      <div className="border-2 flex gap-5 p-2  flex-wrap">
        {selectedNames?.map((name: string) => {
          return <Pin key={name} name={name} handleRemove={handleRemove} />;
        })}
        <Input onSubmit={(name: string | null) => handleSubmit(name || "")} handleRemove={handleRemove} />
      </div>
      <ul className=" border-2 border-t-0 ">
        {suggestions?.map((suggestion: string,index:number) => {
          return (
            <li key={index} onClick={() => handleSubmit(suggestion)} className="bg-red-200 cursor-pointer m-2 p-1">
              {suggestion}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
