import React from "react";
import Pages from "./components/Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DailyEvents from "./components/DailyEvents/DailyEvents";
import Boxing from "./components/DailyEvents/Boxing";
import IceBath from "./components/DailyEvents/Icebath";
import Yoga from "./components/DailyEvents/Yoga";
import Store from "./components/Store/Store";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/daily-events" element={<DailyEvents />} />
        <Route path="/boxing" element={<Boxing />} />
        <Route path="/ice-bath" element={<IceBath />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
