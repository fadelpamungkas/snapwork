import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import DefaultPicture from "../public/default_picture.png";
import toRupiah from "../lib/currency";
import useSWR from "swr";

const orderFetcher = (...args) => fetch(...args).then((res) => res.json());

export default function OrderTabAdminDashboard() {
  const [paymentItem, setPaymentItem] = useState("");
  const [isOpenPaymentDetail, setisOpenPaymentDetail] = useState(false);

  const { data: orderres, error: ordererror } = useSWR(
    `https://snapwork.herokuapp.com/api/transaction/orders`,
    orderFetcher
  );

  if (ordererror) return <div>Failed to load</div>;
  if (!orderres) return <div>Loading...</div>;

  const orders = orderres?.data.data;

  function closePaymentDetailModal() {
    setisOpenPaymentDetail(false);
  }

  function openPaymentDetailModal(item) {
    setisOpenPaymentDetail(true);
    setPaymentItem(item);
  }

  function PaymentFormDialog({ item }) {
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
                <input
                  id="status"
                  type="text"
                  name="status"
                  value={item.status}
                  className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                  placeholder="Enter company name"
                />
              </div>
              <div className="space-y-2">
                <h1>Nama</h1>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={item.name}
                  className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                  placeholder="Select type of industry"
                />
              </div>
              <div className="space-y-2">
                <h1>Waktu Pembayaran</h1>
                <input
                  id="datetime"
                  type="text"
                  name="datetime"
                  value={item.created_at}
                  className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                  placeholder="Enter company email"
                />
              </div>
              <div className="space-y-2">
                <h1>Metode</h1>
                <input
                  id="method"
                  type="text"
                  name="method"
                  value={item.method}
                  className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                  placeholder="Enter website URL"
                />
              </div>
              <div className="space-y-2">
                <h1>Jumlah</h1>
                <input
                  id="amount"
                  type="text"
                  name="amount"
                  value={toRupiah(item.amount)}
                  className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="space-y-2">
                <h1>Bukti Pembayaran</h1>
                <input
                  id="fileproof"
                  type="text"
                  name="fileproof"
                  value={item.fileproof}
                  className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
          </div>
        </body>
      </>
    );
  }

  return (
    <>
      <div className="space-y-8">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">Verifikasi Pembayaran</h1>
          <p className="text-sm text-gray-500 whitespace-pre-line">{`Memberikan kemudahan membaca informasi dengan cepat dan akurat 
dari database yang telah dihubungkan`}</p>
        </div>
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
            {orders.map((item, index) => (
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
                <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                  {item.created_at}
                </h1>
                <h1 className="flex col-span-2 justify-center text-sm text-green-500">
                  {toRupiah(item.amount)}
                </h1>
                <div className="flex col-span-1 justify-center">
                  {item.status === "Verified" ? (
                    <h1 className="py-2 px-4 text-sm text-green-600 bg-green-50 rounded-lg">
                      {item.status}
                    </h1>
                  ) : (
                    <h1 className="py-2 px-4 text-sm text-yellow-600 bg-yellow-50 rounded-lg">
                      {item.status}
                    </h1>
                  )}
                </div>
                <button
                  type="button"
                  className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-blue-900 bg-blue-100 rounded-2xl border border-transparent transition duration-150 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={() => openPaymentDetailModal(item)}
                >
                  Detail
                </button>
              </div>
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
            {orders.map((item, index) => (
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
                <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                  {item.created_at}
                </h1>
                <h1 className="flex col-span-2 justify-center text-sm text-green-500">
                  {toRupiah(item.amount)}
                </h1>
                <div className="flex col-span-1 justify-center">
                  {item.status === "Verified" ? (
                    <h1 className="py-2 px-4 text-sm text-green-600 bg-green-50 rounded-lg">
                      {item.status}
                    </h1>
                  ) : (
                    <h1 className="py-2 px-4 text-sm text-yellow-600 bg-yellow-50 rounded-lg">
                      {item.status}
                    </h1>
                  )}
                </div>
                <button
                  type="button"
                  className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-blue-900 bg-blue-100 rounded-2xl border border-transparent transition duration-150 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={() => openPaymentDetailModal(item)}
                >
                  Detail
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
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
                  <PaymentFormDialog item={paymentItem} />
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
