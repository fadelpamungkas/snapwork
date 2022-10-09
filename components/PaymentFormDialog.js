import { ClipboardListIcon } from "@heroicons/react/outline";
import toRupiah from "../lib/currency"

export default function PaymentFormDialog({ item }) {
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
