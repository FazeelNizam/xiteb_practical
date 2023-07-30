import React, { useState } from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import { motion } from 'framer-motion'

import {
  AccessibilityIcon,
  ZoomInIcon,
  ZoomOutIcon,
  GrayScaleIcon,
  HighContrastIcon,
  NegativeContrastIcon,
  LinkIcon,
  FontIcon,
  ResetIcon,
  SiteMapIcon,
  FeedbackIcon,
  BellIcon,
} from '../icons'
import BannerOne from '../../img/dfcchome.jpg'
import BannerTwo from '../../img/Banner-2.jpg'
import BannerThree from '../../img/Banner-3.jpg'
import BannerFour from '../../img/Banner-4.jpg'
import BannerFive from '../../img/Banner-5.jpg'
import BannerSix from '../../img/Banner-6.jpg'
import BannerSeven from '../../img/Banner-7.jpg'
import Hamberger from '../../img/hamburger-menu.svg'

import Facebook from '../../img/facebook.png'
import Twitter from '../../img/twitter.png'
import Linkedin from '../../img/linkedin.png'
import Youtube from '../../img/youtube.png'
import Insta from '../../img/instagram.png'
import Whatsapp from '../../img/whatsapp.png'

import './Slider.css'

const Slider = () => {
  const [isDrop, setDrop] = useState(false)
  const [isAccessibility, setAccessibility] = useState(false)
  const [isNotification, setNotification] = useState(true)
  return (
    <section className="slider-container">
      <Container>
        <Row>
          <Col>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <header className="slider-navbar">
                <div className="left-section">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-left align-items-center"
                    id="pills-tab"
                    onClick={() => setDrop(false)}
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Cards</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">DFCC Pinnacle</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Digital Banking</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">Corporate</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">SME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="seventh" className="last-link">
                        International
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="slider-nav-right-section">
                  <button
                    className="notification-btn"
                    onClick={() => {
                      setNotification(!isNotification)
                    }}
                  >
                    <BellIcon />
                    {isNotification && <span></span>}
                  </button>
                  {!isNotification && (
                    <section className="notifications-panel-container">
                      <div className="notifications-panel-inner-container">
                        <article className="notification-container container-one">
                          <div className="notification-content">
                            <p>Open Account Online</p>
                            <span>
                              Redefining convenience in opening a Bank account
                              online
                            </span>
                            <button className="notification-apply-btn">
                              Apply Now
                            </button>
                          </div>
                        </article>
                        <article className="notification-container container-two">
                          <div className="notification-content">
                            <p>Open Account Online</p>
                            <span>
                              Redefining convenience in opening a Bank account
                              online
                            </span>
                            <button className="notification-apply-btn">
                              Apply Now
                            </button>
                          </div>
                        </article>
                        <article className="notification-container container-three">
                          <div className="notification-content">
                            <p>Open Account Online</p>
                            <span>
                              Redefining convenience in opening a Bank account
                              online
                            </span>
                            <button className="notification-apply-btn">
                              Apply Now
                            </button>
                          </div>
                        </article>
                      </div>
                      <span className="notification-arrow"></span>
                    </section>
                  )}
                </div>

                <section
                  className={
                    isAccessibility
                      ? 'accessibility-section accessibility-section-show'
                      : 'accessibility-section'
                  }
                >
                  <div className="accessibility-text-container">
                    <p>Accessibility Tools</p>
                    <ul>
                      <li>
                        <ZoomInIcon />
                        Increase text
                      </li>
                      <li>
                        <ZoomOutIcon />
                        decrease text
                      </li>
                      <li>
                        <GrayScaleIcon />
                        grayscale
                      </li>
                      <li>
                        <HighContrastIcon />
                        high contrast
                      </li>
                      <li>
                        <NegativeContrastIcon />
                        negative contrast
                      </li>
                      <li>
                        <LinkIcon />
                        links underline
                      </li>
                      <li>
                        <FontIcon />
                        readable font
                      </li>
                      <li>
                        <ResetIcon />
                        reset
                      </li>
                      <hr />
                      <li>
                        <SiteMapIcon />
                        sitemap
                      </li>
                      <li>
                        <FeedbackIcon />
                        feedback
                      </li>
                    </ul>
                  </div>

                  <button
                    className="accessibility-btn"
                    onClick={() => {
                      setAccessibility(!isAccessibility)
                    }}
                  >
                    <AccessibilityIcon />
                  </button>
                </section>
              </header>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <div className="banner">
                      <img src={BannerOne} alt="" />
                      <articles className="banner-text-container">
                        <div className="text-container">
                          I want to
                          <span>know about</span>
                        </div>
                        <div className="banner-dropdown-container">
                          <button
                            className="banner-btn"
                            onClick={() => {
                              setDrop(!isDrop)
                            }}
                          >
                            Choose a topic
                            <div className="btn-image">
                              <img src={Hamberger} alt="" />
                            </div>
                          </button>
                          {isDrop && (
                            <div className="banner-dropdown">
                              <p>Personal Loans</p>
                              <p>Savings Accounts</p>
                              <p>DFCC Investment Palaner</p>
                              <p>Foreign Currency Accounts</p>
                              <p>Fixed Deposits</p>
                              <p>DFCC Pinnacle</p>
                              <p>Properties For Sale</p>
                            </div>
                          )}
                        </div>
                      </articles>
                    </div>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <div className="banner">
                      <img src={BannerTwo} alt="" />
                      <articles className="banner-text-container">
                        <div className="text-container">
                          I Want to
                          <span>Choose</span>
                        </div>
                        <div className="banner-dropdown-container">
                          <button
                            className="banner-btn"
                            onClick={() => {
                              setDrop(!isDrop)
                            }}
                          >
                            Choose a topic
                            <div className="btn-image">
                              <img src={Hamberger} alt="" />
                            </div>
                          </button>
                          {isDrop && (
                            <div className="banner-dropdown">
                              <p>A card that suits me</p>
                              <p>What are my offers/benefits</p>
                              <p>Debit Card</p>
                              <p>Loan on Card</p>
                              <p>Balance Transfer</p>
                              <p>Easy Payment Plan</p>
                            </div>
                          )}
                        </div>
                      </articles>
                    </div>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <div className="banner">
                      <img src={BannerThree} alt="" />
                      <articles className="banner-text-container">
                        <div className="text-container">
                          I Want to
                          <span>learn about</span>
                        </div>
                        <div className="banner-dropdown-container">
                          <button
                            className="banner-btn"
                            onClick={() => {
                              setDrop(!isDrop)
                            }}
                          >
                            Choose a topic
                            <div className="btn-image">
                              <img src={Hamberger} alt="" />
                            </div>
                          </button>
                          {isDrop && (
                            <div className="banner-dropdown">
                              <p>DFCC Pinnacle</p>
                              <p>DFCC Prestige</p>
                              <p>Pinnacle Loan</p>
                              <p>Visa Infinite Credit Card</p>
                            </div>
                          )}
                        </div>
                      </articles>
                    </div>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Row>
                    <div className="banner">
                      <img src={BannerFour} alt="" />
                      <articles className="banner-text-container">
                        <div className="text-container">
                          Banking
                          <span>on the go</span>
                        </div>
                        <div className="banner-dropdown-container">
                          <button
                            className="banner-btn"
                            onClick={() => {
                              setDrop(!isDrop)
                            }}
                          >
                            Choose a topic
                            <div className="btn-image">
                              <img src={Hamberger} alt="" />
                            </div>
                          </button>
                          {isDrop && (
                            <div className="banner-dropdown">
                              <p>Online Banking</p>
                              <p>DFCC Virtual Wallet</p>
                              <p>DFCC Alerts</p>
                              <p>eStatements</p>
                              <p>Local Payments</p>
                            </div>
                          )}
                        </div>
                      </articles>
                    </div>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <Row>
                    <div className="banner">
                      <img src={BannerFive} alt="" />
                      <articles className="banner-text-container">
                        <div className="text-container">
                          Help my business
                          <span>thrive with</span>
                        </div>
                        <div className="banner-dropdown-container">
                          <button
                            className="banner-btn"
                            onClick={() => {
                              setDrop(!isDrop)
                            }}
                          >
                            Choose a topic
                            <div className="btn-image">
                              <img src={Hamberger} alt="" />
                            </div>
                          </button>
                          {isDrop && (
                            <div className="banner-dropdown">
                              <p>Current Account</p>
                              <p>Project Financing</p>
                              <p>Trade Service</p>
                              <p>Leasing</p>
                              <p>Payment % Cash Management Solutions</p>
                            </div>
                          )}
                        </div>
                      </articles>
                    </div>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <Row>
                    <div className="banner">
                      <img src={BannerSix} alt="" />
                      <articles className="banner-text-container">
                        <div className="text-container">Help me grow</div>
                        <div className="banner-dropdown-container">
                          <button
                            className="banner-btn"
                            onClick={() => {
                              setDrop(!isDrop)
                            }}
                          >
                            Choose a topic
                            <div className="btn-image">
                              <img src={Hamberger} alt="" />
                            </div>
                          </button>
                          {isDrop && (
                            <div className="banner-dropdown">
                              <p>Current Accounts</p>
                              <p>Loan Schemes</p>
                              <p>Leasings</p>
                              <p>Bank Guarantees</p>
                            </div>
                          )}
                        </div>
                      </articles>
                    </div>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <Row>
                    <div className="banner">
                      <img src={BannerSeven} alt="" />
                      <articles className="banner-text-container">
                        <div className="text-container">
                          Make mu business
                          <span>go global</span>
                        </div>
                        <div className="banner-dropdown-container">
                          <button
                            className="banner-btn"
                            onClick={() => {
                              setDrop(!isDrop)
                            }}
                          >
                            Choose a topic
                            <div className="btn-image">
                              <img src={Hamberger} alt="" />
                            </div>
                          </button>
                          {isDrop && (
                            <div className="banner-dropdown">
                              <p>Trade Service</p>
                              <p>Export Service</p>
                              <p>Import Service</p>
                              <p>Correspondent Banking</p>
                              <p>Foreign Currency</p>
                              <p>Exchange Rates</p>
                            </div>
                          )}
                        </div>
                      </articles>
                    </div>
                  </Row>
                </Tab.Pane>
                <div className="left-link-container">
                  <motion.button
                    className="social-link"
                    whileHover={{
                      x: -80,
                      transition: { type: 'spring', stiffness: 30 },
                    }}
                  >
                    <motion.div
                      className="social-btn-image"
                      whileHover={{
                        rotate: 360,
                        transition: { stiffness: 10 },
                      }}
                    >
                      <img src={Facebook} alt="" />
                    </motion.div>
                    <span>Facebook</span>
                  </motion.button>
                  <motion.button
                    className="social-link"
                    whileHover={{
                      x: -80,
                      transition: { type: 'spring', stiffness: 30 },
                    }}
                  >
                    <motion.div
                      className="social-btn-image"
                      whileHover={{
                        rotate: 360,
                        transition: { stiffness: 10 },
                      }}
                    >
                      <img src={Twitter} alt="" />
                    </motion.div>
                    <span>Twitter</span>
                  </motion.button>
                  <motion.button
                    className="social-link"
                    whileHover={{
                      x: -80,
                      transition: { type: 'spring', stiffness: 30 },
                    }}
                  >
                    <motion.div
                      className="social-btn-image"
                      whileHover={{
                        rotate: 360,
                        transition: { stiffness: 10 },
                      }}
                    >
                      <img src={Linkedin} alt="" />
                    </motion.div>
                    <span>Linkedin</span>
                  </motion.button>
                  <motion.button
                    className="social-link"
                    whileHover={{
                      x: -80,
                      transition: { type: 'spring', stiffness: 30 },
                    }}
                  >
                    <motion.div
                      className="social-btn-image"
                      whileHover={{
                        rotate: 360,
                        transition: { stiffness: 10 },
                      }}
                    >
                      <img src={Youtube} alt="" />
                    </motion.div>
                    <span>Youtube</span>
                  </motion.button>
                  <motion.button
                    className="social-link"
                    whileHover={{
                      x: -80,
                      transition: { type: 'spring', stiffness: 30 },
                    }}
                  >
                    <motion.div
                      className="social-btn-image"
                      whileHover={{
                        rotate: 360,
                        transition: { stiffness: 10 },
                      }}
                    >
                      <img src={Insta} alt="" />
                    </motion.div>
                    <span>Instagram</span>
                  </motion.button>
                  <motion.button
                    className="social-link"
                    whileHover={{
                      x: -80,
                      transition: { type: 'spring', stiffness: 30 },
                    }}
                  >
                    <motion.div
                      className="social-btn-image"
                      whileHover={{
                        rotate: 360,
                        transition: { stiffness: 10 },
                      }}
                    >
                      <img src={Whatsapp} alt="" />
                    </motion.div>

                    <span>Whatsapp</span>
                  </motion.button>
                </div>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Slider
