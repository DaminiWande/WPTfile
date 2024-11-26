import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/contact", formData);
            alert(response.data.message);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form.");
        }
    };

    return (
        <section id="contact">
            <h1 className="h-primary center">Contact Us</h1>
            <div id="contact-box">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </section>
    );
}
