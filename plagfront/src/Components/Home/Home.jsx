import React, {Component} from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../../Assets/logo.jpg'
import carousel2 from '../../Assets/carousel2.jpeg'
import carousel3 from '../../Assets/carousel3.jpeg'

function Home() {
  return (
    <div>
        <Carousel interval={2500} autoPlay={false} infiniteLoop={true} showArrows={false} showIndicators={true} showStatus={false} >
                <div>
                    <img src={carousel1} />
                </div>
                <div>
                    <img src={carousel2} />
                </div>
                <div>
                    <img src={carousel3} />
                </div>
          </Carousel>
    </div>
  )
}

export default Home