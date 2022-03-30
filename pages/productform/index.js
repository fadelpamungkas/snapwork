import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import useUser from "../../lib/useUser";
import Image from "next/image";
import HeadNav from "../../components/HeadNav";
import FootNav from "../../components/FootNav";

const categories = [
	{ id: 1, name: "Software Development", unavailable: false },
	{ id: 2, name: "Website Development", unavailable: false },
	{ id: 3, name: "Game Development", unavailable: false },
	{ id: 4, name: "Mobile Apps Development", unavailable: false },
	{ id: 5, name: "IT Consultant", unavailable: false },
	{ id: 6, name: "Cybersecurity", unavailable: false },
	{ id: 7, name: "Data Science", unavailable: false },
	{ id: 8, name: "UI/UX Design", unavailable: false },
	{ id: 8, name: "System Analyst", unavailable: false },
];

export default function ProductForm() {
	const router = useRouter();
	const { user } = useUser({
		redirectTo: "/login",
	});
	const [selected, setSelected] = useState(categories[0]);
	const [images, setImages] = useState([]);

	const handleImage = (e) => {
		console.log(e.target.files);

		let allimages = [];
		for (let i = 0; i < e.target.files.length; i++) {
			allimages.push(e.target.files[i]);
		}
		if (allimages.length > 0) {
			setImages(allimages);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await fetch("https://snapwork.herokuapp.com/api/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: event.target.title.value,
				content: event.target.description.value,
				category: selected.name,
				authorId: user?.userData.id,
				authorName: user?.userData.name,
				tier: {
					Silver: {
						description: "silvertier",
						price: event.target.price.valueAsNumber,
						offer: ["dmasdka", "dmasodsa", "daiodans"],
					},
					Gold: {
						description: "goldtier",
						price: event.target.price.valueAsNumber,
						offer: ["aaa", "dmasodsa", "daiodans"],
					},
					platinum: {
						description: "platinumtier",
						price: event.target.price.valueAsNumber,
						offer: ["ccc", "dmasodsa", "daiodans"],
					},
				},
			}),
		});
		const data = await response.json();
		console.log(data);

		if (data.status === 201) {
			alert("Post Created Successfully");
			router.push("/profile");
		} else {
			alert(data.message);
		}
	};

	return (
		<>
			<div className=" bg-gray-50">
				<HeadNav />
				<div className="mx-auto min-h-screen w-full max-w-screen-xl">
					<div className="mx-auto flex w-full justify-center p-8">
						<form id="formCreatePost" onSubmit={handleSubmit} className="w-1/3">
							<div>
								<label
									htmlFor="title"
									className="text-sm font-medium leading-none text-gray-800"
								>
									Title
								</label>
								<input
									id="title"
									name="title"
									type="title"
									className="mt-2 w-full rounded-lg bg-white py-3 px-3 text-sm leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 hover:shadow-md"
									placeholder="I create ..."
									required
								/>
							</div>
							<div className="mt-6 w-full">
								<div>
									<label
										htmlFor="category"
										className="text-sm font-medium leading-none text-gray-800"
									>
										Category
									</label>
									<Listbox value={selected} onChange={setSelected}>
										<div className="relative mt-1">
											<Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
												<span className="block truncate">{selected.name}</span>
												<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
													<SelectorIcon
														className="h-5 w-5 text-gray-400"
														aria-hidden="true"
													/>
												</span>
											</Listbox.Button>
											<Transition
												as={Fragment}
												leave="transition ease-in duration-100"
												leaveFrom="opacity-100"
												leaveTo="opacity-0"
											>
												<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
													{categories.map((category, categoryIdx) => (
														<Listbox.Option
															key={categoryIdx}
															className={({ active }) =>
																`relative cursor-default select-none py-2 pl-10 pr-4 ${
																	active
																		? "bg-amber-100 text-amber-900"
																		: "text-gray-900"
																}`
															}
															value={category}
															// disabled={category.unavailable}
														>
															{({ selected }) => (
																<>
																	<span
																		className={`block truncate ${
																			selected ? "font-medium" : "font-normal"
																		}`}
																	>
																		{category.name}
																	</span>
																	{selected ? (
																		<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
																			<CheckIcon
																				className="h-5 w-5"
																				aria-hidden="true"
																			/>
																		</span>
																	) : null}
																</>
															)}
														</Listbox.Option>
													))}
												</Listbox.Options>
											</Transition>
										</div>
									</Listbox>
								</div>
							</div>
							<div className="mt-6 w-full">
								<label
									htmlFor="price"
									className="text-sm font-medium leading-none text-gray-800"
								>
									Price
								</label>
								<input
									id="price"
									name="price"
									type="number"
									min={1000}
									step={1000}
									className="mt-2 w-full rounded-lg bg-white py-3 px-3 text-sm leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 hover:shadow-md"
									required
								/>
							</div>
							<div className="mt-6 w-full">
								<label
									htmlFor="image"
									className="text-sm font-medium leading-none text-gray-800"
								>
									Image
								</label>
								<input
									id="image"
									name="image"
									type="file"
									accept="image/*"
									onChange={handleImage}
									className="mt-2 w-full rounded-lg bg-white py-3 px-3 text-sm leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 
									file:mr-4 file:rounded-full file:border-0 
									file:bg-violet-50 file:py-2 file:px-4 file:text-sm
									file:font-semibold file:text-violet-700
									file:transition file:duration-150 hover:shadow-md hover:file:bg-violet-100"
									multiple
									required
								/>
								{images.length > 0 && (
									<div className="my-4 grid w-full grid-cols-3 gap-4 rounded-xl bg-blue-50 p-4">
										{images.map((image, key) => (
											<Image
												key={key}
												src={URL.createObjectURL(image)}
												alt={image.name}
												height={100}
												width={100}
											/>
										))}
									</div>
								)}
							</div>
							<div className="mt-6 w-full">
								<label
									htmlFor="description"
									className="text-sm font-medium leading-none text-gray-800"
								>
									Description
								</label>
								<textarea
									id="description"
									name="description"
									rows={10}
									className="mt-2 w-full rounded-lg bg-white py-3 px-3 text-sm leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 hover:shadow-md"
									required
								/>
							</div>
							<div className="mt-8">
								<button
									form="formCreatePost"
									type="submit"
									className="w-full rounded-lg bg-indigo-700 py-4 text-sm font-semibold leading-none text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 active:shadow-none"
								>
									Create
								</button>
							</div>
						</form>
					</div>
				</div>
				<FootNav />
			</div>
		</>
	);
}
