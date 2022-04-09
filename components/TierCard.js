/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import toRupiah from "../lib/currency";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function TierCard({ product }) {
	return (
		<div className="w-full max-w-md px-2 py-2 sm:px-0">
			<div className="rounded-xl bg-white p-4">
				<div className="mb-4 w-full px-6">
					<p className="mb-6 text-base">{product.title}</p>
					<p className="relative pl-3 text-base text-red-500">
						<span className="text-2xl font-semibold">
							{toRupiah(product.price)}
						</span>
					</p>
					<Link href={`/product/${product._id}/${product.title}`} passHref>
						<button className="mt-5 w-full rounded-xl bg-red-900/20 px-8 py-3 text-base font-semibold text-red-500 transition duration-150 ease-in-out hover:bg-red-900/30 hover:text-red-600 focus:outline-none">
							Choose
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
