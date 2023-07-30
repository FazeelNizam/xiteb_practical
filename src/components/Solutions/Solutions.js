import React from 'react'

import cardData from './cardData'
import SolutionCard from './SolutionCard'

import './Solutions.css'

const Solutions = () => {
  return (
    <section className="solution-container">
      <div className="solution-cards-container">
        {cardData.map((card, index) => {
          return <SolutionCard key={index} {...card} />
        })}
      </div>
    </section>
  )
}

export default Solutions
