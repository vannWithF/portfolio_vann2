import React from "react";
import { Routes,Route } from "react-router-dom";
import { PortfolioVann } from "./pages/portofolio";

const App: React.FC = () => {
  return(
    <Routes>
      <Route path="/" element={<PortfolioVann/>} />
    </Routes>
  )
}

export default App
