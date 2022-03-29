import toRupiah from "../lib/currency";

export default function SummaryCard({ tierName, tierData, step, setStep }) {
	return (
		<div className="rounded-xl p-4 shadow-2xl ">
			<div className="my-4 w-full divide-y divide-dashed divide-gray-400 px-6">
				<h1 className="mb-4 text-xl font-medium">Summary</h1>
				<div>
					<p className="my-4 flex justify-between text-base text-gray-600">
						<span className="">{tierName}</span>
						<span className="">{toRupiah(tierData.price)}</span>
					</p>
					<p className="my-4 flex justify-between text-base text-gray-600">
						{tierData.description}
					</p>
					<ul className=" flex flex-col">
						{tierData.offer.map((offer) => (
							<li key={offer.id} className="mb-2.5 flex items-center">
								<img
									src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
									className="mr-4"
									alt="check-mark"
								/>

								<p className="text-base font-normal text-gray-600">{offer}</p>
							</li>
						))}
					</ul>
					<p className="my-4 flex justify-between text-base text-black">
						<span className="text-gray-600">Services Fee</span>
						<span className="text-gray-600">{toRupiah(4000)}</span>
					</p>
				</div>
				<div className="">
					<p className="mt-4 flex justify-between text-base text-black">
						<span className="text-base font-semibold">Total</span>
						<span className="text-base font-semibold">
							{toRupiah(tierData.price + 4000)}
						</span>
					</p>
					<button
						onClick={() => {
							setStep(step + 1);
						}}
						className="mt-5 w-full rounded-xl bg-red-900/20 px-8 py-3 text-base font-semibold text-red-500 transition duration-150 ease-in-out hover:bg-red-900/30 hover:text-red-600 focus:outline-none"
					>
						{step === 1 ? "Continue" : "Pay Now"}
					</button>
				</div>
			</div>
		</div>
	);
}
