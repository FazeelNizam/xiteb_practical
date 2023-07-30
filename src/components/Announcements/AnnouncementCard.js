import React from 'react'

const AnnounvementCard = ({ img, title, button_text }) => {
  return (
    <article className="announcement-card">
      <div className="image-container">
        <img src={img} alt="" />
        <span></span>
      </div>
      <div className="title-container">
        <p>{title}</p>
        <button className="announcement-btn">{button_text}</button>
      </div>
    </article>
  )
}

export default AnnounvementCard
