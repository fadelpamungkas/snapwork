import Image from "next/image";
import { Tab } from '@headlessui/react'
import TokopediaAvatar from "../public/avtokopedia.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function KarirTab() {
  const tabItem = [
    {
      id: 1,
      name: "Rekap Lamaran",
    },
    {
      id: 2,
      name: "Pengumuman Tes",
    },
    {
      id: 3,
      name: "Panggilan Tes",
    },
  ];
  return (
    <>
      <Tab.Group vertical as="div" className="grid grid-cols-5">
        <Tab.List className="col-span-1 border-t border-r flex flex-col items-start justify-start py-4 space-y-2 text-sm">
          {tabItem.map((item) => (
            <Tab
              key={item}
              className={({ selected }) =>
                classNames(
                  'pl-8 py-1 text-sm font-medium leading-5 text-black',
                  '',
                  selected
                    ? 'border-l-4 border-l-blue-300 '
                    : 'text-black hover:border-l-2 border-l-blue-50'
                )
              }
            >
              {item.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="col-span-4 border-t py-4 px-8">
          <Tab.Panel>
            <div>
              <div className="rounded-lg shadow-lg bg-white p-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <h1 className="text-lg font-medium">
                    REKAP LAMARAN
                  </h1>
                  <p className="text-sm text-gray-500 text-center">
                    Berikut ini adalah informasi lowongan yang telah Kamu lamar. Kamu dapat membatalkan lamaran tersebut jika lowongan belum ditutup.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-blue-100 py-4 px-12 mt-8">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4 items-center">
                    <Image
                      src={TokopediaAvatar}
                      alt=""
                      width={70}
                      height={70}
                      className="rounded-full"
                    />
                    <div>
                      <h1 className="font-semibold">PT. Tokopedia Indonesia</h1>
                      <p className="text-xs text-gray-500">Application Designer</p>
                      <p className="text-xs text-gray-500">22 Juni 2022</p>
                    </div>
                  </div>
                  <button type="submit" className="py-1 px-5 rounded-lg text-white text-sm bg-red-500">Batal</button>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="rounded-lg shadow-lg bg-white p-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <h1 className="text-lg font-medium">
                    PENGUMUMAN TES
                  </h1>
                  <p className="text-sm text-gray-500 text-center">
                    Di bawah ini adalah panggilan tes yang kamu lamar. Untuk melihat apakah kamu dipanggil tes, ayo unduh file-nya dan lihat apakah nama kamu tertera di sana. Panggilan tes dengan nama kamu yang dipanggil ditandai dengan tanda bintang.
                  </p>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="rounded-lg shadow-lg bg-white p-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <h1 className="text-lg font-medium">
                    PANGGILAN TES
                  </h1>
                  <p className="text-sm text-gray-500 text-center">
                    Mau tau perusahaan yang memberikan kesempatanmu untuk bergabung bersama mereka? Ayo lihat jadwal test kamu dibawah ini dan pastikan konfirmasi kehadiran dan datang tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}
