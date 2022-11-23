import React from "react";
import { Link } from "react-router-dom";
import { HelpLinks, SocialLinks } from "./Links";
import brandLogo from "../images/ap-favicon.png";
import "../styles/Footer.css"

export function Footer(){
 return(
    <footer className="pb-10 bg-white text-black ">    
      <div className="px-4 sm:px-8 lg:px-16 pt-5">

        <div className="pb-2 mb-2 border-b-2 border-solid border-b-[#c8c8c8]">
          <Link to={"/"}>
            <img src={brandLogo} alt="Brand Logo" className="w-16 sm:w-20" />
          </Link>
        </div>

        <div className="footer__content flex flex-col gap-3 sm:grid sm:gap-5 lg:gap-40 px-2 mb-8">
          <div>
            <h1 className="mb-2 font-semibold text-base">
              About Us
            </h1>
            <p className="leading-relaxed ">
              At Anythingpretty, we believe being fashionable does not necessarily have to cost an arm 
              and a leg, so we curate stylish, timeless, and minimalist accessories and deliver them to 
              our customers at an affordable price. 
            </p>
          </div>

          <div>
            <h1 className="mb-2 font-semibold text-base">
              Customer Care
            </h1>
            <div className="flex flex-col gap-1">
                <HelpLinks 
                classes={"text-[#505050] hover:text-[#969696]"}
                />
            </div>
          </div>

          <div>
            <h1 className="mb-2 font-semibold text-base">
              Follow Us
            </h1>
            <div className="flex flex-col gap-1">
              <SocialLinks 
                classes={"text-[#505050] hover:text-[#969696]"}
              />
            </div>
          </div>
        </div>

        <div className="px-2 mb-12 font-semibold text-xs">
          © ANYTHINGPRETTY.NG 2022
        </div>

        <div className="px-2 font-semibold text-xs text-center">
          Designed and Developed by Shakira Akinleye
        </div>
      </div>
    </footer>
 )   
}