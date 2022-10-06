import Image from "next/image";
import FootNav from "../components/FootNav";
import HeadNav from "../components/HeadNav";
import ProfilTab from "../components/ProfilTab";
import CVTab from "../components/CVTab";
import PengembanganDiriTab from "../components/PengembanganDiriTab";
import KarirTab from "../components/KarirTab";
import { Tab } from '@headlessui/react'
import TokopediaAvatar from "../public/avtokopedia.png";
import UserAvatar from "../public/avuser.png";
import { CogIcon } from "@heroicons/react/outline";
import useUser from "../lib/useUser";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Profile() {
  const { user } = useUser();

  const tabItem = [
    {
      id: 1,
      name: "Profil",
    },
    {
      id: 2,
      name: "CV Saya",
    },
    {
      id: 3,
      name: "Pengembangan Diri",
    },
    {
      id: 4,
      name: "Karir Saya",
    },
  ];
  return (
    <>
      <body className="w-full py-8 text-gray-900">
        <HeadNav />
        <div className="w-full bg-gray-50">
          <div className="mx-auto max-w-screen-xl py-16 px-8">
            <section className="border rounded-xl bg-white p-2 shadow-2xl">
              <div className="flex items-center py-2 px-4 justify-between">
                <h1 className="text-2xl text-blue-500 font-semibold">Profil Saya</h1>
                <button type="submit" className="text-lg text-red-500 font-medium rounded-2xl space-x-2 px-6 py-2 inline-flex items-center">
                  <CogIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                  <span>Ubah Profil</span>
                </button>
              </div>
              <div className="mx-auto max-w-screen-xl px-2 grid grid-cols-10 gap-8">
                <div className="col-span-3">
                  <div className="rounded-xl p-8 border divide-y divide-gray-300">
                    <div className="flex flex-col items-center justify-center py-4">
                      <Image
                        src={UserAvatar}
                        alt=""
                        width={90}
                        height={90}
                        className="rounded-full"
                      />
                      {user?.isLoggedIn ? (
                        <h1 className="text-xl font-semibold mt-4">{user.userData.name}</h1>
                      ) : (
                          <h1 className="text-xl font-semibold mt-4">Fadel Pamungkas</h1>
                        )}
                      < h1 className="text-sm">S1 Teknik Informatika</h1>
                      <h1 className="text-sm">Mahasiswa di Universitas Islam Indonesia</h1>
                      <h1 className="text-sm">Agustus 2018 - Sekarang</h1>
                    </div>
                    <div className="flex flex-col items-start justify-center py-4 space-y-4">
                      <div className="space-y-2">
                        <h1 className="text-sm text-gray-500">Pendidikan Terakhir</h1>
                        <h1 className="text-sm">SMA AL Azhar Cairo Yogyakarta</h1>
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-sm text-gray-500">Pekerjaan Terakhir</h1>
                        <h1 className="text-sm">Software Engineer di Tokopedia</h1>
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-sm text-gray-500">Alamat</h1>
                        <h1 className="text-sm">{`Jl. Padjajaran, Pogung Lor, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581`}</h1>
                      </div>
                    </div>
                    {user?.isLoggedIn ? (
                      <div className="flex flex-col items-start justify-center py-4 space-y-4">
                        <div className="space-y-2">
                          <h1 className="text-sm text-gray-500">Instagram</h1>
                          <h1 className="text-sm">instagram.com/{user.userData.name}</h1>
                        </div>
                        <div className="space-y-2">
                          <h1 className="text-sm text-gray-500">Linkedin</h1>
                          <h1 className="text-sm">linkedin.com/{user.userData.name}</h1>
                        </div>
                      </div>
                    ) : (
                        <div className="flex flex-col items-start justify-center py-4 space-y-4">
                          <div className="space-y-2">
                            <h1 className="text-sm text-gray-500">Instagram</h1>
                            <h1 className="text-sm">instagram.com/MikaelaRimnara</h1>
                          </div>
                          <div className="space-y-2">
                            <h1 className="text-sm text-gray-500">Linkedin</h1>
                            <h1 className="text-sm">linkedin.com/Mikaela-Rimnara</h1>
                          </div>
                        </div>
                      )}
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="rounded-xl flex-col justify-center items-start border">
                    <Tab.Group>
                      <Tab.List className="flex space-x-1 rounded-xl p-1 justify-evenly items-center">
                        {tabItem.map((item) => (
                          <Tab
                            key={item}
                            className={({ selected }) =>
                              classNames(
                                'py-2.5 text-base font-medium leading-5 text-black',
                                selected
                                  ? 'border-b-4 border-b-blue-300 '
                                  : 'text-black hover:border-b-4 border-b-blue-50'
                              )
                            }
                          >
                            {item.name}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels className="mt-2">
                        <Tab.Panel>
                          <ProfilTab />
                        </Tab.Panel>
                        <Tab.Panel>
                          <CVTab />
                        </Tab.Panel>
                        <Tab.Panel>
                          <PengembanganDiriTab />
                        </Tab.Panel>
                        <Tab.Panel>
                          <KarirTab />
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <FootNav />
      </body>
    </>
  )
}
