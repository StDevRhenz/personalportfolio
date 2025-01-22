import React from "react";
import HelloWorld from "./components/HelloWorld";
import title from "./components/HelloWorld";
import Calculator from "./components/Calculator";

const App: React.FC = () => {
  return (
    <div>
      <HelloWorld />
      <Calculator />
      <title />
    </div>
  );
};


export default App;