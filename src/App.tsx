import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import RootRouter from "./root-router";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <div className="App">
            <h2>Navigation Bar</h2>
            <RootRouter />
          </div>
        </>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
