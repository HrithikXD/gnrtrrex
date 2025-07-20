import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Reviews from "./pages/reviews";
import Contact from "./pages/contact";
import Title from "./pages/title";
import { useEffect, useState } from "react";
import Theme from "./components/theme";
import Header from "./components/header";
import Footer from "./components/footer";
import Top from "./pages/top";


function App() {
  return (
    <Router>
      <div className="app">
        <Top/>
        <Navigation/>
        <Title/>
        <Services />
        {/* <Portfolio /> */}
        <Reviews />
        <Contact />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
