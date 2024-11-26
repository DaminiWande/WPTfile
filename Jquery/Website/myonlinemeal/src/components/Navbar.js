import React from "react";
import "./Navbar.css";
export default function Navbar(){
    return (
        <>
        <nav id="navbar">
        <div id="logo">
            <img src="logo.png" alt="MyOnlineMeal.com"/>
        </div>
        <ul>
            <li class="item"><a href="#home">Home</a></li>
            <li class="item"><a href="#services-container">Services</a></li>
            <li class="item"><a href="#client-section">Our Clients</a></li>
            <li class="item"><a href="#contact">Contact Us</a></li>
        </ul>
    </nav>
    </>
    );
}