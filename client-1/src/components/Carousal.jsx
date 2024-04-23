import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carousal = () => {
    const data =
        [
            {
                "image": 'council-c1.jpg',
                "title": "Forster for Council - and change the life for a good",
                "subTitle": "ddssfsfs"
            },
            {
                "image": 'council-c-4.jpg',
                "title": "Get your Council tax bill by Email",
                "subTitle": "tryrtyr"
            },
            {
                "image": 'council-c-3.jpg',
                "title": "Find More about May 2024 Election",
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
