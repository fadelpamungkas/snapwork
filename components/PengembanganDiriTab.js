import Image from "next/image";
import PaymentBanner from "../public/PaymentBanner1.png";
import BNILogo from "../public/BNI.png";
import BCALogo from "../public/BCA.png";
import MandiriLogo from "../public/Mandiri.png";
import GoPayLogo from "../public/GoPay.png";
import { Tab } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useUser from "../lib/useUser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function CVTab() {
  const { user } = useUser();
  const [edit, setEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFinal, setIsOpenFinal] = useState(false);

  const tabItem = [
    {
      id: 1,
      name: "Gaya Kepribadian",
    },
    {
      id: 2,
      name: "Minat Karier",
    },
    {
      id: 3,
      name: "Pemetaan Potensi",
    },
    {
      id: 4,
      name: "Complete Report",
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
    setIsOpenFinal(false);
    setIsOpen(true);
  }

  function closeModalFinal() {
    setIsOpenFinal(false);
  }

  function openModalFinal() {
    setIsOpen(false);
    setIsOpenFinal(true);
  }
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
              <div className="grid grid-cols-1 divide-y divide-gray-300">
                <div className="py-2">
                  <h1 className="pb-2 text-xl font-semibold">
                    Gaya Kepribadian
                  </h1>
                  <p className="pb-2 text-sm">
                    Hasil dari asesmen ini akan menghasilkan data berupa
                    gambaran kecenderungan kepribadian Kamu.
                  </p>
                </div>
                <div className="p-2 space-y-4">
                  <div className="flex justify-center items-center">
                    <p className="text-sm font-medium text-center whitespace-pre-line">{`Klik disini untuk mendapatkan 
laporan lengkap`}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-20 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={openModal}
                    >
                      Complete Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid grid-cols-1 divide-y divide-gray-300">
                <div className="py-2">
                  <h1 className="pb-2 text-xl font-semibold">Dokumen</h1>
                  <p className="pb-2 text-sm">
                    Informasi berikut ini bersifat opsional, silakan diisi untuk
                    kepentingan lamar online yang mewajibkan syarat-syarat
                    dokumen harus diunggah.
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
                        <h1 className="col-span-1 text-lg font-semibold">CV</h1>
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
              <div className="grid grid-cols-1 divide-y divide-gray-300">
                <div className="py-2">
                  <h1 className="pb-2 text-xl font-semibold">Portofolio</h1>
                  <p className="pb-2 text-sm">
                    Informasi berikut ini bersifat opsional, silakan diisi untuk
                    kepentingan lamar online yang mewajibkan syarat-syarat
                    dokumen harus diunggah.
                  </p>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid grid-cols-1 divide-y divide-gray-300">
                <div className="py-2">
                  <h1 className="pb-2 text-xl font-semibold">Video Profil</h1>
                  <p className="pb-2 text-sm">
                    Informasi berikut ini bersifat opsional, silakan diisi untuk
                    kepentingan lamar online yang mewajibkan syarat-syarat
                    dokumen harus diunggah.
                  </p>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
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
                <Dialog.Panel className="overflow-hidden p-2 w-full max-w-lg text-left align-middle bg-white rounded-2xl transition-all transform">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <Image
                      className="object-fill max-w-lg rounded-xl shadow-xl"
                      src={PaymentBanner}
                      alt="Header"
                    />
                    <div className="p-4 m-2 bg-white rounded-2xl shadow-xl -translate-y-12">
                      <h1>Total</h1>
                      <h1 className="text-2xl font-bold">Rp50.000</h1>
                      <h1 className="text-sm text-gray-300">
                        Order ID #report-202210050735258297562
                      </h1>
                    </div>
                  </Dialog.Title>
                  <div className="mx-4 space-y-2">
                    <h1 className="text-lg font-semibold">Transfer Bank</h1>
                    <div className="space-y-4">
                      <div className="flex justify-start items-start">
                        <div className="p-1 border border-gray-900">
                          <Image
                            className="object-contain"
                            src={BCALogo}
                            width={50}
                            height={20}
                            alt="BCA"
                          />
                        </div>
                        <div className="mx-4 space-y-1">
                          <h1 className="text-3xl font-bold">
                            1420 0008 6693 1
                          </h1>
                          <h1 className="text-lg font-medium">
                            BCA {" "}
                            <span className="font-normal text-base">atas nama</span>
                            {" "}Fadel Pamungkas
                          </h1>
                        </div>
                      </div>
                      <hr />
                      <div className="flex justify-start items-start">
                        <div className="p-1 border border-gray-900">
                          <Image
                            className="object-contain"
                            src={MandiriLogo}
                            width={50}
                            height={20}
                            alt="Mandiri"
                          />
                        </div>
                        <div className="mx-4 space-y-1">
                          <h1 className="text-3xl font-bold">
                            1420 0008 6693 1
                          </h1>
                          <h1 className="text-lg font-medium">
                            Mandiri {" "}
                            <span className="font-normal text-base">atas nama</span>
                            {" "}Fadel Pamungkas
                          </h1>
                        </div>
                      </div>
                      <hr />
                      <div className="flex justify-start items-start">
                        <div className="p-1 border border-gray-900">
                          <Image
                            className="object-contain"
                            src={BNILogo}
                            width={50}
                            height={20}
                            alt="BNI"
                          />
                        </div>
                        <div className="mx-4 space-y-1">
                          <h1 className="text-3xl font-bold">
                            1420 0008 6693 1
                          </h1>
                          <h1 className="text-lg font-medium">
                            BNI {" "}
                            <span className="font-normal text-base">atas nama</span>
                            {" "}Haydar Maulana
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-8 m-4 space-y-2">
                    <h1 className="text-lg font-semibold">Cara Pembayaran</h1>
                    <ul className="px-4 list-decimal list-outside">
                      <li className="">Ketuk ATM di halaman pembayaran.</li>
                      <li className="">Ketuk Bayar dengan ATM.</li>
                      <li className="">
                        Pastikan untuk memasukkan kode bank, nomor rekening
                        Snapwork, dan nominal pembayaran yang tepat, kemudian
                        lakukan transfer
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-end m-4 space-x-4">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-transparent hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-blue-900 bg-blue-100 rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={openModalFinal}
                    >
                      Lanjut
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenFinal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalFinal}>
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
                    Terima Kasih!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 whitespace-pre-line">
                      Anda berhasil mengisi lamaran pada{" "}
                      <span className="font-bold">
                        {" "}
                        Application Designer - PT. Tokopedia Indonesia.{" "}
                      </span>
                      Anda dapat memantau proses rekrutmen melalui halaman{" "}
                      <span className="text-blue-500"> Profil Saya.</span>
                    </p>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-transparent hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2"
                      onClick={openModal}
                    >
                      Kembali
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-blue-900 bg-blue-100 rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModalFinal}
                    >
                      OK
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
