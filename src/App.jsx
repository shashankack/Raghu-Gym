import React from "react";
import Pages from "./components/Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Pages />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
