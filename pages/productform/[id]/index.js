import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import useUser from "../../../lib/useUser";
import Image from "next/image";
import HeadNav from "../../../components/HeadNav";
import FootNav from "../../../components/FootNav";
import { useRouter } from "next/router";

const categories = [
	{ id: 1, name: "Software Development", unavailable: false },
	{ id: 2, name: "Website Development", unavailable: false },
	{ id: 3, name: "Game Development", unavailable: false },
	{ id: 4, name: "Mobile Apps Development", unavailable: false },
	{ id: 5, name: "IT Consultant", unavailable: false },
	{ id: 6, name: "Cybersecurity", unavailable: false },
	{ id: 7, name: "Data Science", unavailable: false },
	{ id: 8, name: "UI/UX Design", unavailable: false },
	{ id: 9, name: "System Analyst", unavailable: false },
];

// This function gets called at build time
export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const res = await fetch("https://snapwork.herokuapp.com/api/posts");
	console.log(res);
	const data = await res.json();
	const posts = data.data.data;

	// Get the paths we want to pre-render based on posts
	const paths = posts.map((post) => ({
		params: { id: post._id },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
	// params contains the post `id`.
	// If the route is like /posts/1, then params.id is 1
	const res = await fetch(
		`https://snapwork.herokuapp.com/api/post/${params.id}`
	);
	const data = await res.json();
	const post = data.data.data;

	// Pass post data to the page via props
	return { props: { post } };
}

export default function ProductFormEdit({ post }) {
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
		const response = await fetch("https://snapwork.herokuapp.com/api/post", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				_id: post._id,
				title: event.target.title.value,
				content: event.target.description.value,
				category: selected.name,
				price: event.target.price.valueAsNumber,
				// tier: {
				// 	Silver: {
				// 		description: "silvertier",
				// 		price: event.target.price.valueAsNumber,
				// 		offer: ["dmasdka", "dmasodsa", "daiodans"],
				// 	},
				// 	Gold: {
				// 		description: "goldtier",
				// 		price: event.target.price.valueAsNumber,
				// 		offer: ["aaa", "dmasodsa", "daiodans"],
				// 	},
				// 	platinum: {
				// 		description: "platinumtier",
				// 		price: event.target.price.valueAsNumber,
				// 		offer: ["ccc", "dmasodsa", "daiodans"],
				// 	},
				// },
			}),
		});
		const status = await response.json();
		console.log(status);

		if (status === 200) {
			alert("Post Updated Successfully");
			router.push("/profile");
		} else {
			alert("Post Update Failed");
		}
	};

	const handleDelete = async (event) => {
		event.preventDefault();
		const response = await fetch(
			`https://snapwork.herokuapp.com/api/post/${post._id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		const status = await response.json();
		console.log(status);

		if (status === 200) {
			alert("Post Deleted Successfully");
			router.push("/profile");
		} else {
			alert("Post Delete Failed");
		}
	};

	return (
		<>
			<div className=" bg-gray-50">
				<HeadNav />
				<div className="mx-auto min-h-screen w-full max-w-screen-xl">
					<div className="mx-auto flex w-full justify-center p-8">
						<form id="formUpdatePost" onSubmit={handleSubmit} className="w-1/3">
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
									defaultValue={post.title}
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
												<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
								<div className="relative flex items-center justify-center">
									<input
										id="price"
										name="price"
										type="number"
										min={1000}
										step={1000}
										defaultValue={post.price}
										className="mt-2 w-full rounded-lg bg-white py-3 px-3 pl-8 text-sm leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 hover:shadow-md"
										required
									/>
									<h1 className="absolute left-0 mt-2 flex cursor-default items-center rounded-l-lg py-3 pl-3 text-sm text-gray-800">
										Rp
									</h1>
								</div>
							</div>
							<div className="mt-6 w-full">
								<label
									htmlFor="image"
									className="text-sm font-medium leading-none text-gray-800"
								>
									Image (Cant be changed)
								</label>
								{post.images.length > 0 && (
									<div className="my-4 grid w-full grid-cols-3 gap-4 rounded-xl bg-blue-50 p-4">
										{post.images.map((image, key) => (
											<Image
												key={key}
												src={image.url}
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
									defaultValue={post.content}
									className="mt-2 w-full rounded-lg bg-white py-3 px-3 text-sm leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 hover:shadow-md"
									required
								/>
							</div>
							<div className="mt-8">
								<button
									form="formUpdatePost"
									type="submit"
									className="w-full rounded-lg bg-indigo-700 py-4 text-sm font-semibold leading-none text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 active:shadow-none"
								>
									Update
								</button>
							</div>
							<div className="mt-4">
								<button
									onClick={handleDelete}
									className="w-full rounded-lg bg-red-700 py-4 text-sm font-semibold leading-none text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 active:shadow-none"
								>
									Delete
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
