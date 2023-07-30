import React from 'react'

import { AiOutlineCaretRight } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoLocation } from 'react-icons/io5'
import { FaFax } from 'react-icons/fa'

import PlayStore from '../../img/playstore.png'
import AppStore from '../../img/appstore.png'
import Facebook from '../../img/facebook.png'
import Twitter from '../../img/twitter.png'
import Linkedin from '../../img/linkedin-white.png'
import Youtube from '../../img/youtube.png'
import Insta from '../../img/insta-white.png'

import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <section className="footer-link-container">
        <article className="footer-quick-links">
          <p>quick links</p>
          <ul>
            <li>
              <AiOutlineCaretRight />
              Aplication Downloads
            </li>
            <li>
              <AiOutlineCaretRight />
              General Banking Terms & Conditions
            </li>
            <li>
              <AiOutlineCaretRight />
              Tariff
            </li>
            <li>
              <AiOutlineCaretRight />
              Profit Sharing Ratios and Rates
            </li>
            <li>
              <AiOutlineCaretRight />
              Exchange Rates
            </li>
            <li>
              <AiOutlineCaretRight />
              Customer Charter
            </li>
            <li>
              <AiOutlineCaretRight />
              Key Fact Documents
            </li>
            <li>
              <AiOutlineCaretRight />
              Sitemap
            </li>
            <li>
              <AiOutlineCaretRight />
              Anual Report 2022
            </li>
            <li>
              <AiOutlineCaretRight />
              Supplier for Sale
            </li>
            <li>
              <AiOutlineCaretRight />
              Properties for Sale
            </li>
            <li>
              <AiOutlineCaretRight />
              Feedback and Complaints
            </li>
          </ul>
        </article>
        <article className="footer-download">
          <p>download online banking app</p>
          <div className="store-links">
            <img src={PlayStore} alt="" />
            <img src={AppStore} alt="" />
            <span>
              Our Online Banking application is not hosted in any third party
              stores except for the above
            </span>
          </div>
          <div className="swift-code">
            <p>swift code</p>
            <span>amnalklx</span>
          </div>
        </article>
        <article className="footer-social-links">
          <p>follow us</p>
          <ul>
            <li>
              <div className="image-container">
                <img src={Facebook} alt="" />
              </div>
              Facebook
            </li>
            <li>
              <div className="image-container">
                <img src={Insta} alt="" />
              </div>
              Instagram
            </li>
            <li>
              <div className="image-container">
                <img src={Twitter} alt="" />
              </div>
              Twitter
            </li>
            <li>
              <div className="image-container">
                <img src={Linkedin} alt="" />
              </div>
              Linkedin
            </li>
            <li>
              <div className="image-container">
                <img src={Youtube} alt="" />
              </div>
              YouTube
            </li>
          </ul>
        </article>
        <article className="footer-reachus">
          <div className="general-contacts">
            <p>reach us</p>
            <ul>
              <li>
                <AiOutlineCaretRight />
                Contact Us
              </li>
              <li>
                <AiOutlineCaretRight />
                Branch Network
              </li>
              <li>
                <AiOutlineCaretRight />
                Self Banking Centre Network
              </li>
            </ul>
            <ul className="contact-numbers">
              <li>
                <span>
                  <BsFillTelephoneFill /> Prestige Hotline +9411 775 6222
                </span>
              </li>
              <li>
                <span>
                  <BsFillTelephoneFill /> Vantage hotline +94117 756 789
                </span>
              </li>
              <li>
                <span>
                  <BsFillTelephoneFill /> Vantage hotline +94117 756 789
                </span>
              </li>
            </ul>
          </div>
          <div className="corporate-contact">
            <p>CORPORATE OFFICE</p>
            <ul>
              <li>
                <span>
                  <IoLocation />
                  486, Galle Road, Colombo 3
                </span>
              </li>
              <li>
                <span>
                  <BsFillTelephoneFill />
                  +94 117 756 756
                </span>
              </li>
              <li>
                <span>
                  <FaFax />
                  +94 112 574 419
                </span>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <hr />
      <div className="copy-rights">
        <span>
          Copyright © 2023 Amãna Bank PLC is a Licensed Commercial Bank approved
          and supervised by the Central Bank of Sri Lanka | Fitch Rating
          :BB+(lka) RWN Outlook (PB 3618 PQ)
        </span>
      </div>
    </footer>
  )
}

export default Footer
