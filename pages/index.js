import Link from "next/link";
import Image from "next/image";
import HeadNav from "../components/HeadNav";
import FootNav from "../components/FootNav";
import CareerCard from "../components/CareerCard";

export default function Index({ }) {
  return (
    <>
      <div className="w-full py-8 text-gray-900">
        <HeadNav />
        <div className="w-full bg-gray-50">
          {/* <section className="mx-auto flex max-w-screen-xl items-center justify-between py-28 px-8"> */}
          <section className="mx-auto max-w-screen-xl py-28 px-8 grid grid-cols-4 gap-8 border-b-2 border-gray-300">
            <div className="col-span-1">
              <div className="w-full mx-auto flex-col justify-between items-center rounded-xl bg-white shadow-lg">
                <div className="bg-blue-500 rounded-t-xl py-3 px-6">
                  <h1 className="text-white text-lg">Filter Pencarian</h1>
                </div>
                <div className="w-full py-4 px-6">
                  <div clasName="py-2">
                    <p className="mb-4 text-sm">Kategori</p>
                    <div className="w-full flex items-start mb-4">
                      <input id="software-engineer" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="software-engineer" className="ml-2 text-sm text-gray-800">
                        Software Engineer
                      </label>
                    </div>
                    <div className="w-full flex items-start mb-4">
                      <input id="data-science" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="data-science" className="ml-2 text-sm text-gray-800">
                        Data Science
                      </label>
                    </div>
                    <div className="w-full flex items-start mb-4">
                      <input id="web-developer" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="web-developer" className="ml-2 text-sm text-gray-800">
                        Web Developer
                      </label>
                    </div>
                  </div>
                  <div className="py-2">
                    <p className="mb-2 text-sm">Jenjang Pendidikan</p>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full rounded border border-gray-300 bg-white py-3 px-3 text-sm font-medium leading-none text-gray-800 placeholder-gray-400"
                      placeholder="Strata 1"
                    />
                  </div>
                  <div className="py-2">
                    <p className="mb-2 text-sm">Lokasi</p>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full rounded border bg-white py-3 px-3 text-sm font-medium leading-none text-gray-800 placeholder-gray-400"
                      placeholder="Yogyakarta"
                    />
                  </div>
                  {/* <Link href={`/product`} passHref>
                    <button className="mt-5 w-full rounded-xl bg-blue-900/20 px-8 py-3 text-base font-semibold text-blue-500 transition duration-150 ease-in-out hover:bg-blue-900/30 hover:text-blue-600 focus:outline-none">
                      Apply
                    </button>
                  </Link> */}
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
              </div>
            </div>
          </section>
          <section className="mx-auto flex max-w-screen-xl flex-1 flex-col items-center justify-center py-28 px-8">
            <h1>dasdksadnsakdnsakjnfaskfnsmadnsafkasjdnksjafnasdjnafnasfnbaskdjnadja</h1>
          </section>
          <section className="mx-auto flex max-w-screen-xl flex-1 flex-col items-center justify-center space-y-8 py-28 px-8">
            <h1>dasdksadnsakdnsakjnfaskfnsmadnsafkasjdnksjafnasdjnafnasfnbaskdjnadja</h1>
          </section>
        </div>
        <FootNav />
      </div >
    </>
  )
}
