import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const ServiceCarousal = () => {
    const data =
        [
            {
                "image": 'ser1.PNG',
                "title": "",
                "subTitle": "ddssfsfs"
            },
            {
                "image": 'ser2.PNG',
                "title": "",
                "subTitle": "tryrtyr"
            },
            {
                "image": 'ser3.PNG',
                "title": "",
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

export default ServiceCarousal
