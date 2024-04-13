import React, { useEffect, useState } from 'react'

const Renderavatar = () => {
    const [randomImage, setRandomImage] = useState('');

    useEffect(() => {
        const imageFilenames = [
            'avatar1.png',
            'avatar2.png',
            'avatar3.png',
            'avatar4.png',
            'avatar5.png',
            'avatar6.png',
            'avatar7.png',
            'avatar8.png',
            'avatar9.png'
        ];

        const randomIndex = Math.floor(Math.random() * imageFilenames.length);
        const imagePath = `${imageFilenames[randomIndex]}`;
        setRandomImage(imagePath);
    }, []);

    return (
        <>
            <img src={randomImage} alt="User Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </>
    )
}

export default Renderavatar
