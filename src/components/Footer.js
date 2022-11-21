import React from "react";
import { HelpLinks, SocialLinks } from "./Links";

export function Footer(){
 return(
    <footer className="footer pt-5 pb-10 bg-white text-black">    
      <div className="footer__body page--width">

        <div className="footer__logo">
            <a href="index.html">
            <img src="images/ap-favicon.png" alt="Brand" />
            </a>
        </div>

        <div className="footer__content">
          <div className="footer__about">
            <h1 className="footer__about__heading footer__heading">
              About Us
            </h1>
            <p>
              At Anythingpretty, we believe being fashionable does not necessarily have to cost an arm 
              and a leg, so we curate stylish, timeless, and minimalist accessories and deliver them to 
              our customers at an affordable price. 
            </p>
          </div>

          <div className="footer__help">
            <h1 className="footer__help__heading footer__heading">
              Customer Care
            </h1>
            <div className="footer__help__links">
                <HelpLinks />
            </div>
          </div>

          <div className="footer__social">
            <h1 className="footer__social__heading footer__heading">
              Follow Us
            </h1>
            <div className="footer__social__links">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="footer__copyright">
          © ANYTHINGPRETTY.NG 2022
        </div>

        <div className="footer__signature font-semibold text-center">
          Designed and developed by Shakira Akinleye
        </div>
      </div>
    </footer>
 )   
}