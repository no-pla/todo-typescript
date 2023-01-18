import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailPage } from "./components/DetailPage";
import { Home } from "./components/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:todoId" element={<DetailPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
