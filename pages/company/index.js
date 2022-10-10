import Image from "next/image";
import FootNav from "../../components/FootNav";
import HeadNav from "../../components/HeadNav";
import ProfilTab from "../../components/ProfilTab";
import CVTab from "../../components/CVTab";
import KarirTab from "../../components/KarirTab";
import CompanyProfileTab from "../../components/CompanyProfileTab";
import CompanyLowonganTab from "../../components/CompanyLowonganTab";
import EditLowonganDialog from "../../components/EditLowonganDialog";
import { Tab } from "@headlessui/react";
import CompanyBanner from "../../public/CompanyBanner1.png";
import TokopediaAvatar from "../../public/avtokopedia.png";
import UserAvatar from "../../public/avuser.png";
import { CogIcon } from "@heroicons/react/outline";
import useUser from "../../lib/useUser";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Profile() {
  const { user } = useUser();

  const tabItem = [
    {
      id: 1,
      name: "Lowongan",
    },
    {
      id: 2,
      name: "Profil",
    },
  ];
  return (
    <>
      <body className="py-8 w-full text-gray-900">
        <HeadNav />
        <div className="w-full bg-gray-50">
          <div className="py-16 px-8 mx-auto max-w-screen-xl">
            <section className="p-2 bg-white rounded-xl border shadow-2xl">
              <div className="mb-8 p-2">
                <Image
                  className="object-fill max-w-lg rounded-2xl shadow-2xl"
                  src={CompanyBanner}
                  alt="Banner"
                />
              </div>
              <div className="grid grid-cols-10 gap-8 px-2 mx-auto max-w-screen-xl">
                <div className="col-span-3">
                  <div className="p-8 rounded-xl border divide-y divide-gray-300">
                    <div className="flex flex-col justify-center items-center py-4">
                      <Image
                        src={TokopediaAvatar}
                        alt=""
                        width={90}
                        height={90}
                        className="rounded-full"
                      />
                      {user?.isLoggedIn ? (
                        <h1 className="mt-4 text-xl font-semibold">
                          PT Tokopedia Indonesia
                        </h1>
                      ) : (
                        <h1 className="mt-4 text-xl font-semibold">
                          PT Tokopedia Indonesia
                        </h1>
                      )}
                    </div>
                    <div className="flex flex-col justify-center items-start py-4 space-y-4">
                      <div className="space-y-2">
                        <h1 className="text-sm text-gray-500">
                          Jenis Industri
                        </h1>
                        <h1 className="text-sm">
                          Penerbitan, percetakan, dan reproduksi
                        </h1>
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-sm text-gray-500">Situs Web</h1>
                        <h1 className="text-sm">https://www.tokopedia.com/</h1>
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-sm text-gray-500">Alamat</h1>
                        <h1 className="text-sm">{`Jl. Padjajaran, Pogung Lor, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581`}</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="flex-col justify-center items-start rounded-xl border">
                    <Tab.Group>
                      <Tab.List className="flex justify-evenly items-center p-1 space-x-1 rounded-xl">
                        {tabItem.map((item) => (
                          <Tab
                            key={item}
                            className={({ selected }) =>
                              classNames(
                                "py-2.5 text-base font-medium leading-5 text-black",
                                selected
                                  ? "border-b-4 border-b-blue-300 "
                                  : "border-b-blue-50 text-black hover:border-b-4"
                              )
                            }
                          >
                            {item.name}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels className="mt-2">
                        <Tab.Panel>
                          <CompanyLowonganTab editable={false}/>
                        </Tab.Panel>
                        <Tab.Panel>
                          <CompanyProfileTab />
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
  );
}
