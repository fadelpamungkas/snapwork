import Image from "next/image";

export default function ProductCard({ post }) {
	return (
		<>
			<div className="rounded-xl bg-white shadow-lg">
				{/* Remove py-8 */}
				<div className="container mx-auto">
					<div className="flex flex-wrap items-center justify-center lg:justify-between">
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
									<p className="mt-2 text-sm font-medium text-gray-400">
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
