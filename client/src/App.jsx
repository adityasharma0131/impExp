import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Define your routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
