import {
	MapIcon,
	TrendingUpIcon,
	ShoppingCartIcon,
	BookmarkIcon,
	CubeTransparentIcon,
} from "@heroicons/react/solid";

import Image from "next/image";
import TwitterIcon from "../public/Twitter.svg";
import LinkedinIcon from "../public/Linkedin.svg";
import FacebookIcon from "../public/Facebook.svg";

export default function FootNav() {
	return (
		<section className="mt-4 w-full bg-white">
			<div className="container mx-auto grid grid-cols-3 gap-8 max-w-screen-xl items-center justify-between p-8 text-gray-700">
				<div className="flex-cols justify-center items-center ml-8">
					<h1 className="mb-4 font-medium">SnapWork</h1>
					<p className="max-w-xs font-light text-gray-500">
						We always make our customer happy by providing as many choice as
						possible.
					</p>
				</div>
				<div className="flex justify-center items-center gap-6">
					<Image src={TwitterIcon} width={35} height={35} alt="Twitter Icon" />
					<Image
						src={LinkedinIcon}
						width={35}
						height={35}
						alt="Linkedin Icon"
					/>
					<Image
						src={FacebookIcon}
						width={35}
						height={35}
						alt="Facebook Icon"
					/>
				</div>
				<div className="flex-cols justify-center items-center ml-20">
					<h1 className="mb-4 font-medium">Support</h1>
					<p className="font-light text-gray-500">Terms and Conditions</p>
					<p className="font-light text-gray-500">Privacy Policy</p>
					<p className="font-light text-gray-500">FAQ</p>
				</div>
			</div>
		</section>
	);
}
