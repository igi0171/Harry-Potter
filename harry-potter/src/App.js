import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";

import Characters from "./components/Characters";
import Students from "./components/Students";
import Staff from "./components/Staff";
import Houses from "./components/Houses";
import House from "./components/House";

function App() {
  return (
    <>
      <h1 className="harry-potter">Harry Potter</h1>
      <NavBar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to="/characters" />}
          ></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/staff" element={<Staff />}></Route>
          <Route path="/house" element={<Houses />}></Route>
          <Route path="/house/:house" element={<House />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
