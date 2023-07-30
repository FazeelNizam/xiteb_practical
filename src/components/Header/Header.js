import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'
import Collapse from 'react-bootstrap/Collapse'

import { BsChevronRight } from 'react-icons/bs'

import Logo from '../../img/dfcclogo.svg'
import { LocationPin, Lock, SerchIcon } from '../icons'
import { PhoneIcon } from '../icons'
import { BiCaretDown } from 'react-icons/bi'

import './Header.css'

const Header = () => {
  const [isTopMenu, setTopMenu] = useState(false)
  const [isBottomMenu, setBottomMenu] = useState(false)
  const [isMenu, setMenu] = useState(false)
  const [isActive, setActive] = useState('Eng')

  const setToggle = () => {
    setMenu(!isMenu)
    setBottomMenu(false)
    setTopMenu(false)
  }

  return (
    <Navbar variant="light" bg="light" expand="sm">
      <Container fluid>
        <Navbar.Brand href="#home">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav>
            <NavDropdown
              id="nav-dropdown"
              title="About Us"
              menuVariant="light"
              className="btn-drop"
            >
              <span>
                <BsChevronRight /> Overview
              </span>
              <Dropdown.Divider />
              <div className="drop-down-list">
                <div className="list-right">
                  <NavDropdown.Item href="#">
                    the history of DFCC bank
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">vision & mission</NavDropdown.Item>
                  <NavDropdown.Item href="#">milestones</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Corporate Management
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Corporate Information
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Debenture Issuance
                  </NavDropdown.Item>
                </div>
                <div className="list-left">
                  <NavDropdown.Item href="#">brand story</NavDropdown.Item>
                  <NavDropdown.Item href="#">DFCC group</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    board of directors
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">recognition</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    investor relations
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">company policies</NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown"
              title="careers"
              menuVariant="light"
              className="btn-drop"
            >
              <span>
                <BsChevronRight /> Overview
              </span>
              <Dropdown.Divider />
              <div className="drop-down-list">
                <div className="list-right">
                  <NavDropdown.Item href="#">Life at DFCC</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Corporate Social Responsibility
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Career Opportunities at DFCC
                  </NavDropdown.Item>
                </div>
                <div className="list-left">
                  <NavDropdown.Item href="#">
                    Growing With The Bank
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Recruitment</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Management Trainee Program
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown"
              title="Sustainability"
              menuVariant="light"
              className="btn-drop"
            >
              <span>
                <BsChevronRight /> Overview
              </span>
              <Dropdown.Divider />
              <div className="drop-down-list">
                <div className="list-right">
                  <NavDropdown.Item href="#">
                    DFCC contributing to Resilience
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    DFCC Sustainability Trust
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <p>Our six cross cutting themes </p>
                    <p>– The 6 Es</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <p>Social & Environment Management</p>
                    <p>System (SEMS)</p>
                  </NavDropdown.Item>
                </div>
                <div className="list-left">
                  <NavDropdown.Item href="#">
                    DFCC Sustainability Strategy
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <p>Sustainability Management</p>
                    <p>for implementation</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <p>Gender Diversity & Inclusion at</p>
                    <p>DFCC Bank</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    <p>Sustainability Awards and</p>
                    <p>Achievements</p>
                  </NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown"
              title="Media"
              menuVariant="light"
              className="btn-drop"
            >
              <span>
                <BsChevronRight /> Overview
              </span>
              <Dropdown.Divider />
              <div className="drop-down-list">
                <div className="list-right">
                  <NavDropdown.Item href="#">Press Releases</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Product Commercials
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Blogs</NavDropdown.Item>
                </div>
                <div className="list-left">
                  <NavDropdown.Item href="#">
                    Financial Press Releases
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Video Podcasts</NavDropdown.Item>
                </div>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <section className="right-section">
          <div className="language-selection">
            <ul>
              <li>
                <a
                  href="#Eng"
                  onClick={() => {
                    setActive('Eng')
                  }}
                  className={
                    isActive === 'Eng' ? 'selected-lang lang-btn' : 'lang-btn'
                  }
                >
                  E
                </a>
              </li>
              <li>
                <a
                  href="#සි"
                  onClick={() => {
                    setActive('සි')
                  }}
                  className={
                    isActive === 'සි' ? 'lang-btn selected-lang' : 'lang-btn'
                  }
                >
                  සි
                </a>
              </li>
              <li>
                <a
                  href="#த"
                  onClick={() => {
                    setActive('த')
                  }}
                  className={
                    isActive === 'த' ? 'lang-btn selected-lang' : 'lang-btn'
                  }
                >
                  த
                </a>
              </li>
            </ul>
          </div>
          <div className="search-icon">
            <span>
              <SerchIcon />
            </span>
          </div>
          <div className="right-btn-section">
            <div className="btn-gray">
              <button className="locate-btn">
                <LocationPin />
                <span>Locate Us</span>
              </button>
              <button className="contact-btn">
                <PhoneIcon />
                <span>Contact Us</span>
              </button>
            </div>
            <div className="btn-red">
              <button className="login-btn" onClick={setToggle}>
                <Lock className="lock" />
                <span>Login</span>
                <BiCaretDown className="arrow" />
              </button>
              {isMenu && (
                <div className="login-menu">
                  <div className="sub-menu-container">
                    <div className="sub-menu-items">
                      <div className="sub-menu-heading">Personal Banking</div>
                      <div className="sub-menu-link1">
                        <div className="loginmenu-image-container">
                          <img
                            src="https://www.dfcc.lk/wp-content/uploads/2021/05/wallet.png"
                            alt=""
                          />
                        </div>
                        <p>Personal Online Banking</p>
                      </div>
                      <div
                        className="sub-menu-drop"
                        onClick={() => {
                          setTopMenu(!isTopMenu)
                        }}
                      >
                        <div className="loginmenu-image-container">
                          <img
                            src="https://www.dfcc.lk/wp-content/uploads/2021/05/wallet.png"
                            alt=""
                          />
                        </div>
                        <p>Download DFCC Wallet</p>
                      </div>
                      <Collapse in={isTopMenu}>
                        <div
                          className="download-link-container"
                          id="collapseID"
                        >
                          <img
                            className="download-links"
                            src="https://www.dfcc.lk/wp-content/themes/dfccbank/assets/images/ib/playstore.png"
                            alt=""
                          />
                          <img
                            className="download-links"
                            src="https://www.dfcc.lk/wp-content/themes/dfccbank/assets/images/ib/appstore.png"
                            alt=""
                          />
                          <img
                            className="download-links"
                            src="https://www.dfcc.lk/wp-content/themes/dfccbank/assets/images/ib/appgallery.png"
                            alt=""
                          />
                        </div>
                      </Collapse>
                      <div className="sub-menu-heading">Corporate Banking</div>
                      <div className="sub-menu-link1">
                        <div className="loginmenu-image-container">
                          <img
                            src="https://www.dfcc.lk/wp-content/uploads/2021/05/wallet.png"
                            alt=""
                          />
                        </div>
                        <p>Personal iConnect</p>
                      </div>
                      <div
                        className="sub-menu-drop"
                        onClick={() => {
                          setBottomMenu(!isBottomMenu)
                        }}
                      >
                        <div className="loginmenu-image-container">
                          <img
                            src="https://www.dfcc.lk/wp-content/uploads/2021/05/wallet.png"
                            alt=""
                          />
                        </div>
                        <p>Download DFCC iConnect App</p>
                      </div>
                      <Collapse in={isBottomMenu}>
                        <div
                          className="download-link-container"
                          id="collapseID"
                        >
                          <img
                            className="download-links"
                            src="https://www.dfcc.lk/wp-content/themes/dfccbank/assets/images/ib/playstore.png"
                            alt=""
                          />
                          <img
                            className="download-links"
                            src="https://www.dfcc.lk/wp-content/themes/dfccbank/assets/images/ib/appstore.png"
                            alt=""
                          />
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </Container>
    </Navbar>
  )
}

export default Header
