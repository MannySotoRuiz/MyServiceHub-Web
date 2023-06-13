"use client";

import { FC } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { swiperData, sliderSettings } from "@/lib/utils/swiperData";
import Image from "next/image";

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons gap-2">
      {/* <button
        className="text-[19.2px] py-[3.2px] px-[12.8px] text-blue-600 border-none rounded-[5px] bg-white cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        &lt;
      </button>
      <button
        className="text-[19.2px] py-[3.2px] px-[12.8px] text-blue-600 border-none rounded-[5px] bg-white cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        &gt;
      </button> */}
      <button
        type="button"
        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl px-3 py-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        onClick={() => swiper.slidePrev()}
      >
        &lt;
        <span className="sr-only">Icon description</span>
      </button>
      <button
        type="button"
        className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl px-3 py-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        onClick={() => swiper.slideNext()}
      >
        &gt;
        <span className="sr-only">Icon description</span>
      </button>
    </div>
  );
};

interface FeaturedRowProps {}

const FeaturedRow: FC<FeaturedRowProps> = ({}) => {
  return (
    <div className="paddings innerWidth r-container">
      <div className="mb-[32px] flexColStart">
        <span className="orangeText">Best Choices</span>
        <span className="primaryText">Popular Residencies</span>
      </div>

      <Swiper {...sliderSettings}>
        <SliderButtons />
        {swiperData.map((card, idx) => (
          <SwiperSlide key={idx}>
            <div className="r-card flexColStart relative gap-[9.6px] p-[16px] rounded-[10px] m-auto max-w-max">
              <Image
                src={card.image}
                alt={card.name}
                width={200}
                height={100}
                className="w-full max-w-[240px]"
              />

              <span className="r-price text-[19.2px] text-[rgb(140,139,139)] font-semibold">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
              </span>

              <span className="text-[#1f3e72] font-bold text-[24px]">
                {card.name}
              </span>
              <span className="text-[rgb(140,139,139)] text-[11.2px] w-[240px]">
                {card.detail}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedRow;
