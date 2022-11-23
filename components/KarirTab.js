import Image from "next/image";
import { Tab } from "@headlessui/react";
import TokopediaAvatar from "../public/avtokopedia.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function KarirTab({ applications }) {
  const tabItem = [
    {
      id: 1,
      name: "Rekap Lamaran",
    },
    {
      id: 2,
      name: "Pengumuman Tes",
    },
  ];
  return (
    <>
      <Tab.Group vertical as="div" className="grid grid-cols-5">
        <Tab.List className="flex flex-col col-span-1 justify-start items-start py-4 space-y-2 text-sm border-t border-r">
          {tabItem.map((item) => (
            <Tab
              key={item}
              className={({ selected }) =>
                classNames(
                  "py-1 pl-8 text-sm font-medium leading-5 text-black",
                  "",
                  selected
                    ? "border-l-4 border-l-blue-300 "
                    : "border-l-blue-50 text-black hover:border-l-2"
                )
              }
            >
              {item.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="col-span-4 py-2 px-8 border-t">
          <Tab.Panel>
            <div>
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col justify-center items-center space-y-2">
                  <h1 className="text-lg font-medium">REKAP LAMARAN</h1>
                  <p className="text-sm text-center text-gray-500">
                    Berikut ini adalah informasi lowongan yang telah Kamu lamar.
                    Kamu dapat membatalkan lamaran tersebut jika lowongan belum
                    ditutup.
                  </p>
                </div>
              </div>
              <div className="my-8 space-y-4">
                {applications ? (
                  <>
                    {applications.map((item, index) => (
                      <div
                        key={index}
                        className="py-4 px-12 rounded-lg border border-gray-300"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <Image
                              src={TokopediaAvatar}
                              alt=""
                              width={70}
                              height={70}
                              className="rounded-full"
                            />
                            <div>
                              <h1 className="font-semibold">
                                {item.companyname}
                              </h1>
                              <div className="flex justify-start items-center space-x-1">
                                <p className="text-xs text-gray-500">
                                  {item.jobposition}
                                </p>
                                <p className="text-xs text-gray-500">•</p>
                                <p className="text-xs text-gray-500">
                                  {item.jobtype}
                                </p>
                              </div>
                              <div className="flex justify-start items-center space-x-1">
                                <p className="text-xs text-gray-500">
                                  Tanggal Melamar
                                </p>
                                <p className="text-xs text-gray-500">:</p>
                                <p className="text-xs text-gray-500">
                                  {item.created_at}
                                </p>
                              </div>
                            </div>
                          </div>
                          {item.status === "Accepted" ? (
                            <div className="py-2 px-4 text-sm text-green-900 bg-green-100 rounded-lg">
                              <h1>{item.status}</h1>
                            </div>
                          ) : item.status === "Rejected" ? (
                            <div className="py-2 px-4 text-sm text-red-900 bg-red-100 rounded-lg">
                              <h1>{item.status}</h1>
                            </div>
                          ) : (
                            <div className="py-2 px-4 text-sm text-yellow-900 bg-yellow-100 rounded-lg">
                              <h1>{item.status}</h1>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <h1>Tidak ada Lamaran</h1>
                )}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col justify-center items-center space-y-2">
                  <h1 className="text-lg font-medium">PENGUMUMAN TES</h1>
                  <p className="text-sm text-center text-gray-500">
                    Di bawah ini adalah panggilan tes yang kamu lamar. Untuk
                    melihat apakah kamu dipanggil tes, ayo unduh file-nya dan
                    lihat apakah nama kamu tertera di sana. Panggilan tes dengan
                    nama kamu yang dipanggil ditandai dengan tanda bintang.
                  </p>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
