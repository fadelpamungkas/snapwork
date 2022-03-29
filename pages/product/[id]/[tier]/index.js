import React, { useState } from "react";
import OrderInfoCard from "../../../../components/OrderInfoCard";
import PaymentMethodCard from "../../../../components/PaymentMethodCard";
import PaymentFinishCard from "../../../../components/PaymentFinishCard";
import SummaryCard from "../../../../components/SummaryCard";
import useUser from "../../../../lib/useUser";

export async function getServerSideProps(context) {
	const id = context.query.id;
	const tierName = context.query.tier;
	const res = await fetch("https://snapwork.herokuapp.com/api/post/" + id);
	const getProduct = await res.json();
	const product = getProduct.data.data;
	const tierData = product.tier[tierName];
	console.log("getServerSideProps" + id + tierName);
	return {
		props: {
			product,
			tierName,
			tierData,
		},
	};
}

export default function Payment({ product, tierName, tierData }) {
	const { user } = useUser({
		redirectTo: "/login",
	});
	const [step, setStep] = useState(0);
	step > 3 && setStep(3);
	step < 1 && setStep(1);
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
						<h1 className="">Order</h1>
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
						<h1 className="">Finish</h1>
					</div>
				</div>
				<div className="grid w-full grid-cols-3 items-start justify-between gap-10 ">
					{step === 1 || step === 2 ? (
						<>
							{step === 1 ? (
								<div className="col-span-2">
									<OrderInfoCard user={user?.userData} />
								</div>
							) : step === 2 ? (
								<div className="col-span-2 translate-x-4 transform transition-all duration-300">
									<PaymentMethodCard />
								</div>
							) : (
								""
							)}
							<div className="col-span-1 ">
								<SummaryCard
									tierName={tierName}
									tierData={tierData}
									step={step}
									setStep={setStep}
								/>
								<button
									className="rounded-lg bg-green-300 p-3"
									onClick={() => {
										setStep(step - 1);
									}}
								>
									previous
								</button>
							</div>
						</>
					) : (
						<div className="col-span-3 flex flex-col items-center justify-center">
							<PaymentFinishCard />
							<button
								className="rounded-lg bg-green-300 p-3"
								onClick={() => {
									setStep(step - 1);
								}}
							>
								previous
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
