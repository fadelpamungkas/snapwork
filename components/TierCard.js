/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function TierCard({ product }) {
	let [categories] = useState({
		Silver: {
			about:
				"Custom & unique homepage design. In Figma, Sketch, XD or PSD (Desktop + Mobile)",
			price: 100,
			offer: [
				"Free 1-month trial",
				"1 projects",
				"1 storage",
				"Unlimited users",
			],
		},
		Gold: {
			about:
				"Custom & unique designed homepage + 1 inner page. In Figma, Sketch, XD or PSD (Desktop + Mobile)",
			price: 1200,
			offer: [
				"Free 3-month trial",
				"2 projects",
				"Unlimited storage",
				"Unlimited users",
			],
		},
		Platinum: {
			about:
				"Custom & unique homepage + 4 inner pages designs. In Figma, Sketch, XD or PSD (Desktop + Mobile)",
			price: 21300,
			offer: [
				"Free Access to all features",
				"Unlimited projects",
				"Unlimited storage",
				"Unlimited users",
			],
		},
	});

	return (
		<div className="w-full max-w-md px-2 py-2 sm:px-0">
			<Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl bg-red-900/20 p-1">
					{Object.keys(categories).map((category) => (
						<Tab
							key={category}
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
							{category}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{Object.values(categories).map((tier) => (
						<Tab.Panel
							key={tier.id}
							className="rounded-xl bg-white p-4 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
						>
							<div key={tier.id} className="mb-4 w-full px-6">
								<p className="mb-6 text-base">{tier.about}</p>
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
									<span className="text-xl font-light">Rp</span>
									<span className="text-2xl font-semibold">{tier.price}</span>
								</p>
								<Link href={`/product/${product._id}/${tier.price}`} passHref>
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
