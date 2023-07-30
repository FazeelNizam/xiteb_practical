import React from 'react'

const SolutionCard = ({ img, title, button_text }) => {
  return (
    <article className="solution-card">
      <div className="image-container">
        <img src={img} alt="" />
        <span></span>
      </div>
      <p>{title}</p>
      <button className="solution-btn">{button_text}</button>
    </article>
  )
}

export default SolutionCard
