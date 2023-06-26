import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Program from "./pages/program/program";
import ScrollTop from "./utility/scrollTop";
import Services from "./pages/services/services";
import TestPage from "./pages/test/test";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/program" element={<Program />} />
        <Route path="/services" element={<Services />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
      <ToastContainer style={{ fontSize: "2rem" }} autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
