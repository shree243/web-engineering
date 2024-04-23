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
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSesjFexFI--54LeqMWdnDJ6iU_ljoEKtEggdooKAnpl5Z4G8A/viewform?usp=sf_link">Report a missed bin</a></li>
                        <li>When is my bin day?</li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Housing</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScXETid8HxHiSW04d6mTFeSnE9iKzfs-1alhK1mwzz54FXivA/viewform?usp=sf_link">Find a Home</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSchD8Ri8O1qw4qF2KCpUDNpApyTlgm-GJ6iYONDsqBbCfSFkg/viewform?usp=sf_link">Tenant Handbook</a></li>
                        <li>Tell us you've moved house</li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Jobs</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSerdryjALkwGR9hK3q9ArXAp8pO0rXy_iGJlAM48WCcJ3TOnQ/viewform?usp=sf_link">Job Vacancies</a></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Benefits and Support</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLScEDEAgjCEGMUHxhKCy1dn8KcYVNs4SwciuNfDQEIrAlgOuCw/viewform?usp=sf_link">Benefit advice</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfxcPFTfZGB9pmI_E7fwg3wizyk_wqt3Wg_8xFy2HSHE2bgMg/viewform?usp=sf_link">Supporting Sandwell</a></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Council Tax</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdE4X1Syni0B_C5ThJ5FJQ3E8KYPYbj3Zj1pW7E0H708aJYPA/viewform?usp=sf_link">Issue Regarding your council tax</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfP3O_szbCXqNvDwQn_k8FVfHLn7cezeR5BsUyNAV5ROrYD2g/viewform?usp=sf_link">Tell us you've moved house</a></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Schools and Education</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfP3O_szbCXqNvDwQn_k8FVfHLn7cezeR5BsUyNAV5ROrYD2g/viewform?usp=sf_link">Schools and Colleges</a></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfP3O_szbCXqNvDwQn_k8FVfHLn7cezeR5BsUyNAV5ROrYD2g/viewform?usp=sf_link">Term dates and holidays</a></li>
                    </ul>
                </div>
                <div className="card">
                    <h2>Adult Social Care</h2>
                    <ul>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeFJJNiVk3b2KfHoodiRKEGEaVADgvDleEnuPuJwYJwLYPPog/viewform?usp=sf_link">Disability</a></li>
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
            <div className="flex-row-container">
                <div className="flex-item">
                    <p style={{ color: 'white', marginLeft: '0px' }}>Find out how we do it...</p>
                    <h3 style={{ color: 'white' }}>Waste and Recycling</h3>
                    <p>
                        Garden waste service
                        Book a bulky waste collection</p>
                    <p style={{ marginTop: '20px' }}>
                        "Keep your garden clean and green with our convenient garden waste service. Schedule a hassle-free bulky waste collection to declutter your space responsibly."</p>
                </div>
                <div className="flex-item">
                    <img src="brum12.avif" alt='dd' style={{ width: '500px', height: '500px' }} />
                </div>
            </div>
            <div className="flex-row-container">
                <div className="flex-item">
                    <img src="brum14.jpg" alt='dd' style={{ width: '500px', height: '500px' }} />
                </div>
                <div className="flex-item">
                    <p style={{ color: 'white', marginLeft: '0px' }}>Benefits and Support</p>
                    <p>
                        Cost of living support
                        make a benefits claim.
                        report a change in circumstances</p>
                    <p style={{ marginTop: '20px' }}>
                        "Explore our cost of living support options and learn how to make a benefits claim. Report any changes in your circumstances easily for timely assistance."</p>
                </div>
            </div>
        </>
    )
}

export default Services;
