import { AddDataPoints } from "components/addDataPoints";

import { Table } from "components/table";
import { UserWord } from "components/userWord";
import { useState } from "react";

enum Navigation {
  UserWord = "UserWord",
  AddPoints = "AddPoints",
  Table = "Table",
}

function App() {
  const [nav, setNav] = useState<Navigation>(Navigation.UserWord);

  const goTo = (nav: Navigation) => {
    setNav(nav);
  };

  const renderChild = () => {
    switch (nav) {
      case Navigation.UserWord:
        return <UserWord />;
      case Navigation.AddPoints:
        return <AddDataPoints />;
      case Navigation.Table:
        return <Table />;
    }
  };

  return (
    <div className="bg-primary-500 h-full">
      <nav className="bg-primary-content flex w-full justify-center py-4">
        <button
          className="btn btn-secondary mx-8 w-32"
          onClick={() => goTo(Navigation.UserWord)}
        >
          UserWord
        </button>
        <button
          className="btn btn-secondary mx-8 w-32"
          onClick={() => goTo(Navigation.AddPoints)}
        >
          AddPoints
        </button>
        <button
          className="btn btn-secondary mx-8 w-32"
          onClick={() => goTo(Navigation.Table)}
        >
          Table
        </button>
      </nav>
      <div className="bg-neutral-content flex h-full w-full justify-center border text-black">
        {renderChild()}
      </div>
    </div>
  );
}

export default App;
