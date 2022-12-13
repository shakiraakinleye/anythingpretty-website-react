import React, { useContext, useState }  from "react";
import { ReviewsContext } from "../scripts/DataContext";
import leftArrow from "../images/left-arrow.png"
import rightArrow from "../images/right-arrow.png"
import "../styles/Homepage.css"


function Review({review}){


    if (review === undefined){
        return;
    } else {
        return(
            <div className='w-full flex justify-center items-center'>
                <div className="slide w-3/4 h-48 flex flex-col justify-between bg-white text-black py-8 px-4 text-center rounded-md transform " >

                    <blockquote className="review__body pb-2">
                        {review.message}
                    </blockquote>
    
                    <div className="flex justify-center font-semibold gap-3 ">
                        <span>
                            {review.name}
                        </span>

                        <span>
                            ● {review.state}
                        </span>
                    </div>
              </div>
            </div>
        )    
    }
}


export function ReviewSection(){
    const [slide, setSlide] = useState(1);
    
    const reviews = useContext(ReviewsContext);
    let reviewsMap = new Map();
    Object.entries(reviews).forEach((review) => {
        const key = Number(review[0]);
        const value = review[1];
        reviewsMap.set(key, value)
    })

    const maxSlides = reviewsMap.size;

    function nextSlideHandler(){
        if (slide === maxSlides) {
            setSlide(1) 
        } else {
            setSlide(slide + 1);
        }
    }

    function prevSlideHandler(){
        if (slide === 1) {
            setSlide(maxSlides) 
        } else {
            setSlide(slide - 1);
        }
    }

    return(
        <section className="bg-black text-white py-28 sm:py-20">
            <div className="relative w-11/12 px-4 sm:px-8 lg:px-16 mx-auto ">

                <Review 
                    review={reviewsMap.get(slide)}
                />

                <button className=" absolute top-1/3 left-1 sm:left-8 lg:left-12 p-2 z-10 border-none text-black translate-x-1"
                    onClick={prevSlideHandler}
                >
                    <img src={leftArrow} alt="left-arrow" className="w-6" />
                </button>

                <button className="absolute top-1/3 right-1 sm:right-8 lg:right-12 p-2 z-10 border-none text-black -translate-x-1"
                    onClick={nextSlideHandler}
                >
                    <img src={rightArrow} alt="right-arrow" className="w-6" />
                </button>
            </div>
        </section>
    )
}