import Link from "next/link";
import Image from "next/image";
import HomeBanner from "../public/HomeBanner1.png";
import HeadNav from "../components/HeadNav";
import FootNav from "../components/FootNav";
import CareerCard from "../components/CareerCard";
import useUser from "../lib/useUser";
import fetchJson, { FetchError } from "../lib/fetchJson";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const education = [
  { id: 0, name: "Semua" },
  { id: 1, name: "SMA/SMK" },
  { id: 2, name: "D3" },
  { id: 3, name: "S1/D4" },
  { id: 4, name: "S2" },
  { id: 5, name: "S3" },
];

const region = [
  { id: 0, name: "Semua" },
  { id: 1, name: "D.I.Yogyakarta" },
  { id: 2, name: "Jakarta" },
  { id: 3, name: "Surabaya" },
  { id: 4, name: "Bandung" },
  { id: 5, name: "Medan" },
];

const cbItems = [
  {
    id: "software-engineer",
    value: "Software Engineer",
  },
  {
    id: "data-science",
    value: "Data Science",
  },
  {
    id: "web-developer",
    value: "Web Developer",
  },
  {
    id: "system-analyst",
    value: "System Analyst",
  },
  {
    id: "it-consultant",
    value: "IT Consultant",
  },
  {
    id: "game-developer",
    value: "Game Developer",
  },
];

export async function getStaticProps() {
  const resCompanies = await fetch(
    "https://snapwork.herokuapp.com/api/companies"
  );
  const getCompanies = await resCompanies.json();
  const companies = getCompanies.data.data;

  return {
    props: {
      companies,
    },
  };
}

export default function Index({ companies }) {
  const router = useRouter();
  const { user, mutateUser } = useUser();

  const [selectedEducation, setSelectedEducation] = useState(education[0]);
  const [selectedRegion, setSelectedRegion] = useState(region[0]);
  const [query, setQuery] = useState("");

  const filteredEducation =
    query === ""
      ? education
      : education.filter((edu) =>
          edu.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  const filteredRegion =
    query === ""
      ? region
      : region.filter((reg) =>
          reg.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  if (user?.isLoggedIn === true) {
    if (user.userData.role === "mitra") {
      router.push("/company/dashboard");
    } else if (user.userData.role === "admin") {
      router.push("/admin/dashboard");
    }
  }

  const refreshRole = async (user) => {
    const userId = user?.userData.id;
    const responseRole = await fetch(
      `https://snapwork.herokuapp.com/api/user/${userId}`
    );
    const userData = await responseRole.json();

    const oldUser = user;
    oldUser.userData.role = userData.data.data.role;

    try {
      mutateUser(oldUser);
      console.log(oldUser);
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.error("An unexpected error happened:", error);
      }
    }
  };

  if (user?.isLoggedIn) refreshRole(user);

  return (
    <>
      <div className="py-8 w-full text-gray-900">
        <HeadNav />
        <div className="w-full bg-gray-50">
          <section className="px-8 pt-16 mx-auto max-w-screen-xl">
            <Image
              className="object-fill max-w-lg rounded-2xl shadow-2xl"
              src={HomeBanner}
              alt="Banner"
            />
          </section>
          <section className="grid grid-cols-4 gap-12 py-8 px-8 mx-auto max-w-screen-xl">
            <div className="col-span-1">
              <div className="flex-col justify-between items-center mx-auto w-full bg-white rounded-xl shadow-lg">
                <div className="py-3 px-6 bg-blue-500 rounded-t-xl">
                  <h1 className="text-lg text-white">Filter Pencarian</h1>
                </div>
                <div className="py-4 px-6 w-full">
                  <div className="py-2">
                    <h1 className="mb-2 text-sm">Kategori</h1>
                    {cbItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-start items-center mb-2 w-full"
                      >
                        <input
                          id={item.id}
                          type="checkbox"
                          value=""
                          className="text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor={item.id}
                          className="ml-2 text-sm text-gray-800"
                        >
                          {item.value}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="py-2">
                    <h1 className="mb-2 text-sm">Jenjang Pendidikan</h1>
                    <Combobox
                      value={selectedEducation}
                      onChange={setSelectedEducation}
                    >
                      <div className="relative mt-1">
                        <div className="overflow-hidden relative w-full text-left bg-white rounded border border-gray-300 cursor-default sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
                          <Combobox.Input
                            className="py-2 pr-10 pl-3 w-full text-sm leading-5 text-gray-900 border-none focus:ring-0"
                            displayValue={(edu) => edu.name}
                            onChange={(event) => setQuery(event.target.value)}
                          />
                          <Combobox.Button className="flex absolute inset-y-0 right-0 items-center pr-2">
                            <SelectorIcon
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </Combobox.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          afterLeave={() => setQuery("")}
                        >
                          <Combobox.Options className="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg sm:text-sm focus:outline-none">
                            {filteredEducation.length === 0 && query !== "" ? (
                              <div className="relative py-2 px-4 text-gray-700 cursor-default select-none">
                                Nothing found.
                              </div>
                            ) : (
                              filteredEducation.map((edu) => (
                                <Combobox.Option
                                  key={edu.id}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-900"
                                    }`
                                  }
                                  value={edu}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {edu.name}
                                      </span>
                                      {selected ? (
                                        <span
                                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                            active
                                              ? "text-white"
                                              : "text-blue-500"
                                          }`}
                                        >
                                          <CheckIcon
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Combobox.Option>
                              ))
                            )}
                          </Combobox.Options>
                        </Transition>
                      </div>
                    </Combobox>
                  </div>
                  <div className="py-2">
                    <h1 className="mb-2 text-sm">Lokasi</h1>
                    <Combobox
                      value={selectedRegion}
                      onChange={setSelectedRegion}
                    >
                      <div className="relative mt-1">
                        <div className="overflow-hidden relative w-full text-left bg-white rounded border border-gray-300 cursor-default sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
                          <Combobox.Input
                            className="py-2 pr-10 pl-3 w-full text-sm leading-5 text-gray-900 border-none focus:ring-0"
                            displayValue={(reg) => reg.name}
                            onChange={(event) => setQuery(event.target.value)}
                          />
                          <Combobox.Button className="flex absolute inset-y-0 right-0 items-center pr-2">
                            <SelectorIcon
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </Combobox.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          afterLeave={() => setQuery("")}
                        >
                          <Combobox.Options className="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg sm:text-sm focus:outline-none">
                            {filteredRegion.length === 0 && query !== "" ? (
                              <div className="relative py-2 px-4 text-gray-700 cursor-default select-none">
                                Nothing found.
                              </div>
                            ) : (
                              filteredRegion.map((reg) => (
                                <Combobox.Option
                                  key={reg.id}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                      active
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-900"
                                    }`
                                  }
                                  value={reg}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={`block truncate ${
                                          selected
                                            ? "font-medium"
                                            : "font-normal"
                                        }`}
                                      >
                                        {reg.name}
                                      </span>
                                      {selected ? (
                                        <span
                                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                            active
                                              ? "text-white"
                                              : "text-blue-500"
                                          }`}
                                        >
                                          <CheckIcon
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Combobox.Option>
                              ))
                            )}
                          </Combobox.Options>
                        </Transition>
                      </div>
                    </Combobox>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="space-y-8">
                {companies.map((item, index) => (
                  <div key={index}>
                    <a className="flex">
                      {item.status === "Verified" && (
                        <>{item.companyjob && <CareerCard item={item} />}</>
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <FootNav />
      </div>
    </>
  );
}
