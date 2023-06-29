import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from 'react-icons/bi';
const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px]
      mx-auto
    ">
      <Carousel
      autoPlay ={true}
    //   showIndicators={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
    //   renderArrowPrev={(clickHandler,hasPrev)=>(
    //   )}
    //   renderItem={false}
      >
                <div>
                    <img src="/slide-1.png" 
                    className="aspect-[16/10] md:aspect-auto" />
                    <div className="
                    px-[15px] md:px-[48px] py-[10px] md:py-[25px] font font-oswald
                    bg-white absolute bottom-[25px] md:bottom-[75px] left-0
                    text-c1 text-[15px] md:text-[30px] uppercase font-medium
                    cursor cursor-pointer hover:opacity-60 
                    ">Shop Now</div>
                </div>
                <div>
                    <img src="/slide-2.png" 
                    className="aspect-[16/10] md:aspect-auto" />
                    <div className="
                    px-[15px] md:px-[48px] py-[10px] md:py-[25px] font font-oswald
                    bg-white absolute bottom-[25px] md:bottom-[75px] left-0
                    text-c1 text-[15px] md:text-[30px] uppercase font-medium
                    cursor cursor-pointer  hover:opacity-60 
                    ">Shop Now</div>
                </div>
                <div>
                    <img src="/slide-3.png" 
                    className="aspect-[16/10] md:aspect-auto" />
                    <div className="
                    px-[15px] md:px-[48px] py-[10px] md:py-[25px] font font-oswald
                    bg-white absolute bottom-[25px] md:bottom-[75px] left-0
                    text-c1 text-[15px] md:text-[30px] uppercase font-medium
                    cursor cursor-pointer hover:opacity-60 
                    ">Shop Now</div>
                </div>
            </Carousel>
    </div>
  )
}

export default HeroBanner
