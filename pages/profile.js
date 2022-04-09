import HeadNav from "../components/HeadNav";
import FootNav from "../components/FootNav";
import useUser from "../lib/useUser";
import useSWR from "swr";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Profile() {
	const { user } = useUser({
		redirectTo: "/login",
	});

	const { data, error } = useSWR(
		"https://snapwork.herokuapp.com/api/posts/user/" + user?.userData.id,
		fetcher
	);
	console.log(data);

	if (error) return <div>Failed to load</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<div className="w-full">
			<HeadNav />
			<div className="container mx-auto flex items-start justify-center px-6 py-10">
				<div className="my-6 w-full">
					<dh-component>
						<div aria-label="cards" className="rounded bg-white shadow">
							<div className="relative">
								<img
									className="h-56 w-full rounded-t object-cover object-center shadow focus:outline-none"
									src="https://snapworkupload.s3.ap-southeast-1.amazonaws.com/duotone+(6).png"
									alt="mountains cover"
								/>
								<div className="absolute inset-0 bottom-0 m-auto -mb-12 h-24 w-24 rounded border-2 border-white shadow xl:ml-10">
									<img
										className="h-full w-full overflow-hidden rounded object-cover focus:outline-none"
										src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
										alt="person"
									/>
								</div>
							</div>
							<div className="px-5 pb-10 xl:px-10">
								<div className="flex w-full justify-center pt-16 xl:justify-end xl:pt-5">
									<div
										aria-label="4 stars"
										role="img"
										className="flex items-center focus:outline-none"
									>
										<img
											src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg"
											alt="yellow star"
										/>
										<img
											src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg"
											alt="yellow star"
										/>
										<img
											src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg"
											alt="yellow star"
										/>
										<img
											src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg"
											alt="yellow star"
										/>
										<img
											src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg2.svg"
											alt="gray star"
										/>
									</div>
								</div>
								<div className="flex flex-col items-start justify-between pt-3 xl:flex-row xl:items-center xl:pt-5">
									<div className="w-full xl:w-2/3 xl:pr-16">
										<div className="mb-3 flex flex-col items-center justify-between text-center xl:mb-0 xl:flex-row xl:justify-start xl:text-left">
											<a className=" text-gray-800">
												{" "}
												<h2 className="mb-3 text-2xl font-medium tracking-normal  xl:mb-0 xl:mr-4">
													{user?.userData.name}
												</h2>
											</a>
											<p className="rounded-full bg-indigo-700 px-5 py-1 text-sm font-normal text-white focus:outline-none">
												Pro
											</p>
										</div>
										<p className="mt-2 text-center text-sm leading-5 tracking-normal text-gray-600 focus:outline-none xl:text-left">
											HI, I am a direct response copywriter from the US. When
											you work with me, we have the same goal. Maximizing your
											ROI
										</p>
									</div>
									<div className="flex w-full items-start justify-center py-5 xl:w-1/3 xl:border-l xl:border-r xl:px-10">
										{/* <div className="mr-6 xl:mr-10">
											<h2 className="mb-2 text-center text-xl font-bold leading-6 text-gray-600 focus:outline-none dark:text-gray-400 xl:text-2xl">
												82
											</h2>
											<a className=" text-gray-800 focus:outline-none dark:text-gray-100 ">
												{" "}
												<p className=" text-sm leading-5 xl:text-xl">Reviews</p>
											</a>
										</div> */}
										<div className="mr-6 xl:mr-10">
											<h2 className="mb-2 text-center text-xl font-bold leading-6 text-gray-600 focus:outline-none  xl:text-2xl">
												{data.data.data != null && (
													<h1>{data.data.data.length}</h1>
												)}
											</h2>
											<a className=" text-gray-800 focus:outline-none">
												{" "}
												<p className=" text-sm leading-5 xl:text-xl">
													Projects
												</p>
											</a>
										</div>
									</div>
									<div className="flex w-full flex-col justify-center md:flex-row md:pl-6 xl:w-2/3 xl:justify-end">
										<div className="mt-1 mb-5 flex items-center justify-center md:mt-0 md:mb-0 xl:justify-start">
											<div className="flex items-center justify-center rounded-full bg-gray-100 px-6 py-2 text-sm text-gray-700 focus:outline-none ">
												Freelance
											</div>
											<div className="ml-5 flex items-center justify-center rounded-full bg-green-100 px-6 py-2 text-sm text-green-700 focus:outline-none">
												Available
											</div>
										</div>
										<button className="ml-0 rounded bg-indigo-700 px-3 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-indigo-600 focus:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 md:ml-5 md:px-6">
											Message
										</button>
									</div>
								</div>
								<h1 className="mt-14 text-lg font-medium">My Products</h1>
								<div className="my-6 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
									{data.data.data != null && (
										<>
											{data.data.data.map((post, index) => (
												<Link href={`/productform/${post._id}`} key={index}>
													<a>
														<ProductCard post={post} />
													</a>
												</Link>
											))}
										</>
									)}
									<Link href="/productform">
										<a className="group flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-white p-10 transition duration-300 hover:border-gray-300 hover:bg-gray-50 ">
											<div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white transition duration-150 group-hover:bg-red-600">
												+
											</div>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</dh-component>
				</div>
			</div>
			<FootNav />
		</div>
	);
}
