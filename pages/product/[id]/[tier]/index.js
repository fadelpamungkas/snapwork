import React from "react";
import { useState } from "react";

export default function Payment() {
	const [step, setStep] = useState(0);
	step > 3 && setStep(3);
	step < 0 && setStep(0);
	console.log(step);
	return (
		<>
			<div className="mx-auto max-w-screen-xl p-20">
				<div className="mb-20 grid w-full grid-cols-3 items-center justify-between gap-10">
					<div className="w-full">
						<div
							className={`${
								step >= 1 ? "bg-red-500" : "bg-gray-200"
							} mb-4 h-1 w-full transition-all duration-300`}
						/>
						<h1
							className={`${
								step >= 1 ? "text-red-500" : "text-gray-500"
							} font-medium transition-all duration-300`}
						>
							Step 1
						</h1>
						<h1 className="">Summary</h1>
					</div>
					<div className="w-full">
						<div
							className={`${
								step >= 2 ? "bg-red-500" : "bg-gray-200"
							} mb-4 h-1 w-full transition-all duration-300`}
						/>
						<h1
							className={`${
								step >= 2 ? "text-red-500" : "text-gray-500"
							} font-medium transition-all duration-300`}
						>
							Step 2
						</h1>
						<h1 className="">Payment</h1>
					</div>
					<div className="w-full">
						<div
							className={`${
								step >= 3 ? "bg-red-500" : "bg-gray-200"
							} mb-4 h-1 w-full transition-all duration-300`}
						/>
						<h1
							className={`${
								step >= 3 ? "text-red-500" : "text-gray-500"
							} font-medium transition-all duration-300`}
						>
							Step 3
						</h1>
						<h1 className="">Success</h1>
					</div>
				</div>
				<div className="grid w-full grid-cols-3 items-start justify-between gap-10 ">
					<div className="col-span-2">
						<div className="w-full rounded-xl bg-white p-4 shadow-2xl">
							<div className="my-4 w-full divide-y divide-dashed divide-gray-400 px-6">
								<h1 className="mb-4 text-xl font-medium">Payment Method</h1>
								<div>
									<p className="my-4 flex justify-between text-base text-gray-600">
										Credit & Debit Card
									</p>
									<div className="grid w-full grid-cols-4 grid-rows-2 items-start gap-10">
										<div className="col-span-2">
											<div>
												<label
													htmlFor="email"
													className="text-sm font-medium leading-none text-gray-800"
												>
													Card Number
												</label>
												<input
													id="email"
													name="email"
													type="email"
													className="mt-2 w-full rounded border bg-gray-100 py-3 px-3 text-xs font-medium leading-none text-gray-800 placeholder-gray-400 shadow-md hover:shadow-lg"
												/>
											</div>
										</div>
										<div>
											<label
												htmlFor="email"
												className="text-sm font-medium leading-none text-gray-800"
											>
												Expiration Date
											</label>
											<input
												id="email"
												name="email"
												type="email"
												placeholder="MM/YY"
												className="mt-2 w-full rounded border bg-gray-100 py-3 px-3 text-xs font-medium leading-none text-gray-800 placeholder-gray-400 shadow-md hover:shadow-lg"
											/>
										</div>
										<div>
											<label
												htmlFor="email"
												className="text-sm font-medium leading-none text-gray-800"
											>
												Security Code
											</label>
											<input
												id="email"
												name="email"
												type="email"
												placeholder="CVV"
												className="mt-2 w-full rounded border bg-gray-100 py-3 px-3 text-xs font-medium leading-none text-gray-800 placeholder-gray-400 shadow-md hover:shadow-lg"
											/>
										</div>
										<div className="col-span-2">
											<div>
												<label
													htmlFor="email"
													className="text-sm font-medium leading-none text-gray-800"
												>
													First Name
												</label>
												<input
													id="email"
													name="email"
													type="email"
													className="mt-2 w-full rounded border bg-gray-100 py-3 px-3 text-xs font-medium leading-none text-gray-800 placeholder-gray-400 shadow-md hover:shadow-lg"
												/>
											</div>
										</div>
										<div className="col-span-2">
											<div>
												<label
													htmlFor="email"
													className="text-sm font-medium leading-none text-gray-800"
												>
													Last Name
												</label>
												<input
													id="email"
													name="email"
													type="email"
													className="mt-2 w-full rounded border bg-gray-100 py-3 px-3 text-xs font-medium leading-none text-gray-800 placeholder-gray-400 shadow-md hover:shadow-lg"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-1 ">
						<div className="rounded-xl p-4 shadow-2xl ">
							<div className="my-4 w-full divide-y divide-dashed divide-gray-400 px-6">
								<h1 className="mb-4 text-xl font-medium">Summary</h1>
								<div>
									<p className="my-4 flex justify-between text-base text-gray-600">
										<span className="">Gold Tier</span>
										<span className="">Rp650000</span>
									</p>
									<ul className=" flex flex-col">
										<li className="mb-2.5 flex items-center">
											<img
												src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
												className="mr-4"
												alt="check-mark"
											/>

											<p className="text-base font-normal text-gray-600">
												Specialists appoinments
											</p>
										</li>
										<li className="mb-2.5 flex items-center">
											<img
												src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
												className="mr-4"
												alt="check-mark"
											/>

											<p className="text-base font-normal text-gray-600">
												Specialists appoinments
											</p>
										</li>
										<li className="mb-2.5 flex items-center">
											<img
												src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
												className="mr-4"
												alt="check-mark"
											/>

											<p className="text-base font-normal text-gray-600">
												Specialists appoinments
											</p>
										</li>
										<li className="mb-2.5 flex items-center">
											<img
												src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
												className="mr-4"
												alt="check-mark"
											/>

											<p className="text-base font-normal text-gray-600">
												Specialists appoinments
											</p>
										</li>
									</ul>
									<p className="my-4 flex justify-between text-base text-black">
										<span className="text-gray-600">Services Fee</span>
										<span className="text-gray-600">Rp20000</span>
									</p>
								</div>
								<div className="">
									<p className="mt-4 flex justify-between text-base text-black">
										<span className="text-base font-semibold">Total</span>
										<span className="text-base font-semibold">Rp20000</span>
									</p>
									<button className="mt-5 w-full rounded-xl bg-red-900/20 px-8 py-3 text-base font-semibold text-red-500 transition duration-150 ease-in-out hover:bg-red-900/30 hover:text-red-600 focus:outline-none">
										Choose
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap space-x-10 p-20">
					<button
						onClick={() => {
							setStep(step - 1);
						}}
					>
						previous
					</button>
					<button
						onClick={() => {
							setStep(step + 1);
						}}
					>
						next
					</button>
				</div>
			</div>
		</>
	);
}