import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carousal = () => {
    const data =
        [
            {
                "image": 'caursal1.avif',
                "title": "Subtracting from your list of priorities is as important as adding to it",
                "subTitle": "ddssfsfs"
            },
            {
                "image": 'caursal2.jpg',
                "title": "Each day I will accomplish one thing on my to do list",
                "subTitle": "tryrtyr"
            },
            {
                "image": 'caursal4.jpeg',
                "title": "We need to do a better job of putting ourselves higher on our own to do list.",
                "subTitle": "ddssfsfs"
            }
        ]
    return (
        <>
            <Carousel>

                {data.map((dt) => (
                    <Carousel.Item key={dt.image}>
                        {/* {console.log(dt, "images")} */}
                        <img style={{ height: '74vh', backgroundSize: 'cover' }}
                            src={dt.image}
                            className='d-block w-100'
                            alt={dt.title}
                        />
                        <Carousel.Caption>
                            <h3>{dt.title} </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default Carousal
