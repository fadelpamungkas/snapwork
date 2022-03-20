/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState } from "react";
import FootNav from "../../components/FootNav";
import HeadNav from "../../components/HeadNav";

// export async function getStaticPaths() {
// 	return {
// 		paths: [{ params: { id: "1" } }],
// 		fallback: true, // false or 'blocking'
// 	};
// }

export async function getServerSideProps(context) {
	const id = context.query.id;
	const res = await fetch("https://snapwork.herokuapp.com/api/post/" + id);
	const getProduct = await res.json();
	const product = getProduct.data.data;
	return {
		props: {
			product,
		},
	};
}
export default function Product({ product }) {
	const router = useRouter();
	const { id } = router.query;

	console.log(product);

	return (
		<body className="dark:bg-gray-900">
			<HeadNav />
			<div className="py-9 px-4 md:py-12 md:px-6 lg:py-16 lg:px-20 2xl:container 2xl:mx-auto">
				<div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
					<div className="w-full items-center sm:w-96 md:w-8/12 lg:w-6/12">
						<p className="text-base font-normal leading-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:text-white">
							Home / Furniture / Wooden Stool
						</p>
						<h2 className="mt-4 text-3xl font-semibold leading-7 text-gray-800 dark:text-white lg:text-4xl lg:leading-9">
							{product.title}
						</h2>

						<div className="mt-5 flex flex-row justify-between">
							<img
								className="dark:hidden"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1.svg"
								alt="stars"
							/>
							<img
								className="hidden dark:block"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1dark.svg"
								alt="stars"
							/>
							<p className="cursor-pointer text-base font-normal leading-4 text-gray-700 duration-100 hover:text-gray-800 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:text-white">
								22 reviews
							</p>
						</div>

						<p className="mt-7 text-base font-normal leading-6 text-gray-600">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using. Lorem Ipsum is that it has a more-or-less normal
							distribution of letters.
						</p>
						<p className="mt-6 text-xl font-semibold leading-5 dark:text-white lg:text-2xl lg:leading-6">
							Rp{product.price}
						</p>

						<div className="mt-10 lg:mt-11">
							<div className="flex flex-row justify-between">
								<p className="text-base font-medium leading-4 text-gray-600">
									Select quantity
								</p>
								<div className="flex">
									<span className="flex h-7 w-7 cursor-pointer items-center justify-center border border-r-0 border-gray-300 pb-1 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:text-white">
										-
									</span>
									<input
										id="counter"
										v-model="counter"
										aria-label="input"
										className="h-full w-14 border border-gray-300 pb-1 text-center dark:bg-transparent dark:text-white"
										type="text"
									/>
									<span className="flex h-7 w-7 cursor-pointer items-center justify-center border border-l-0 border-gray-300 pb-1 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:text-white">
										+
									</span>
								</div>
							</div>
							<hr className="my-2 w-full bg-gray-200" />
							<div className="mt-4 flex flex-row items-center justify-between">
								<p className="text-base font-medium leading-4 text-gray-600">
									Dimensions
								</p>
								{/* <!-- <img
                                id="rotateSVG"
                                v-if="rotateimg == false"
                                className="transform cursor-pointer duration-100 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:hidden"
                                src="../svgs/svg4.svg"
                                alt="dropdown"
                            />
                            <img
                                id="rotateSVG"
                                v-if="rotateimg == true"
                                className="rotate-180 transform cursor-pointer duration-100 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:hidden"
                                src="../svgs/svg4.svg"
                                alt="dropdown"
                            /> --> */}
							</div>
							<hr className="mt-4 w-full bg-gray-200" />
						</div>

						<button className="mt-6 w-full bg-gray-800 py-5 text-base font-medium leading-4 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 lg:mt-12">
							Add to shopping bag
						</button>
					</div>

					<div className="flex w-full flex-col gap-4 sm:w-96 sm:gap-6 md:w-8/12 lg:w-6/12 lg:flex-row lg:gap-8">
						<div className="flex w-full items-center justify-center bg-gray-100 lg:w-8/12">
							<img
								src="https://i.ibb.co/bRg2CJj/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1.png"
								alt="Wooden Chair Previw"
							/>
						</div>
						<div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-4 lg:w-4/12 lg:grid-cols-1">
							<div className="flex items-center justify-center bg-gray-100 py-4">
								<img
									src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png"
									alt="Wooden chair - preview 1"
								/>
							</div>
							<div className="flex items-center justify-center bg-gray-100 py-4">
								<img
									src="https://i.ibb.co/7zv1N5Q/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-2.png"
									alt="Wooden chair - preview 2"
								/>
							</div>
							<div className="flex items-center justify-center bg-gray-100 py-4">
								<img
									src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png"
									alt="Wooden chair- preview 3"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-full items-center justify-center">
					<div className="mt-10 grid w-full grid-cols-1 gap-y-12 sm:mt-14 sm:w-96 sm:gap-x-6 sm:gap-y-12 md:w-8/12 md:grid-cols-2 lg:w-full lg:grid-cols-2 lg:gap-28">
						<div>
							<img
								className="dark:hidden"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg2.svg"
								alt="drink"
							/>
							<img
								className="hidden dark:block"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg2dark.svg"
								alt="drink"
							/>
							<p className="mt-9 text-xl font-semibold leading-5 text-gray-800 dark:text-white lg:mt-10">
								Great for drinks
							</p>
							<p className="text-normal mt-4 text-base leading-6 text-gray-600">
								Here are all the great cocktail recipes you should know how to
								make, from the margarita to the whiskey sour. Cheers!
							</p>
						</div>
						<div>
							<img
								className="dark:hidden"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg3.svg"
								alt="hardware"
							/>
							<img
								className="hidden dark:block"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg3dark.svg"
								alt="hardware"
							/>
							<p className="mt-9 text-xl font-semibold leading-5 text-gray-800 dark:text-white lg:mt-10">
								Durable hardware
							</p>
							<p className="text-normal mt-4 text-base leading-6 text-gray-600">
								Product durability is a key aspect of achieving a circular
								economy. ... Moreover, enhancing the durability of individual
								hardware components
							</p>
						</div>
						<div>
							<img
								className="dark:hidden"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg5.svg"
								alt="Eco-friendly"
							/>
							<img
								className="hidden dark:block"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg5dark.svg"
								alt="Eco-friendly"
							/>
							<p className="mt-9 text-xl font-semibold leading-5 text-gray-800 dark:text-white lg:mt-10">
								Eco-friendly
							</p>
							<p className="text-normal mt-4 text-base leading-6 text-gray-600">
								They re-use, recycle and reduce waste disposal in their lives.
								They conserve energy and natural resources
							</p>
						</div>
						<div>
							<img
								className="dark:hidden"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg6.svg"
								alt="drink"
							/>
							<img
								className="hidden dark:block"
								src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg6dark.svg

"
								alt="drink"
							/>
							<p className="mt-9 text-xl font-semibold leading-5 text-gray-800 dark:text-white lg:mt-10">
								Minimal Design
							</p>
							<p className="text-normal mt-4 text-base leading-6 text-gray-600">
								Minimalist interior design is very similar to modern interior
								design and involves using the bare essentials
							</p>
						</div>
					</div>
				</div>
			</div>
			<FootNav />
		</body>
	);
}
