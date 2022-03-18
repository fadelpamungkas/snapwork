import {
	MapIcon,
	TrendingUpIcon,
	ShoppingCartIcon,
	BookmarkIcon,
	CubeTransparentIcon,
} from "@heroicons/react/solid";

export default function FootNav() {
	return (
		<section className="mt-20 w-full bg-white">
			<div className="container mx-auto grid grid-cols-3 gap-8 max-w-screen-xl items-start justify-between p-8 text-gray-700">
				<div className="flex-cols justify-center items-center ml-8">
					<h1 className="mb-4 font-medium">SnapWork</h1>
					<p className="max-w-xs font-light text-gray-500">
						We always make our customer happy by providing as many choice as
						possible.
					</p>
				</div>
				<div className="flex justify-center items-center space-x-8">
					<MapIcon className="h-10 w-10" />
					<ShoppingCartIcon className="h-10 w-10" />
					<BookmarkIcon className="h-10 w-10" />
				</div>
				<div className="flex-cols justify-center items-center ml-8">
					<h1 className="mb-4 font-medium">Support</h1>
					<p className="font-light text-gray-500">Terms and Conditions</p>
					<p className="font-light text-gray-500">Privacy Policy</p>
					<p className="font-light text-gray-500">FAQ</p>
				</div>
			</div>
		</section>
	);
}
