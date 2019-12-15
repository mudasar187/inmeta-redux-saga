import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import RootRouter from "./root-router";
import { Provider } from "react-redux";

import Heroes from "./heroes/pages/Heroes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <>
        <div className="container">
          <RootRouter />
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;
