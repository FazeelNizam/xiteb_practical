import React from 'react'

import { BiPlayCircle } from 'react-icons/bi'

import WelcomeImage from '../../img/welcome-image.jpg'

import './Welcome.css'
import { useState } from 'react'

const Welcome = () => {
  const [isVedio, setVideo] = useState(false)

  return (
    <section className="welcome-section">
      <div className="layout-container">
        <section className="general-view">
          <div className="video-container">
            <div className="welcome-video">
              {!isVedio && <img src={WelcomeImage} alt="" />}
              {isVedio && (
                <iframe
                  src="https://www.youtube.com/embed/TvjU7i-sT_E?rel=0&mute=1&autoplay=1&loop=1"
                  frameborder="0"
                  allow="autoplay"
                ></iframe>
              )}
              {!isVedio && (
                <button
                  className="video-play-btn"
                  onClick={() => setVideo(!isVedio)}
                >
                  <BiPlayCircle />
                </button>
              )}
            </div>
            <article className="text-box-container">
              <div className="text-box">
                <p>Saving for your family in an ethical way</p>
                <span>
                  Al Rayan Bank helps its customers to own their own homes, save
                  for their families' futures and expand their businesses
                  without compromising their faith or their values. This is
                  Neil's story.
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* mobile view */}
        <section className="mobile-welcome-section">
          <div className="video-container-mobile">
            <div className="welcome-video-mobile">
              {!isVedio && <img src={WelcomeImage} alt="" />}
              {isVedio && (
                <iframe
                  src="https://www.youtube.com/embed/TvjU7i-sT_E?rel=0&mute=1&autoplay=1&loop=1"
                  frameborder="0"
                  allow="autoplay"
                ></iframe>
              )}
              {!isVedio && (
                <button
                  className="video-play-btn"
                  onClick={() => setVideo(!isVedio)}
                >
                  <BiPlayCircle />
                </button>
              )}
            </div>

            <article className="text-box-container-mobile">
              <div className="text-box-mobile">
                <p>Saving for your family in an ethical way</p>
                <span>
                  Al Rayan Bank helps its customers to own their own homes, save
                  for their families' futures and expand their businesses
                  without compromising their faith or their values. This is
                  Neil's story.
                </span>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Welcome
