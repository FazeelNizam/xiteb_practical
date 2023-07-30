import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'

import Lock from '../../img/lock.png'
import slideData from './data'
import NavigationItem from './NavigationItem'
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <>
      <section className="navigation-slider-container">
        <Swiper
          cssMode={true}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            800: {
              slidesPerView: 4,
            },
            950: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 5,
            },
            1600: {
              slidesPerView: 6,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {/* <SwiperSlide>
            <div className="slide-container">
              <img src={Lock} alt="" />
              <span>Online Banking</span>
            </div>
          </SwiperSlide> */}
          {slideData.map((slide, index) => {
            return (
              <SwiperSlide>
                <NavigationItem key={index} {...slide} />
              </SwiperSlide>
            )
          })}

          {/* <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide> */}
        </Swiper>
      </section>
    </>
  )
}

export default NavigationBar
