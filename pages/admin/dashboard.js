import Image from "next/image";
import FootNav from "../../components/FootNav";
import HeadNav from "../../components/HeadNav";
import DefaultPicture from "../../public/default_picture.png";
import { Tab } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useUser from "../../lib/useUser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export async function getStaticProps() {
  const res = await fetch("https://snapwork.herokuapp.com/api/companies");
  const getCompanies = await res.json();
  const companies = getCompanies.data.data;
  return {
    props: {
      companies,
    },
  };
}

export default function AdminDashboard({ companies }) {
  const { user } = useUser();
  const [edit, setEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const tabItem = [
    {
      id: 1,
      name: "Perusahaan",
    },
    {
      id: 2,
      name: "Pembayaran",
    },
    {
      id: 3,
      name: "Berita",
    },
    {
      id: 4,
      name: "Video Profil",
    },
  ];

  const companyVerificationData = [
    {
      name: "PT Toyota Astra Motor",
      date: "15/10/2022",
      registrar: "Courtney Henry",
      link: "www.toyota.astra.co.id",
    },
    {
      name: "PT Gameloft Indonesia",
      date: "09/10/2022",
      registrar: "Eleanor Pena",
      link: "www.gameloft.co.id",
    },
    {
      name: "PT Okaya Indonesia",
      date: "02/10/2022",
      registrar: "Floyd Miles",
      link: "www.okaya.co.jp",
    },
    {
      name: "PT Ega Tekelindo Prima",
      date: "28/08/2022",
      registrar: "Kathryn Murphy",
      link: "www.egatek.com",
    },
  ];

  const paymentVerificationData = [
    {
      name: "Putri Saman",
      date: "15/10/2022",
      time: "06:31",
      method: "GoPay",
      amount: "Rp150.000",
    },
    {
      name: "Kevin Barbosa",
      date: "09/10/2022",
      time: "22:02",
      method: "Mandiri",
      amount: "Rp50.000",
    },
    {
      name: "Hendra Gunawan",
      date: "02/10/2022",
      time: "17:54",
      method: "BNI",
      amount: "Rp50.000",
    },
    {
      name: "Billy Indra",
      date: "28/08/2022",
      time: "15:35",
      method: "BCA",
      amount: "Rp100.000",
    },
  ];

  function closeModal() {
    setIsOpen(false);
    setEdit(false);
  }

  function closeModalAndSave() {
    setIsOpen(false);
    setEdit(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <body className="py-8 w-full text-gray-900 bg-gray-100">
        <HeadNav />
        <div className="p-8 mx-auto max-w-screen-xl">
          <Tab.Group vertical as="div" className="grid grid-cols-5">
            <Tab.List className="flex flex-col col-span-1 justify-start items-start p-8 space-y-2 text-sm bg-white rounded-2xl">
              <div className="mb-4">
                <h1 className="text-lg font-semibold">General</h1>
              </div>
              {tabItem.map((item) => (
                <Tab
                  key={item}
                  className={({ selected }) =>
                    classNames(
                      "py-1 pl-8 text-base font-medium leading-5 text-black",
                      "",
                      selected
                        ? "border-l-4 border-l-blue-300"
                        : "border-l-blue-50 text-black hover:border-l-2"
                    )
                  }
                >
                  {item.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="col-span-4 pl-8">
              <Tab.Panel>
                <div className="">
                  <div className="grid grid-cols-1 p-8 bg-white rounded-2xl divide-y divide-gray-300">
                    <div className="flex justify-between items-center py-2">
                      <h1 className="text-xl font-semibold">
                        Verifikasi Perusahaan
                      </h1>
                      {edit ? (
                        <button
                          type="submit"
                          onClick={openModal}
                          className="inline-flex justify-center items-center space-x-1 text-base font-medium text-blue-500"
                        >
                          <CogIcon className="w-4 h-4" aria-hidden="true" />
                          <span>Simpan</span>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          onClick={() => setEdit(true)}
                          className="inline-flex justify-center items-center space-x-1 text-base font-medium text-red-500"
                        >
                          <CogIcon className="w-4 h-4" aria-hidden="true" />
                          <span>Ubah</span>
                        </button>
                      )}
                    </div>
                    <div className="py-2">
                      <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                        <h1 className="text-base font-semibold">
                          Verifikasi Perusahaan
                        </h1>
                      </div>
                      {companies.map((item) => (
                        <div
                          key={companies._id}
                          className="grid grid-cols-8 justify-center items-center py-2 space-x-4"
                        >
                          <div className="flex col-span-2 items-center space-x-4">
                            <Image
                              src={DefaultPicture}
                              alt=""
                              width={40}
                              height={40}
                              className="object-cover col-span-1 rounded-full"
                            />
                            <h1 className="font-semibold">{item.name}</h1>
                          </div>
                          <h1 className="flex col-span-1 text-sm text-gray-500">
                            {item.created_at}
                          </h1>
                          <h1 className="flex col-span-2 text-sm font-semibold">
                            {item.officername}
                          </h1>
                          <a className="flex col-span-2 text-sm text-blue-500">
                            {item.website}
                          </a>
                          <button
                            type="button"
                            className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-blue-900 bg-blue-100 rounded-2xl border border-transparent transition duration-150 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          >
                            Detail
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="">
                  <div className="grid grid-cols-1 p-8 bg-white rounded-2xl divide-y divide-gray-300">
                    <div className="flex justify-between items-center py-2">
                      <h1 className="text-xl font-semibold">
                        Verifikasi Pembayaran
                      </h1>
                      {edit ? (
                        <button
                          type="submit"
                          onClick={openModal}
                          className="inline-flex justify-center items-center space-x-1 text-base font-medium text-blue-500"
                        >
                          <CogIcon className="w-4 h-4" aria-hidden="true" />
                          <span>Simpan</span>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          onClick={() => setEdit(true)}
                          className="inline-flex justify-center items-center space-x-1 text-base font-medium text-red-500"
                        >
                          <CogIcon className="w-4 h-4" aria-hidden="true" />
                          <span>Ubah</span>
                        </button>
                      )}
                    </div>
                    <div className="py-2">
                      <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                        <h1 className="text-base font-semibold">
                          Verifikasi Pembayaran
                        </h1>
                      </div>
                      {paymentVerificationData.map((item) => (
                        <div className="grid grid-cols-8 justify-center items-center py-2 space-x-4">
                          <div className="flex col-span-2 items-center space-x-4">
                            <Image
                              src={DefaultPicture}
                              alt=""
                              width={40}
                              height={40}
                              className="object-cover col-span-1 rounded-full"
                            />
                            <h1 className="font-semibold">{item.name}</h1>
                          </div>
                          <h1 className="flex col-span-2 text-sm text-gray-500">
                            {item.date} {item.time}
                          </h1>
                          <h1 className="flex col-span-1 justify-center text-sm font-semibold">
                            {item.method}
                          </h1>
                          <h1 className="flex col-span-2 text-sm text-green-500">
                            {item.amount}
                          </h1>
                          <button
                            type="button"
                            className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-blue-900 bg-blue-100 rounded-2xl border border-transparent transition duration-150 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          >
                            Detail
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div>
                  <div className="grid grid-cols-1 p-8 bg-white rounded-2xl divide-y divide-gray-300">
                    <div className="py-2">
                      <h1 className="pb-2 text-xl font-semibold">Dokumen</h1>
                      <p className="pb-2 text-sm">
                        Informasi berikut ini bersifat opsional, silakan diisi
                        untuk kepentingan lamar online yang mewajibkan
                        syarat-syarat dokumen harus diunggah.
                      </p>
                    </div>
                    <div className="py-2">
                      <div className="grid grid-cols-5 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                        <div className="col-span-3">
                          <div className="grid grid-cols-4 justify-start items-start mb-2">
                            <h1 className="col-span-1 text-lg font-semibold">
                              KTP
                            </h1>
                            <div className="col-span-3">
                              <p className="overflow-auto text-sm font-semibold">
                                Foto KTP 2022.png
                              </p>
                              <p className="text-sm">512KB</p>
                            </div>
                          </div>
                          <ul className="text-xs list-disc list-inside">
                            <li>
                              Hanya file jpg, jpeg, png dan pdf yang diijinkan
                            </li>
                            <li>Ukuran maksimal file adalah 800kb</li>
                          </ul>
                        </div>
                        <div className="flex col-span-2 justify-center items-center m-auto space-x-4">
                          <button className="py-1 px-5 text-sm text-white bg-red-500 rounded">
                            Hapus
                          </button>
                          <button className="py-1 px-5 text-sm text-white bg-blue-500 rounded">
                            Unggah
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="grid grid-cols-5 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                        <div className="col-span-3">
                          <div className="grid grid-cols-4 justify-start items-start mb-2">
                            <h1 className="col-span-1 text-lg font-semibold">
                              Ijazah
                            </h1>
                            <div className="col-span-3">
                              <p className="overflow-auto text-sm font-semibold">
                                Foto Ijazah SMA 2022.png
                              </p>
                              <p className="text-sm">512KB</p>
                            </div>
                          </div>
                          <ul className="text-xs list-disc list-inside">
                            <li>
                              Hanya file jpg, jpeg, png dan pdf yang diijinkan
                            </li>
                            <li>Ukuran maksimal file adalah 800kb</li>
                          </ul>
                        </div>
                        <div className="flex col-span-2 justify-center items-center m-auto space-x-4">
                          <button className="py-1 px-5 text-sm text-white bg-red-500 rounded">
                            Hapus
                          </button>
                          <button className="py-1 px-5 text-sm text-white bg-blue-500 rounded">
                            Unggah
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="grid grid-cols-5 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                        <div className="col-span-3">
                          <div className="grid grid-cols-4 justify-start items-start mb-2">
                            <h1 className="col-span-1 text-lg font-semibold">
                              SKCK
                            </h1>
                            <div className="col-span-3">
                              <p className="overflow-auto text-sm font-semibold">
                                Foto SKCK 2022.png
                              </p>
                              <p className="text-sm">512KB</p>
                            </div>
                          </div>
                          <ul className="text-xs list-disc list-inside">
                            <li>
                              Hanya file jpg, jpeg, png dan pdf yang diijinkan
                            </li>
                            <li>Ukuran maksimal file adalah 800kb</li>
                          </ul>
                        </div>
                        <div className="flex col-span-2 justify-center items-center m-auto space-x-4">
                          <button className="py-1 px-5 text-sm text-white bg-red-500 rounded">
                            Hapus
                          </button>
                          <button className="py-1 px-5 text-sm text-white bg-blue-500 rounded">
                            Unggah
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      <div className="grid grid-cols-5 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                        <div className="col-span-3">
                          <div className="grid grid-cols-4 justify-start items-start mb-2">
                            <h1 className="col-span-1 text-lg font-semibold">
                              CV
                            </h1>
                            <div className="col-span-3">
                              <p className="overflow-auto text-sm font-semibold">
                                Curriculum Vitae.png
                              </p>
                              <p className="text-sm">512KB</p>
                            </div>
                          </div>
                          <ul className="text-xs list-disc list-inside">
                            <li>
                              Hanya file jpg, jpeg, png dan pdf yang diijinkan
                            </li>
                            <li>Ukuran maksimal file adalah 800kb</li>
                          </ul>
                        </div>
                        <div className="flex col-span-2 justify-center items-center m-auto space-x-4">
                          <button className="py-1 px-5 text-sm text-white bg-red-500 rounded">
                            Hapus
                          </button>
                          <button className="py-1 px-5 text-sm text-white bg-blue-500 rounded">
                            Unggah
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div>
                  <div className="grid grid-cols-1 p-8 bg-white rounded-2xl divide-y divide-gray-300">
                    <div className="py-2">
                      <h1 className="pb-2 text-xl font-semibold">Portofolio</h1>
                      <p className="pb-2 text-sm">
                        Informasi berikut ini bersifat opsional, silakan diisi
                        untuk kepentingan lamar online yang mewajibkan
                        syarat-syarat dokumen harus diunggah.
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
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
                <Dialog.Panel className="overflow-hidden p-8 w-full max-w-lg text-left align-middle bg-white rounded-2xl transition-all transform">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Simpan
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 whitespace-pre-line">
                      Semua Perubahan akan disimpan dan tidak dapat
                      dikembalikan.
                    </p>
                  </div>
                  <div className="mt-4 space-x-4">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-blue-900 bg-blue-100 rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModalAndSave}
                    >
                      Simpan
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-transparent hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Batal
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
