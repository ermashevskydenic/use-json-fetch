import './App.css';
import React from "react";

import DataComponent from "./components/DataComponent";
import Loadingcomponent from "./components/Loadingcomponent";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  return (
      <div className="App">
        <DataComponent/>
        <ErrorComponent/>
        <Loadingcomponent/>
      </div>
  );
}

export default App;