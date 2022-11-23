import React from "react";
import leftArrow from "../images/left-arrow.png"
import rightArrow from "../images/right-arrow.png"
import "../styles/Homepage.css"

function Review({reviewMessage, reviewerName, reviewerLocation}){
    return(
        <div className="slide absolute top-0 left-0 w-full h-24 flex justify-center items-center transform transition-transform">
          <div className="review w-3/4 py-4 text-center ">
                <blockquote className="review__body mb-2">
                    {reviewMessage}
                </blockquote>

                <div className="review__footer flex justify-center gap-2 ">
                    <span>
                        {reviewerName}
                    </span>
                    <span>
                        ● {reviewerLocation}
                    </span>
                </div>
          </div>
        </div>
    )
}

export function ReviewSection(){
    return(
        <section className="section__reviews bg-black text-white py-32 sm:py-24 ">
            <div className="slider relative w-11/12 h-24 px-4 sm:px-8 lg:px-16 mx-auto overflow-hidden ">
                <Review 
                reviewMessage={"The accessories are super stylish and minimalist. The earrings I got are lightweight just as advertised"}
                reviewerName={"Temilade"}
                reviewerLocation={"Lagos, NG"}
                />

                <Review 
                reviewMessage={"The necklace set I got is so pretty and long-lasting. I definitely got my money's worth"}
                reviewerName={"Nenye"}
                reviewerLocation={"Ogun, NG"}
                />

                <Review 
                reviewMessage={"AP is my forever plug! I just love the pieces, they are so pretty and comfy!"}
                reviewerName={"Faith"}
                reviewerLocation={"Abuja, NG"}
                />

                <button className="slider__btn slider__btn--left absolute top-1/3 left-1 sm:left-8 lg:left-12 p-2 z-10 border-none text-black translate-x-1">
                    <img src={leftArrow} alt="left-arrow" className="w-6" />
                </button>

                <button className="slider__btn slider__btn--right absolute top-1/3 right-1 sm:right-8 lg:right-12 p-2 z-10 border-none text-black -translate-x-1">
                    <img src={rightArrow} alt="right-arrow" className="w-6" />
                </button>
            </div>
        </section>
    )
}