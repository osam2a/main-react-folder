import React from "react";
import Header from "./compoent/Header";
import Section from './compoent/Section';
import "./App.css";
function App() {
  return (
    <>
      <div className="bg-cyan-100  font-serif	">
        <React.StrictMode>
          <Header />
          <Section />
        </React.StrictMode>
      </div>
    </>
  );
}

export default App;
