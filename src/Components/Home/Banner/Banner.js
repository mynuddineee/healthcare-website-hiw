import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';
import './Banner.css';

const Banner = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {banner3}
                alt="First slide"
                />
                <Carousel.Caption className="text-position">
                    <h1>HIW (Health is Wealth)</h1>
                    <h3>Virtual Health Care Platform</h3>
                    <h5>You will get the doctor appointment from home or remotely</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {banner2}
                alt="Second slide"
                />

                <Carousel.Caption className="text-position">
                    <h1>HIW (Health is Wealth)</h1>
                    <h3>Virtual Health Care Platform</h3>
                    <h5>You will get the doctor appointment from home or remotely</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {banner1}
                alt="Third slide"
                />

                <Carousel.Caption className="text-position">
                    <h1>HIW (Health is Wealth)</h1>
                    <h3>Virtual Health Care Platform</h3>
                    <h5>You will get the doctor appointment from home or remotely</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Banner;