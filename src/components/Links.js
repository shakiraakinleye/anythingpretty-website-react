import React from "react";

export function HelpLinks({classes}){
    return(
        <>
            <a href="www.google.com" className={classes + " help__link"}>Shipping</a>
            <a href="www.google.com" className={classes + " help__link"}>Return Policy</a>
            <a href="www.google.com" className={classes + " help__link"}>Maintenance Guide</a>
            <a href="www.google.com" className={classes + " help__link"}>Contact Us</a>
            <a href="www.google.com" className={classes + " help__link"}>FAQ</a>
        </>
    )
}

export function SocialLinks({classes}){
    return(
        <>
            <a href="www.google.com" className={classes + " social__link"}>Instagram</a>
            <a href="www.google.com" className={classes + " social__link"}>Facebook</a>
            <a href="www.google.com" className={classes + " social__link"}>Twitter</a>
            <a href="www.google.com" className={classes + " social__link"}>Newsletter</a>
        </>
    )
}