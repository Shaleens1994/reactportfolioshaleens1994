import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";
import Project from "./components/Project/Project";





function App() {
  return (
        // <Router>
      <div>
        <Header />
        <Navigation />
        <Home/>
        <About/>
        <Project/>
        <Contact/>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Project} />
        <Route exact path="/blog" component={About} />
        <Route path="/contact" component={Contact} /> */}
        <Footer />
      </div>
    // </Router>
       );
}

export default App;
