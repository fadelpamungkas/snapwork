import Link from "next/link";
import Image from "next/image";
import HeadNav from "../components/HeadNav";
import FootNav from "../components/FootNav";
import CareerCard from "../components/CareerCard";
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const education = [
  { id: 0, name: 'Semua' },
  { id: 1, name: 'SMA/SMK' },
  { id: 2, name: 'D3' },
  { id: 3, name: 'S1/D4' },
  { id: 4, name: 'S2' },
  { id: 5, name: 'S3' },
];

const region = [
  { id: 0, name: 'Semua' },
  { id: 1, name: 'D.I.Yogyakarta' },
  { id: 2, name: 'Jakarta' },
  { id: 3, name: 'Surabaya' },
  { id: 4, name: 'Bandung' },
  { id: 5, name: 'Medan' },
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
export default function Index({ }) {
  const [selectedEducation, setSelectedEducation] = useState(education[0])
  const [selectedRegion, setSelectedRegion] = useState(region[0])
  const [query, setQuery] = useState('')

  const filteredEducation =
    query === ''
      ? education
      : education.filter((edu) =>
        edu.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )
  const filteredRegion =
    query === ''
      ? region
      : region.filter((reg) =>
        reg.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )
  return (
    <>
      <div className="w-full py-8 text-gray-900">
        <HeadNav />
        <div className="w-full bg-gray-50">
          <section className="mx-auto max-w-screen-xl py-16 px-8 grid grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="w-full mx-auto flex-col justify-between items-center rounded-xl bg-white shadow-lg">
                <div className="bg-blue-500 rounded-t-xl py-3 px-6">
                  <h1 className="text-white text-lg">Filter Pencarian</h1>
                </div>
                <div className="w-full py-4 px-6">
                  <div clasName="py-2">
                    <h1 className="mb-2 text-sm">Kategori</h1>
                    {cbItems.map((item) => (
                      <div key={item.id} className="w-full flex items-center justify-start mb-2">
                        <input id={item.id} type="checkbox" value="" className="text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor={item.id} className="ml-2 text-sm text-gray-800">
                          {item.value}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="py-2">
                    <h1 className="mb-2 text-sm">Jenjang Pendidikan</h1>
                    <Combobox value={selectedEducation} onChange={setSelectedEducation}>
                      <div className="relative mt-1">
                        <div className="relative w-full cursor-default overflow-hidden rounded bg-white text-left border border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                          <Combobox.Input
                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                            displayValue={(edu) => edu.name}
                            onChange={(event) => setQuery(event.target.value)}
                          />
                          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <SelectorIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </Combobox.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          afterLeave={() => setQuery('')}
                        >
                          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredEducation.length === 0 && query !== '' ? (
                              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                Nothing found.
                              </div>
                            ) : (
                              filteredEducation.map((edu) => (
                                <Combobox.Option
                                  key={edu.id}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                    }`
                                  }
                                  value={edu}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                          }`}
                                      >
                                        {edu.name}
                                      </span>
                                      {selected ? (
                                        <span
                                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-blue-500'
                                            }`}
                                        >
                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
                    <Combobox value={selectedRegion} onChange={setSelectedRegion}>
                      <div className="relative mt-1">
                        <div className="relative w-full cursor-default overflow-hidden rounded bg-white text-left border border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                          <Combobox.Input
                            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                            displayValue={(reg) => reg.name}
                            onChange={(event) => setQuery(event.target.value)}
                          />
                          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <SelectorIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </Combobox.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                          afterLeave={() => setQuery('')}
                        >
                          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredRegion.length === 0 && query !== '' ? (
                              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                Nothing found.
                              </div>
                            ) : (
                              filteredRegion.map((reg) => (
                                <Combobox.Option
                                  key={reg.id}
                                  className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-500 text-white' : 'text-gray-900'
                                    }`
                                  }
                                  value={reg}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                          }`}
                                      >
                                        {reg.name}
                                      </span>
                                      {selected ? (
                                        <span
                                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-blue-500'
                                            }`}
                                        >
                                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
                <Link href="/company" passHref>
                  <a className="flex">
                    <CareerCard />
                  </a>
                </Link>
                <Link href="/company" passHref>
                  <a className="flex">
                    <CareerCard />
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <FootNav />
      </div >
    </>
  )
}
