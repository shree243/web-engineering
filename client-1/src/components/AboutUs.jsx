import React from 'react'

const AboutUs = () => {
    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100vh', // Set to full viewport height
        overflow: 'hidden',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const textStyle = {
        position: 'absolute',
        top: '80%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'purple',
        zIndex: '1',
    };
    return (
        <>
            <div style={containerStyle}>
                <img
                    src="brum13.jpg"
                    alt="Full-width"
                    style={imageStyle}
                />

            </div>
            <div style={{ color: 'white', marginTop: '50px' }}>
                <h2>We're leading the smart council Management technology revolution</h2>
                <p>
                    We're passionate and committed to delivering smart user friendly policies for all and creating lasting change for our communities and the environment for generations to come.
                </p>
                <br />
                <p> Our expertise is to generate, install, service, finance, and track millions of smart Projects infrastructure assets that collectively make a big difference to Society.

                </p>
                <br />
                <p>   This approach offers our customers a simple, one-stop solution, reframing smart Project as a service and providing a seamless experience, making reaching net zero goals as easy as possible.</p>
            </div >

            <div className="flex-row-container">
                <div className="flex-item">
                    <p style={{ color: 'white', marginLeft: '0px' }}>Find out how we do it...</p>
                    <h3 style={{ color: 'white' }}>The countdown to zero has begun</h3>
                    <p>
                        We’ll never stop making the smarter future easier,
                        because zero has never meant so much.</p>
                    <p style={{ marginTop: '20px' }}>
                        We are committed to innovating, exploring and pushing the boundaries of what’s possible to deliver the infrastructure and technology that powers our world more sustainably</p>
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
                    <p style={{ color: 'white', marginLeft: '0px' }}>Company Build on Heritage....</p>
                    <p>
                        We’ll never stop making the smarter future easier,
                        because zero has never meant so much.</p>
                    <p style={{ marginTop: '20px' }}>
                        We are committed to innovating, exploring and pushing the boundaries of what’s possible to deliver the infrastructure and technology that powers our world more sustainably</p>
                </div>
            </div>
            <div>
                <h2 style={{ color: 'yellow', marginTop: '50px' }}>Meet Our Founder</h2>
                <div style={{ marginTop: '50px' }}>
                    <img src="me.PNG" alt='dd' style={{ width: '200px', height: '200px' }} />
                </div>
                <h2 style={{ color: 'orange', marginTop: '50px' }}>Shreepad Kulkarni </h2>
                <p style={{ color: 'white', marginTop: '50px' }}>Shreepad Kulkarni is having more than 3 years of work experience as a Software Engineer - II at 3i Infotech
                </p>
                <p style={{ color: 'white' }}>Worked for Crisil and Maxval Technologies. I was a key contributor in developing
                    <br />
                    an end-to-end regulatory applications as low-code no-code, banking systems, Employee management saving billions
                    <br /> in penalties and pioneering the company's first cloud-based application. journey through academia and the corporate world has equipped me with a diverse skill set, including proficiency in:
                </p>
                <p style={{ color: 'white' }} > Programming languages: Java, JavaScript, TypeScript,</p>
                <p style={{ color: 'white' }} >Portfolio - https://shreepad-kulkarni-portfolio.netlify.app/</p>
            </div >

        </>
    )
}

export default AboutUs
