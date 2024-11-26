import React, { useState } from 'react';
import apiRequest from 'client';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiRequest('/api/contact', 'POST', formData);
            setResponseMessage(response.message || 'Your message has been sent!');
        } catch (error) {
            setResponseMessage('Failed to send your message. Please try again.');
        }
    };

    return (
        <section id="contact">
            <h1 className="h-primary center">Contact Us</h1>
            <div id="contact-box">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn">
                        Send Message
                    </button>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        </section>
    );
}

export default Contact;
