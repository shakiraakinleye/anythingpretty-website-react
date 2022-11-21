import React from "react";
import { HelpLinks } from "./Links";

export function NoticeBanner(){
    return (
        <div className="banner__announcement">
            <p className="banner__announcement__content">
                5% discount on all orders above ₦20,000.00 
            </p>
        </div>
    )
}


export function HelpBanner(){
    return (
        <div className="banner__help page--width">
            <div className="banner__help__links w-full py-3 flex flex-wrap justify-between">
                <HelpLinks />
            </div>
        </div>
    )
}