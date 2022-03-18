import Image from "next/image";

export default function ProductCard({ post }) {
	return (
		<>
			<div className="bg-white shadow-lg rounded-2xl">
				{/* Remove py-8 */}
				<div className="mx-auto container">
					<div className="flex flex-wrap items-center lg:justify-between justify-center">
						{/* Card 1 */}
						<div className="m-2 w-72">
							<div>
								<Image
									src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
									className="rounded-2xl"
									width="300%"
									height="300%"
									alt="product"
								/>
							</div>
							<div className="bg-white">
								<div className="p-4">
									<h1 className="text-sm font-medium text-rose-500">
										{post.category}
									</h1>
									<h1 className="text-lg font-bold"> {post.title}</h1>
									<p className="text-sm text-gray-400 mt-2 font-medium">
										by {post.authorName}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
