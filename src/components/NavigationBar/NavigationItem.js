import React from 'react'

const NavigationItem = ({ img, title }) => {
  return (
    <div className="slide-container">
      <img src={img} alt="" />
      <span>{title}</span>
    </div>
  )
}

export default NavigationItem
