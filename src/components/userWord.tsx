import { userWord } from "signals/input";

export function UserWord() {
  return (
    <div className="flex w-full flex-col items-center py-16">
      <div className="flex flex-col items-center justify-center pb-12">
        <label htmlFor="userInput" className="text-lg">
          Specify user word
        </label>
        <input
          id="userInput"
          type="text"
          className="input w-64 text-white"
          value={userWord.value}
          onChange={(e) => (userWord.value = e.target.value)}
        />
      </div>
      <span>
        This is the value of the user Word. It will be on each component:{" "}
      </span>
      <p className="text-lg font-bold">{userWord.value}</p>
    </div>
  );
}
