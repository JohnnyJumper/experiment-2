import { useState } from "react";
import { userWord } from "signals/input";
import { Item, TableData, itemNames, tableData } from "signals/tableData";
import { generateRandomNumber } from "utils/utils";

export function AddDataPoints() {
  const [entry, setEntry] = useState<Omit<TableData, "items">>({
    height: 0,
    length: 0,
    width: 0,
  });
  const [items, setItems] = useState<Item[]>([]);

  const [showPopup, setShowPopup] = useState(false);

  const showPopupHandler = () => {
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const onSave = (e: any) => {
    e.preventDefault();
    const newEntry = { ...entry, items };

    tableData.value = [...tableData.value, newEntry];
    console.log({ names: itemNames.value });
    showPopupHandler();
    setEntry({
      height: 0,
      length: 0,
      width: 0,
    });
    setItems([]);
  };

  return (
    <div className="flex w-full flex-col items-center py-4">
      <div className="flex flex-col items-center">
        <h1 className="text-xl">word of the day:</h1>
        <h3 className="text-2xl font-bold">{userWord.value}</h3>
      </div>
      {showPopup && (
        <div className="border-b border-t border-blue-500 bg-blue-100 px-4 py-3 text-blue-700">
          <p className="font-bold">
            Saved proceed to next step to view or add more
          </p>
        </div>
      )}
      <form className="mt-2 flex w-96 flex-col items-center justify-center border-t border-black">
        <div className="flex items-center justify-around">
          <label htmlFor="width" className="w-24 text-xl">
            width:
          </label>
          <input
            id="width"
            type="number"
            value={entry.width ?? 0}
            onChange={(e) =>
              setEntry((prev) => ({ ...prev, width: parseInt(e.target.value) }))
            }
            className="input input-bordered my-4 rounded-md p-2 text-white"
          />
        </div>
        <div className="flex items-center justify-around">
          <label htmlFor="height" className="w-24 text-xl">
            height:
          </label>
          <input
            id="height"
            type="number"
            value={entry.height ?? 0}
            onChange={(e) =>
              setEntry((prev) => ({
                ...prev,
                height: parseInt(e.target.value),
              }))
            }
            className="input input-bordered my-4 rounded-md p-2 text-white"
          />
        </div>
        <div className="flex items-center justify-around">
          <label htmlFor="length" className="w-24 text-xl">
            length:
          </label>
          <input
            id="length"
            type="number"
            value={entry.length ?? 0}
            onChange={(e) =>
              setEntry((prev) => ({
                ...prev,
                length: parseInt(e.target.value),
              }))
            }
            className=" input input-bordered my-4 rounded-md p-2 text-white"
          />
        </div>
        <div className="my-2 flex flex-col items-center justify-around">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-[400px] flex-col justify-center border-t border-black"
              >
                <div className="my-2 flex items-center justify-between">
                  <label htmlFor="id">Id:</label>
                  <input
                    type="number"
                    disabled={true}
                    value={item.id}
                    className="input input-bordered text-white"
                  />
                </div>
                <div className="my-2 flex items-center justify-between">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="input input-bordered text-white"
                    value={item.name}
                    onChange={(e) =>
                      setItems((prev) =>
                        prev.map((it, setIt) =>
                          setIt === index
                            ? { ...it, name: e.target.value }
                            : it,
                        ),
                      )
                    }
                  />
                </div>
                <div className="my-2 flex items-center justify-between border-b border-black pb-4">
                  <label htmlFor="name">VendorCode:</label>
                  <input
                    type="number"
                    className="input input-bordered text-white"
                    value={item.vendorCode ?? 0}
                    onChange={(e) =>
                      setItems((prev) =>
                        prev.map((it, setIt) =>
                          setIt === index
                            ? { ...it, vendorCode: parseInt(e.target.value) }
                            : it,
                        ),
                      )
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          className="btn btn-secondary w-full"
          onClick={() => {
            setItems([
              ...items,
              {
                id: generateRandomNumber(),
                name: "",
                vendorCode: 0,
              },
            ]);
          }}
        >
          Add Item
        </button>
        <button
          type="submit"
          className="btn btn-primary mt-4 w-full"
          onClick={onSave}
        >
          Save
        </button>
      </form>
    </div>
  );
}
