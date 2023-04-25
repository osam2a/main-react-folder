import React from "react";
import Header from "./Header";
import Section from "./Section";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-red-900">
        <React.StrictMode>
          <Header />
          <Section />
        </React.StrictMode>
      </div>
    </>
  );
}

export default App;
