import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'

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
            0: {
              slidesPerView: 4,
            },
            800: {
              slidesPerView: 3,
            },
            950: {
              slidesPerView: 4,
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
        </Swiper>
      </section>
    </>
  )
}

export default NavigationBar
