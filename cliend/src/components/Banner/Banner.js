
import React from 'react';
import "./Banner.css";
import {Carousel} from "react-bootstrap"
import { bannerData } from './data';

const Banner = () => { 

  return (

    <Carousel className='banner-container'>
        {bannerData && bannerData.map((val)=>(  
  <Carousel.Item interval={3000}>

<div className="banner-content">
            <div className="text-content">
              <div className="cover">
                <div className="container">
                  <div className="header-content">
                    <div className="line"></div>
                    <h2>Teimagine Digital Experience with</h2>
                    <h1>Start-ups and solutions</h1>
                    <h4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-content">
              <img
                src={val?.img}
                alt="Banner"
                className="banner-image"
              />
            </div>
          </div>


  </Carousel.Item>
        ))} 
  </Carousel>
 
  )
    
}

export default Banner;