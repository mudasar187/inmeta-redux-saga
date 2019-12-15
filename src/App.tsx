import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Heroes from "./heroes/pages/Heroes";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Heroes />
    </div>
  );
};

export default App;
