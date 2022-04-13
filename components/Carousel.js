/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carousel({ images }) {
	return (
		<div className="flex justify-center 2xl:container 2xl:mx-auto">
			<div className="w-full">
				{/* Carousel for Small-Sized Screen */}
				<CarouselProvider
					className="relative block sm:hidden"
					naturalSlideWidth={100}
					isIntrinsicHeight={true}
					totalSlides={3}
					visibleSlides={1}
					step={1}
					infinite={true}
				>
					<div className="js-flickity flex items-center justify-center">
						<ButtonBack
							role="button"
							aria-label="slide backward"
							className="absolute left-0 z-30 ml-8 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 md:h-14 md:w-14"
							id="prev"
						>
							<svg
								width={8}
								height={14}
								viewBox="0 0 8 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7 1L1 7L7 13"
									stroke="black"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</ButtonBack>
						<Slider>
							<Slide index={0}>
								<div className="gallery-cell mr-6 h-full w-full sm:w-96 lg:mr-7 lg:w-1/2">
									<div className="relative hidden h-full w-full lg:block">
										<img
											src={images[0].url}
											alt="sitting area"
											className="h-full w-full object-cover object-center"
										/>
										<div className="absolute left-0 bottom-0 pl-6 pb-6 lg:pl-8 lg:pb-8">
											<h1 className="text-xl font-medium leading-5 text-white lg:text-2xl lg:leading-normal">
												{images[0].name}
											</h1>
										</div>
									</div>
									<div className="relative h-full w-full lg:hidden">
										<img
											src={images[0].url}
											alt="sitting area"
											className="h-full w-full object-cover object-center"
										/>
										<div className="absolute left-0 bottom-0 pl-6 pb-6 lg:pl-8 lg:pb-8">
											<h1 className="text-xl font-medium leading-5 text-white lg:text-2xl lg:leading-normal">
												{images[0].name}
											</h1>
										</div>
									</div>
								</div>
							</Slide>
						</Slider>
						<ButtonNext
							role="button"
							aria-label="slide forward"
							className="absolute right-0 z-30 mr-8 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 md:h-14 md:w-14"
							id="next"
						>
							<svg
								width={8}
								height={14}
								viewBox="0 0 8 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1L7 7L1 13"
									stroke="black"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</ButtonNext>
					</div>
				</CarouselProvider>

				{/* Carousel for Medium and Large-Sized Screen */}
				<CarouselProvider
					className="relative hidden sm:block"
					naturalSlideWidth={100}
					isIntrinsicHeight={true}
					totalSlides={3}
					visibleSlides={1}
					step={1}
					infinite={true}
					currentSlide={1}
				>
					<div className="js-flickity flex items-center justify-center">
						<ButtonBack
							role="button"
							aria-label="slide backward"
							className="absolute left-0 z-30 ml-8 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 md:h-14 md:w-14"
							id="prev"
						>
							<svg
								width={8}
								height={14}
								viewBox="0 0 8 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7 1L1 7L7 13"
									stroke="black"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</ButtonBack>
						<Slider className="carousel__sliderLarge">
							{images.map((image, index) => (
								<>
									<Slide className="carousel__inner-slideLarge" index={index}>
										<div className="gallery-cell mr-6 h-full w-full sm:w-96 lg:mr-7 lg:w-1/2">
											<div className="relative hidden h-full w-full lg:block">
												<img
													src={image.url}
													alt="sitting area"
													className="h-full w-full object-cover object-center"
												/>
												<div className="absolute left-0 bottom-0 pl-6 pb-6 lg:pl-8 lg:pb-8">
													<h1 className="text-xl font-medium leading-5 text-white lg:text-2xl lg:leading-normal">
														{image.name}
													</h1>
												</div>
											</div>
											<div className="relative h-full w-full lg:hidden">
												<img
													src={image.url}
													alt="sitting area"
													className="h-full w-full object-cover object-center"
												/>
												<div className="absolute left-0 bottom-0 pl-6 pb-6 lg:pl-8 lg:pb-8">
													<h1 className="text-xl font-medium leading-5 text-white lg:text-2xl lg:leading-normal">
														{image.name}
													</h1>
												</div>
											</div>
										</div>
									</Slide>
								</>
							))}
						</Slider>
						<ButtonNext
							role="button"
							aria-label="slide forward"
							className="absolute right-0 z-30 mr-8 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 md:h-14 md:w-14"
							id="next"
						>
							<svg
								width={8}
								height={14}
								viewBox="0 0 8 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1L7 7L1 13"
									stroke="black"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</ButtonNext>
					</div>
				</CarouselProvider>
			</div>

			<style>
				{`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 286px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
			</style>
		</div>
	);
}
