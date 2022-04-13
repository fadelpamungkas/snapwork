/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carousel({ images }) {
	return (
		<div className="flex justify-center 2xl:container 2xl:mx-auto">
			<div className="w-full">
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, A11y]}
					centeredSlides={true}
					spaceBetween={10}
					slidesPerView={2}
					navigation
					pagination={{ clickable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
					className="w-full"
				>
					{images.map((image, i) => (
						<SwiperSlide key={i} className="w-full">
							<Image
								src={image.url}
								alt={image.name}
								layout="responsive"
								width={100}
								height={100}
								className="rounded-xl"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
