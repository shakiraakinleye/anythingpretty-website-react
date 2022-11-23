import React from "react";
import { HelpLinks } from "./Links";

export function NoticeBanner(){
    return (
        <div className="bg-black flex justify-center py-3 sm:py-4 border-b-2 border-solid border-b-[#c8c8c8]">
            <p className="relative w-fit text-white uppercase text-xs">
                5% discount on all orders above ₦20,000.00 
            </p>
        </div>
    )
}
 

export function HelpBanner(){
    return (
        <div className="bg-[#dcdcdc] flex justify-center sm:justify-end px-4 sm:px-8 lg:px-16 border-b-2 border-solid border-b-[#c8c8c8]">
            <div className="w-full py-3 flex flex-wrap justify-between sm:gap-6 sm:w-max text-xs">
                <HelpLinks 
                classes={"text-[#282828] hover:text-[#505050]"}
                />
            </div>
        </div>
    )
}