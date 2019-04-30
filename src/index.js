import React from "react";
import ReactDOM from "react-dom";
import InfiniteList from "./components/InfiniteList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <InfiniteList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
