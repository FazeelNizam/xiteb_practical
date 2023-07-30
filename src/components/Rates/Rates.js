import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import ratesData from './ratesData'
import RateSlide from './RateSlide'

import './Rates.css'

const Rates = () => {
  return (
    <section className="rates-section">
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        loop={true}
        breakpoints={{
          50: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        className="mySwiper"
      >
        {ratesData.map((rate, index) => {
          return (
            <SwiperSlide>
              <RateSlide key={index} {...rate} />
            </SwiperSlide>
          )
        })}
        <div className="rate-link">
          <span>
            *Valid for use on 29 <p>th</p> July 2023
            <a href="https://www.amanabank.lk/business/treasury/exchange-rates.html">
              View all Rates
            </a>
          </span>
        </div>
      </Swiper>
    </section>
  )
}

export default Rates
