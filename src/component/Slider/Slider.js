import React from 'react'
import { Carousel } from 'react-bootstrap';
const Slider = () => {
  return (
    <>
      


<Carousel fade   interval={1000} controls={false} indicators={false} wrap={true} >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_4.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default Slider
