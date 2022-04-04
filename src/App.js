import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./AllRoutes";
import Header from "./components/Header";

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
