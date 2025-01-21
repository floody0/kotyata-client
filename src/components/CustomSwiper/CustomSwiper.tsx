"use client";
import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CustomSwiper.module.css";

type Slide = {
    img: string;
    alt: string;
};

interface Slides {
    slides: Slide[];
    className?: string;
}

function CustomSwiper({slides, className}: Slides) {

    return (
        <div className={styles.swiperWrapper}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                    nextEl: `.${styles.swiperButtonNext}`,
                    prevEl: `.${styles.swiperButtonPrev}`,
                }}
                pagination={{
                    clickable: true,
                    el: `.${styles.customPagination}`,
                }}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className={`${styles.swiper} ${className}`}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.alt}>
                        <img className={styles.swiperSlide} src={slide.img} alt={slide.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
                <div className={styles.swiperButtonPrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
                </div> 
                <div className={styles.swiperButtonNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                </div>
                <div className={styles.customPagination}></div>
        </div>
    );
}

export default CustomSwiper;
