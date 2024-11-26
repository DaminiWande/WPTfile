import React from "react";
import './App.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/ContactForm";

function App() {
    return (
        <div>
            <Navbar />
            <Home />
            <Services />
            <Contact />
        </div>
    );
}

export default App;
