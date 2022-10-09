import Image from "next/image";
import FootNav from "../../components/FootNav";
import HeadNav from "../../components/HeadNav";
import CompanyFormDialog from "../../components/CompanyFormDialog";
import PaymentFormDialog from "../../components/PaymentFormDialog";
import DefaultPicture from "../../public/default_picture.png";
import { Tab } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import toRupiah from "../../lib/currency"
import useUser from "../../lib/useUser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export async function getStaticProps() {
  const resCompanies = await fetch("https://snapwork.herokuapp.com/api/companies");
  const getCompanies = await resCompanies.json();
  const companies = getCompanies.data.data;

  const resOrders = await fetch("https://snapwork.herokuapp.com/api/transaction/orders");
  const getOrders = await resOrders.json();
  const orders = getOrders.data.data;

  return {
    props: {
      companies,
      orders,
    },
  };
}

export default function AdminDashboard({ companies, orders }) {
  const { user } = useUser();
  const [edit, setEdit] = useState(false);
  const [companyItem, setCompanyItem] = useState("");
  const [paymentItem, setPaymentItem] = useState("");
  const [isOpenCompanyDetail, setIsOpenCompanyDetail] = useState(false);
  const [isOpenPaymentDetail, setisOpenPaymentDetail] = useState(false);

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

  function closeCompanyDetailModal() {
    setIsOpenCompanyDetail(false);
  }

  function openCompanyDetailModal() {
    setIsOpenCompanyDetail(true);
  }

  function closePaymentDetailModal() {
    setisOpenPaymentDetail(false);
  }

  function openPaymentDetailModal() {
    setisOpenPaymentDetail(true);
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
                    </div>
                    <div className="py-2">
                      <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                        <h1 className="text-base font-semibold">
                          Verifikasi Perusahaan
                        </h1>
                      </div>
                      {companies.map((item, index) => (
                        <div
                          key={index}
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
                          <h1 className="flex col-span-2 justify-center text-sm font-semibold">
                            {item.officername}
                          </h1>
                          <div className="flex col-span-2 justify-center">
                            {item.status === "Verified" ? (
                              <h1 className="py-2 px-4 text-sm text-green-900 bg-green-100 rounded-2xl">
                                {item.status}
                              </h1>
                            ) : (
                              <h1 className="py-2 px-4 text-sm text-yellow-900 bg-yellow-100 rounded-2xl">
                                {item.status}
                              </h1>
                            )}
                          </div>
                          <button
                            type="button"
                            className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-blue-900 bg-blue-100 rounded-2xl border border-transparent transition duration-150 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => (
                              setCompanyItem(item),
                              setIsOpenCompanyDetail(true),
                            )}
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
                    </div>
                    <div className="py-2">
                      <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                        <h1 className="text-base font-semibold">
                          Verifikasi Pembayaran
                        </h1>
                      </div>
                      {orders.map((item, index) => (
                        <div key={index} className="grid grid-cols-8 justify-center items-center py-2 space-x-4">
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
                            {item.created_at}
                          </h1>
                          <h1 className="flex col-span-1 justify-center text-sm font-semibold">
                            {item.method}
                          </h1>
                          <h1 className="flex col-span-2 text-sm text-green-500">
                            {toRupiah(item.amount)}
                          </h1>
                          <button
                            type="button"
                            className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-blue-900 bg-blue-100 rounded-2xl border border-transparent transition duration-150 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => (
                              setPaymentItem(item),
                              setisOpenPaymentDetail(true),
                            )}
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
      <Transition appear show={isOpenCompanyDetail} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeCompanyDetailModal}
        >
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
                <Dialog.Panel className="overflow-hidden p-8 w-full max-w-screen-lg text-left align-middle bg-white rounded-2xl transition-all transform">
                  <CompanyFormDialog item={companyItem}/>
                  <div className="flex justify-end mt-4 space-x-8">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeCompanyDetailModal}
                    >
                      Decline
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={closeCompanyDetailModal}
                    >
                      Verify
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenPaymentDetail} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closePaymentDetailModal}
        >
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
                  <PaymentFormDialog item={paymentItem}/>
                  <div className="flex justify-end mt-4 space-x-8">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closePaymentDetailModal}
                    >
                      Decline
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={closePaymentDetailModal}
                    >
                      Verify
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
