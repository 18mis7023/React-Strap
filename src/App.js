// components
import React from "react";
import Navbar from "./Components/Navbar/navbar";
import "./App.css";

import AllButtons from "./Components/AllButtons/allbuttons";

// pages
import Home from "./Pages/Home";
import About from "./Pages/about";
import Contact from "./Pages/contact";

// packages
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route exact path="/">
        <Home />
      </Route>

      {/* ------------------------- Hemanth components -------------------------- */}
      <Route exact path="/hemanth">
        <About />
      </Route>

      {/* ------------------------- Sudhindra components -------------------------- */}
      <Route exact path="/sudhindra">
        <Contact />
      </Route>

      <Route path="/sudhindra/buttons">
        <AllButtons />
      </Route>
    </div>
  );
}

export default App;
