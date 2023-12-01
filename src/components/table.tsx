import React from "react";
import { userWord } from "signals/input";
import { itemNames, tableData } from "signals/tableData";

export function Table() {
  const labels = ["Width", "Length", "Height", "Name"];

  return (
    <div className="flex w-full flex-col items-center py-4">
      <div className="flex flex-col items-center">
        <h1 className="text-xl">word of the day:</h1>
        <h3 className="text-2xl font-bold">{userWord.value}</h3>
      </div>

      <div className="mt-8 grid grid-cols-4 rounded-md border-l border-r border-t border-black text-lg">
        {labels.map((label, index) => (
          <div
            key={`label-${index}`}
            className="border-b border-black px-4 pb-2 pt-2 text-2xl font-bold"
          >
            {label}
          </div>
        ))}
        {tableData.value.map((tableEntry, index) => (
          <React.Fragment key={`row-${index}`}>
            <div className="border-b border-black px-4 py-5 text-black">
              {tableEntry.width}
            </div>
            <div className="border-b border-black px-4 py-5 text-black">
              {tableEntry.length}
            </div>
            <div className="border-b border-black px-4 py-5 text-black">
              {tableEntry.height}
            </div>
            <div className="border-b border-black px-4 py-5 text-black">
              {itemNames.value[index].join(", ")}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
