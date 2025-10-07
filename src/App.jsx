import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Theory from "./pages/Theory";
import Application from "./pages/Application";
import Quiz from "./pages/Quiz";
import Appendix from "./pages/Appendix";
import "./App.css"; // nơi viết css transition

const App = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      <Header />
      <main className="main-content fade">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/ly-thuyet" element={<Theory />} />
          <Route path="/lien-he-thuc-tien" element={<Application />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/phu-luc-ai" element={<Appendix />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
