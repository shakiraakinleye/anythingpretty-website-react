import React from "react";

function Review({reviewMessage, reviewerName, reviewerLocation}){
    return(
        <div className="slide">
          <div className="review">
            <blockquote className="review__body">
                {reviewMessage}
            </blockquote>

            <div className="review__footer">
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
        <section className="section__reviews bg-black text-white py-10">
            <div className="slider page--width">
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

                <button className="slider__btn slider__btn--left">
                <img src="images/left-arrow.png" alt="left-arrow" />
                </button>

                <button className="slider__btn slider__btn--right">
                <img src="images/right-arrow.png" alt="right-arrow" />
                </button>
            </div>
        </section>
    )
}