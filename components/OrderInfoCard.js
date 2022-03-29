export default function OrderInfoCard({ user }) {
	return (
		<>
			<div className="mb-14 w-full rounded-xl bg-white p-4 shadow-2xl">
				<div className="my-4 w-full divide-y divide-dashed divide-gray-400 px-6">
					<h1 className="mb-4 text-xl font-medium">Order Info</h1>
					<div>
						<p className="my-4 flex justify-between text-base text-gray-600">
							Name: {user.name}
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
			<div className="w-full rounded-xl bg-white p-4 shadow-2xl">
				<div className="my-4 w-full divide-y divide-dashed divide-gray-400 px-6">
					<h1 className="mb-4 text-xl font-medium">Account Info</h1>
					<div>
						<p className="my-4 flex justify-between text-base text-gray-600">
							Name: {user.name}
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
		</>
	);
}
