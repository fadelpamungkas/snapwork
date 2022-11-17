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
      <div className="container grid grid-cols-3 gap-8 justify-between items-center p-8 mx-auto max-w-screen-xl text-gray-700">
        <div className="justify-center items-center ml-8 flex-cols">
          <h1 className="mb-4 font-medium">SnapWork</h1>
          <p className="max-w-xs font-light text-gray-500">
            We always make our customer happy by providing as many choice as
            possible.
          </p>
        </div>
        <div className="flex gap-6 justify-center items-center">
          <TwitterIcon />
          <LinkedinIcon />
          <FacebookIcon />
        </div>
        <div className="justify-center items-center ml-20 flex-cols">
          <h1 className="mb-4 font-medium">Support</h1>
          <p className="font-light text-gray-500">Terms and Conditions</p>
          <p className="font-light text-gray-500">Privacy Policy</p>
          <p className="font-light text-gray-500">FAQ</p>
        </div>
      </div>
    </section>
  );
}
