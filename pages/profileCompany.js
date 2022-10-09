import Image from "next/image";
import FootNav from "../components/FootNav";
import HeadNav from "../components/HeadNav";
import ProfilTab from "../components/ProfilTab";
import CVTab from "../components/CVTab";
import KarirTab from "../components/KarirTab";
import CompanyProfileTab from "../components/CompanyProfileTab";
import CompanyLowonganTab from "../components/CompanyLowonganTab";
import EditLowonganDialog from "../components/EditLowonganDialog";
import { Tab } from "@headlessui/react";
import CompanyBanner from "../public/CompanyBanner1.png";
import TokopediaAvatar from "../public/avtokopedia.png";
import UserAvatar from "../public/avuser.png";
import { CogIcon } from "@heroicons/react/outline";
import useUser from "../lib/useUser";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Profile() {
  const { user } = useUser();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
                      <button
                        type="button"
                        onClick={openModal}
                        className="inline-flex justify-center items-center py-3 px-8 space-x-2 w-full text-sm rounded-lg border border-gray-900 transition duration-150 hover:text-blue-500 hover:border-blue-500"
                      >
                        Tambah Lowongan
                      </button>
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
                          <CompanyLowonganTab />
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
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="overflow-y-auto fixed inset-0">
            <div className="flex justify-center items-center p-4 min-h-full text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="overflow-hidden p-8 w-full max-w-6xl text-left align-middle bg-white rounded-2xl transition-all transform">
                  <Dialog.Title
                    as="h3"
                    className="p-4 text-xl font-medium leading-6 text-center text-gray-900"
                  >
                    Tambah Lowongan
                  </Dialog.Title>
                  <hr />
                  <EditLowonganDialog />

                  <div className="flex justify-end mt-4 space-x-8">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Post
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
