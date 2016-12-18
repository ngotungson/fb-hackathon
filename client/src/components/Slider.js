import React from 'react';
import { Carousel } from 'antd';
import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg'
import slider5 from '../images/slider5.jpg'

class Slider extends React.Component {

  render() {
    return (
      <div>
        <Carousel vertical="true" autoplay>
          <div style={{height: "400px"}}>
            <img src={slider1} />
          </div>
          <div style={{height: "400px"}}>
            <img src={slider2} />
          </div>
          <div style={{height: "400px"}}>
            <img src={slider3} />
          </div>
          <div style={{height: "400px"}}>
            <img src={slider4} />
          </div>
          <div style={{height: "400px"}}>
            <img src={slider5} />
          </div>
        </Carousel>
      </div>
    )
  }
}


export default Slider;
