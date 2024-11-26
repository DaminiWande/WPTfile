import React from "react";

export default function Services() {
    return (
        <section id="services-container">
            <h1 className="h-primary center">Our Services</h1>
            <div id="services">
                <div className="box">
                    <img src="img1.jpg" alt="" />
                    <h2 className="h-secondary center">Food Catering</h2>
                    <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="box">
                    <img src="img2.jpg" alt="" />
                    <h2 className="h-secondary center">Bulk Ordering</h2>
                    <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="box">
                    <img src="/image/img3.jpg" alt="" />
                    <h2 className="h-secondary center">Food Ordering</h2>
                    <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </section>
    );
}
