import React from "react";
import instagramIcon from "../images/instagram-icon.png"
import twitterIcon from "../images/twitter-icon.png"
import facebookIcon from "../images/facebook-icon.png"
import sendArrow from "../images/send-arrow.png"

export function HelpLinks({classes}){
    return(
        <>
            <a href="#" className={classes + " help__link"}>Shipping</a>
            <a href="#" className={classes + " help__link"}>Return Policy</a>
            <a href="#" className={classes + " help__link"}>Maintenance Guide</a>
            <a href="#" className={classes + " help__link"}>Contact Us</a>
            <a href="#" className={classes + " help__link"}>FAQ</a>
        </>
    )
}

export function SocialLinks({classes}){
    return(
        <>
            <a href="#" className={classes + " social__link"}>
                <img src={instagramIcon} alt="Instagram" className="w-6" />
            </a>
            <a href="#" className={classes + " social__link"}>
                <img src={facebookIcon} alt="Facebook" className="w-6" />
            </a>
            <a href="#" className={classes + " social__link"}>
                <img src={twitterIcon} alt="Twitter" className="w-6" />
            </a>
        </>
    )
}

export function Newsletter(){
    return (
        <div className="flex items-stretch border border-black rounded-md px-2">
            <input type="email" placeholder="yourname@example.com" className="w-5/6 pl-1 pr-2 py-2 outline-0 border-none text-xs"></input>
            <button className="w-1/6 active:translate-x-1 transition-transform ">
                <img src={sendArrow} alt="Send" className="w-full" />
            </button>
        </div>
    )
}
