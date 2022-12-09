import Image from "next/image";
import DefaultPicture from "../public/default_picture.png";
import MarriageIcon from "../public/Marriage.svg";
import StateIcon from "../public/State.svg";
import BirthIcon from "../public/Birth.svg";
import GenderIcon from "../public/Gender.svg";
import AddressIcon from "../public/Address.svg";
import JobPositionIcon from "../public/JobPosition.svg";
import JobTypeIcon from "../public/JobType.svg";
import EmailIcon from "../public/Email.svg";
import PhoneIcon from "../public/Phone.svg";
import TwitterIcon from "../public/TwitterUser.svg";
import LinkedinIcon from "../public/LinkedinUser.svg";
import DocumentIcon from "../public/Document.svg";
import ImageLogo from "../public/ImageLogo.svg";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import toRupiah from "../lib/currency";
import countTime from "../lib/datetime";

export default function PembayaranTabCompanyDashboard({ job }) {
  const [jobPaymentItem, setJobPaymentItem] = useState("");
  const [isOpenJobPaymentDetail, setisOpenJobPaymentDetail] = useState(false);

  function closeJobPaymentDetailModal() {
    setisOpenJobPaymentDetail(false);
  }

  function openJobPaymentDetailModal(item) {
    setisOpenJobPaymentDetail(true);
    setJobPaymentItem(item);
  }

  function JobPaymentFormDialog({ item }) {
    return (
      <>
        <body className="w-full text-gray-900">
          <div className="flex justify-center items-center py-2 px-4 space-x-4">
            <div>
              <h1 className="text-2xl font-semibold text-red-500">
                Detail Pembayaran
              </h1>
            </div>
          </div>
          <div className="mx-auto w-full">
            <div className="py-4 px-8 space-y-4 rounded-xl">
              <div className="space-y-2">
                <h1>Status</h1>
                {item.payment.status === "Done" ? (
                  <input
                    disabled
                    id="status"
                    type="text"
                    name="status"
                    value={item.payment.status}
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none text-green-600 bg-green-100 rounded-lg border shadow-sm"
                  />
                ) : (
                  <input
                    disabled
                    id="status"
                    type="text"
                    name="status"
                    value={item.payment.status}
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none text-yellow-600 bg-yellow-100 rounded-lg border shadow-sm"
                  />
                )}
              </div>
              <div className="space-y-2">
                <h1>Nama Posisi</h1>
                <input
                  disabled
                  id="name"
                  type="text"
                  name="name"
                  value={item.name}
                  className="py-3.5 px-4 w-full text-sm font-medium leading-none text-gray-800 rounded-lg border shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <h1>Waktu Pembayaran</h1>
                <input
                  disabled
                  id="datetime"
                  type="text"
                  name="datetime"
                  value={item.payment.created_at}
                  className="py-3.5 px-4 w-full text-sm font-medium leading-none text-gray-800 rounded-lg border shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <h1>Jumlah</h1>
                <input
                  disabled
                  id="amount"
                  type="text"
                  name="amount"
                  value={toRupiah(item.payment.price)}
                  className="py-3.5 px-4 w-full text-sm font-medium leading-none text-gray-800 rounded-lg border shadow-sm"
                />
              </div>
              <div className="space-y-2">
                <h1>Bukti Pembayaran</h1>
                <a
                  download
                  className="flex items-center py-3.5 px-4 space-x-2 w-full text-sm font-medium leading-none text-gray-800 rounded-lg border shadow-sm transition duration-150 hover:bg-blue-50"
                  href="../public/bukti-pembayaran.jpg"
                >
                  <ImageLogo className="w-6 h-6" />
                  <span>{item.payment.fileproof}</span>
                </a>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }

  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 bg-white rounded-2xl">
          <div className="flex justify-between items-center py-4 px-8 bg-blue-500 rounded-t-2xl">
            <h1 className="text-lg font-medium text-white">
              Pembayaran Lowongan
            </h1>
          </div>
          <div className="py-4 px-10">
            <div className="grid grid-cols-8 justify-center items-center py-2 space-x-4">
              <div className="flex col-span-2 items-center space-x-3">
                <h1 className="text-sm text-gray-500">No</h1>
                <h1 className="text-sm text-gray-500">Nama Posisi</h1>
              </div>
              <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                Tanggal Pembayaran
              </h1>
              <h1 className="flex col-span-1 justify-center text-sm text-gray-500">
                Jumlah
              </h1>
              <h1 className="flex col-span-1 justify-center text-sm text-gray-500">
                Tenggat
              </h1>
              <div className="flex col-span-1 justify-center text-sm text-gray-500">
                Status
              </div>
              <div className="flex col-span-1 justify-center text-sm text-gray-500">
                Detail
              </div>
            </div>
            {job ? (
              <>
                {job.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-8 justify-center items-center py-2 space-x-4"
                  >
                    <div className="flex col-span-2 items-center space-x-4">
                      <h1 className="font-semibold">{index + 1}.</h1>
                      <h1 className="font-semibold">{item.name}</h1>
                    </div>
                    {item.payment?.created_at ? (
                      <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                        {item.payment.created_at}
                      </h1>
                    ) : (
                      <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                        -
                      </h1>
                    )}
                    {item.payment?.price ? (
                      <h1 className="flex col-span-1 justify-center text-sm font-semibold">
                        {toRupiah(item.payment.price)}
                      </h1>
                    ) : (
                      <h1 className="flex col-span-1 justify-center text-sm font-semibold">
                        -
                      </h1>
                    )}
                    {item.payment?.until ? (
                      <h1 className="flex col-span-1 justify-center text-sm font-semibold">
                        {countTime(item.payment.until)} hari lagi
                      </h1>
                    ) : (
                      <h1 className="flex col-span-1 justify-center text-sm font-semibold">
                        -
                      </h1>
                    )}
                    <div className="flex col-span-1 justify-center">
                      {item.payment?.status === "Done" ? (
                        <div className="py-2 px-4 text-sm text-green-900 bg-green-100 rounded-2xl">
                          <h1>{item.payment?.status}</h1>
                        </div>
                      ) : item.payment?.status === "Pending" ? (
                        <div className="py-2 px-4 text-sm text-yellow-900 bg-yellow-100 rounded-2xl">
                          <h1>{item.payment?.status}</h1>
                        </div>
                      ) : (
                        <div className="py-2 px-4 text-sm text-red-900 bg-red-100 rounded-2xl">
                          <h1>Waiting</h1>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => openJobPaymentDetailModal(item)}
                      className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-blue-900 bg-blue-100 rounded-2xl border border-transparent transition duration-150 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Detail
                    </button>
                  </div>
                ))}
              </>
            ) : (
              <h1>Tidak ada lowongan</h1>
            )}
          </div>
        </div>
      </div>
      <Transition appear show={isOpenJobPaymentDetail} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeJobPaymentDetailModal}
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
                  <JobPaymentFormDialog item={jobPaymentItem} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
