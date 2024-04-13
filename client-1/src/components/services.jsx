import React from 'react';
import ServiceCarousal from './serviceCarousal';

import Carousal from "./Carousal";

const Services = () => {

    const styles = `
    .services-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 20px;
    }
    
    .card {
        flex: 0 1 calc(25% - 20px);
        background-color: #f7f7f7; /* Slightly grey background color */
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        margin-bottom: 20px;
    }
    
    .card:hover {
        transform: translateY(-5px);
    }
    
    .card h2 {
        font-size: 20px;
        font-weight: bold; /* Bold first line */
        margin-bottom: 5px; /* Reduced margin */
    }
    
    .card p {
        font-size: 16px; /* Small font size for other lines */
        margin-bottom: 10px; /* Increased margin */
    }
    
    .card ul {
        list-style-type: none;
        padding: 0;
    }
    
    .card ul li {
        margin-bottom: 10px;
    }
    
    .card ul li a {
        text-decoration: none;
        color: #333;
        transition: color 0.3s ease;
    }
    
    
    .card ul li a:hover {
        color: #007bff;
    }
    .banner {
        background-color: yellow;
        margin-left: 0;
        margin-right: 0;
        margin-top: 20px; /* Adjust this value as needed */
        padding: 20px;
    }
    
    
    .notice {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    
    .notice-symbol {
        font-size: 24px;
        margin-right: 10px;
    }
    
    .notice p {
        font-weight: bold;
        font-size: 18px;
        margin: 0;
    }
    
    `;



    return (
        <>
            <ServiceCarousal />
            <style>{styles}</style>
            <div className="banner">
                <div className="notice">
                    <span className="notice-symbol">!</span>
                    <p>Important Notice</p>
                </div>
                <p>Payments will be unavailable on Sunday 14 April between 8am and 4pm.</p>
                <p>Due to essential systems maintenance, we will be unable to accept payments online or by phone during this time. Apologies for any inconvenience.</p>
            </div>
            <div className="services-container">
                <div className="card">
                    <h2>Bins and Recycling</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Report a missed bin</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">When is my bin day?</a></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Housing</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Find a Home</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Tenant Handbook</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Tell us you've moved house</a></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Jobs</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Job Vacancies</a></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Benefits and Support</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Benefit advice</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Supporting Sandwell</a></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Council Tax</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Pay your council tax</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Tell us you've moved house</a></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Schools and Education</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Schools and Colleges</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Term dates and holidays</a></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Adult Social Care</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Disability</a></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Parks and Leisure</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Leisure Centres</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Parks in Sandwell</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Services;
