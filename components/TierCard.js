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
			<Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl bg-red-900/20 p-1">
					{Object.keys(product.tier).map((tier) => (
						<Tab
							key={tier}
							className={({ selected }) =>
								classNames(
									"w-full rounded-xl py-2.5 text-sm font-medium leading-5 text-red-500",
									"transition duration-150",
									selected
										? "bg-white shadow"
										: "text-red-100 hover:bg-white/[0.12] hover:text-red-600"
								)
							}
						>
							{tier}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{Object.values(product.tier).map((tier, idx) => (
						<Tab.Panel
							key={tier.id}
							className="rounded-xl bg-white p-4 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
						>
							<div key={tier.id} className="mb-4 w-full px-6">
								<p className="mb-6 text-base">{tier.description}</p>
								<ul className="mb-6 flex flex-col">
									{tier.offer.map((offer) => (
										<>
											<li className="mb-2.5 flex items-center">
												<img
													src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
													className="mr-4"
													alt="check-mark"
												/>

												<p className="text-base font-normal text-gray-800">
													{offer}
												</p>
											</li>
										</>
									))}
									{/* <li className="mb-2.5 flex items-center">
										<img
											src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
											className="mr-4 opacity-0"
											alt="check-mark"
										/>
										<p className="text-base font-normal text-gray-400">
											Specialists appoinments
										</p>
									</li> */}
								</ul>
								<p className="relative pl-3 text-base text-red-500">
									<span className="text-2xl font-semibold">
										{toRupiah(tier.price)}
									</span>
								</p>
								<Link
									href={`/product/${product._id}/${Object.keys(product.tier).at(
										idx
									)}`}
									passHref
								>
									<button className="mt-5 w-full rounded-xl bg-red-900/20 px-8 py-3 text-base font-semibold text-red-500 transition duration-150 ease-in-out hover:bg-red-900/30 hover:text-red-600 focus:outline-none">
										Choose
									</button>
								</Link>
							</div>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}
