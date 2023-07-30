import React from 'react'

const RateSlide = ({ img, title, buy, sell }) => {
  return (
    <article className="rate-slide-container">
      <div className="flag-container">
        <img src={img} alt="" />
        <p>{title}</p>
      </div>
      <div className="buy-sell-rate-container">
        <p>{buy}</p>
        <p>{sell}</p>
      </div>
    </article>
  )
}

export default RateSlide
