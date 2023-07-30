import React from 'react'

import cardData from './cardData'
import AnnouncementCard from './AnnouncementCard'

import './Announcements.css'

const Announcements = () => {
  return (
    <div>
      <section className="announcement-container">
        <p>Announcements</p>
        <div className="announcement-cards-container">
          {cardData.map((card, index) => {
            return <AnnouncementCard key={index} {...card} />
          })}
        </div>
      </section>
    </div>
  )
}

export default Announcements
