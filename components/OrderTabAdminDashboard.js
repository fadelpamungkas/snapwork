import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import DefaultPicture from "../public/default_picture.png";
import toRupiah from "../lib/currency";
import ImageLogo from "../public/ImageLogo.svg";

export default function OrderTabAdminDashboard({ persons, companies }) {
  const [testPaymentItem, setTestPaymentItem] = useState("");
  const [jobPaymentItem, setJobPaymentItem] = useState("");
  const [comPaymentItem, setComPaymentItem] = useState("");
  const [isOpenTestPaymentDetail, setisOpenTestPaymentDetail] = useState(false);
  const [isOpenJobPaymentDetail, setisOpenJobPaymentDetail] = useState(false);

  function declineTestPaymentDetailModal(item) {
    handleDeclineTestStatus(item);
  }

  function verifyTestPaymentDetailModal(item) {
    handleVerifyTestStatus(item);
  }

  function closeTestPaymentDetailModal() {
    setisOpenTestPaymentDetail(false);
  }

  function openTestPaymentDetailModal(item) {
    setisOpenTestPaymentDetail(true);
    setTestPaymentItem(item);
  }

  function declineJobPaymentDetailModal(item, comId) {
    handleDeclineJobStatus(item, comId);
  }

  function verifyJobPaymentDetailModal(item, comId) {
    handleVerifyJobStatus(item, comId);
  }

  function closeJobPaymentDetailModal() {
    setisOpenJobPaymentDetail(false);
  }

  function openJobPaymentDetailModal(item, comId) {
    setisOpenJobPaymentDetail(true);
    setJobPaymentItem(item);
    setComPaymentItem(comId);
  }

  const handleDeclineTestStatus = async (item) => {
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/person/selfdevelopment/payment",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: item._id,
          status: "Rejected",
          price: item.selfdevelopment.payment.price,
          fileproof: item.selfdevelopment.payment.fileproof,
        }),
      }
    );
    const data = await response.json();

    if (data === 200) {
      alert("Berhasil update");
      closeTestPaymentDetailModal();
    } else {
      alert("Error: " + data.message);
      closeTestPaymentDetailModal();
    }
  };

  const handleVerifyTestStatus = async (item) => {
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/person/selfdevelopment/payment",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: item._id,
          status: "Done",
          price: item.selfdevelopment.payment.price,
          fileproof: item.selfdevelopment.payment.fileproof,
        }),
      }
    );
    const data = await response.json();

    if (data === 200) {
      alert("Berhasil update");
      closeTestPaymentDetailModal();
    } else {
      alert("Error: " + data.message);
      closeTestPaymentDetailModal();
    }
  };

  const handleDeclineJobStatus = async (item, comId) => {
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/company/job/payment",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyid: comId,
          companyjobid: item._id,
          status: "Rejected",
          packet: item.payment.packet,
          fileproof: item.payment.fileproof,
        }),
      }
    );
    const data = await response.json();

    if (data === 200) {
      alert("Berhasil update");
      closeJobPaymentDetailModal();
    } else {
      alert("Error: " + data.message);
      closeJobPaymentDetailModal();
    }
  };

  const handleVerifyJobStatus = async (item, comId) => {
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/company/job/payment",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyid: comId,
          companyjobid: item._id,
          status: "Done",
          packet: item.payment.packet,
          fileproof: item.payment.fileproof,
        }),
      }
    );
    const data = await response.json();

    if (data === 200) {
      alert("Berhasil update");
      closeJobPaymentDetailModal();
    } else {
      alert("Error: " + data.message);
      closeJobPaymentDetailModal();
    }
  };

  function JobPaymentFormDialog({ item, comId }) {
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
              {item.payment.status !== "Done" && (
                <div className="flex justify-end mt-4 space-x-8">
                  <button
                    type="button"
                    className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => declineJobPaymentDetailModal(item, comId)}
                  >
                    Decline
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    onClick={() => verifyJobPaymentDetailModal(item, comId)}
                  >
                    Verify
                  </button>
                </div>
              )}
            </div>
          </div>
        </body>
      </>
    );
  }

  function TestPaymentFormDialog({ item }) {
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
                {item.selfdevelopment.payment.status === "Done" ? (
                  <input
                    disabled
                    id="status"
                    type="text"
                    name="status"
                    value={item.selfdevelopment.payment.status}
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none text-green-600 bg-green-100 rounded-lg border shadow-sm"
                  />
                ) : (
                  <input
                    disabled
                    id="status"
                    type="text"
                    name="status"
                    value={item.selfdevelopment.payment.status}
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none text-yellow-600 bg-yellow-100 rounded-lg border shadow-sm"
                  />
                )}
              </div>
              <div className="space-y-2">
                <h1>Nama</h1>
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
                  value={item.selfdevelopment.payment.created_at}
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
                  value={toRupiah(item.selfdevelopment.payment.price)}
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
                  <span>{item.selfdevelopment.payment.fileproof}</span>
                </a>
              </div>
              {item.selfdevelopment.payment.status !== "Done" && (
                <div className="flex justify-end pt-4 space-x-8">
                  <button
                    type="button"
                    className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => declineTestPaymentDetailModal(item)}
                  >
                    Decline
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    onClick={() => verifyTestPaymentDetailModal(item)}
                  >
                    Verify
                  </button>
                </div>
              )}
            </div>
          </div>
        </body>
      </>
    );
  }

  return (
    <>
      <div className="space-y-8">
        <div className="grid grid-cols-1 p-8 bg-white rounded-2xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">
              Pembayaran Tes Kepribadian
            </h1>
          </div>
          <div className="pt-4">
            <div className="grid grid-cols-8 justify-center items-center py-2 space-x-4">
              <h1 className="flex col-span-2 pl-14 text-sm text-gray-500">
                Nama
              </h1>
              <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                Waktu
              </h1>
              <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                Nominal
              </h1>
              <h1 className="flex col-span-1 justify-center text-sm text-gray-500">
                Status
              </h1>
              <h1 className="flex col-span-1 justify-center text-sm text-gray-500">
                Lihat Detail
              </h1>
            </div>
            {persons.map((item, index) => (
              <>
                {item?.selfdevelopment?.score && (
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
                    {item.selfdevelopment?.payment?.created_at ? (
                      <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                        {item.selfdevelopment?.payment?.created_at}
                      </h1>
                    ) : (
                      <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                        -
                      </h1>
                    )}
                    {item.selfdevelopment?.payment?.price ? (
                      <h1 className="flex col-span-2 justify-center text-sm text-green-500">
                        {toRupiah(item.selfdevelopment.payment.price)}
                      </h1>
                    ) : (
                      <h1 className="flex col-span-2 justify-center text-sm text-green-500">
                        -
                      </h1>
                    )}
                    <div className="flex col-span-1 justify-center">
                      {item.selfdevelopment?.payment?.status === "Done" ? (
                        <h1 className="py-2 px-4 text-sm text-green-600 bg-green-50 rounded-lg">
                          {item.selfdevelopment?.payment?.status}
                        </h1>
                      ) : item.selfdevelopment?.payment?.status ===
                        "Pending" ? (
                        <h1 className="py-2 px-4 text-sm text-yellow-600 bg-yellow-50 rounded-lg">
                          {item.selfdevelopment?.payment?.status}
                        </h1>
                      ) : (
                        <h1 className="py-2 px-4 text-sm text-yellow-600 bg-yellow-50 rounded-lg">
                          Waiting
                        </h1>
                      )}
                    </div>
                    {item.selfdevelopment.payment.created_at ? (
                      <button
                        type="button"
                        className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-blue-900 bg-blue-100 rounded-2xl border border-transparent transition duration-150 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => openTestPaymentDetailModal(item)}
                      >
                        Detail
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-gray-900 bg-gray-100 rounded-2xl border border-transparent"
                      >
                        Detail
                      </button>
                    )}
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 p-8 bg-white rounded-2xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">
              Pembayaran Postingan Lowongan
            </h1>
          </div>
          <div className="pt-4">
            <div className="grid grid-cols-8 justify-center items-center py-2 space-x-4">
              <h1 className="flex col-span-2 pl-14 text-sm text-gray-500">
                Nama
              </h1>
              <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                Waktu Pembayaran
              </h1>
              <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                Nominal
              </h1>
              <h1 className="flex col-span-1 justify-center text-sm text-gray-500">
                Status
              </h1>
              <h1 className="flex col-span-1 justify-center text-sm text-gray-500">
                Lihat Detail
              </h1>
            </div>
            {companies.map((company) => (
              <>
                {company.companyjob?.map((item, index) => (
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
                    {item.payment?.created_at ? (
                      <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                        {item.payment?.created_at}
                      </h1>
                    ) : (
                      <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                        -
                      </h1>
                    )}
                    {item.payment?.price ? (
                      <h1 className="flex col-span-2 justify-center text-sm text-green-500">
                        {toRupiah(item.payment?.price)}
                      </h1>
                    ) : (
                      <h1 className="flex col-span-2 justify-center text-sm text-green-500">
                        -
                      </h1>
                    )}
                    <div className="flex col-span-1 justify-center">
                      {item.payment?.status === "Done" ? (
                        <h1 className="py-2 px-4 text-sm text-green-600 bg-green-50 rounded-lg">
                          {item.payment?.status}
                        </h1>
                      ) : item.payment?.status === "Pending" ? (
                        <h1 className="py-2 px-4 text-sm text-yellow-600 bg-yellow-50 rounded-lg">
                          {item.payment?.status}
                        </h1>
                      ) : (
                        <h1 className="py-2 px-4 text-sm text-yellow-600 bg-yellow-50 rounded-lg">
                          Waiting
                        </h1>
                      )}
                    </div>
                    {item.payment.created_at ? (
                      <button
                        type="button"
                        className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-blue-900 bg-blue-100 rounded-2xl border border-transparent transition duration-150 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() =>
                          openJobPaymentDetailModal(item, company._id)
                        }
                      >
                        Detail
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-gray-900 bg-gray-100 rounded-2xl border border-transparent"
                      >
                        Detail
                      </button>
                    )}
                  </div>
                ))}
              </>
            ))}
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
                  <JobPaymentFormDialog
                    item={jobPaymentItem}
                    comId={comPaymentItem}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenTestPaymentDetail} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeTestPaymentDetailModal}
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
                  <TestPaymentFormDialog item={testPaymentItem} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
