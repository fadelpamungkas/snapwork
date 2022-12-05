import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ClipboardListIcon } from "@heroicons/react/outline";
import DefaultPicture from "../public/default_picture.png";
import useSWR from "swr";

const companyFetcher = (...args) => fetch(...args).then((res) => res.json());

export default function CompanyTabAdminDashboard() {
  const [companyItem, setCompanyItem] = useState("");
  const [isOpenCompanyDetail, setIsOpenCompanyDetail] = useState(false);

  const { data: companyres, error: companyerror } = useSWR(
    `https://snapwork.herokuapp.com/api/companies`,
    companyFetcher
  );

  if (companyerror) return <div>Failed to load</div>;
  if (!companyres) return <div>Loading...</div>;

  const companies = companyres?.data.data;

  function closeCompanyDetailModal() {
    setIsOpenCompanyDetail(false);
  }

  function openCompanyDetailModal(item) {
    setIsOpenCompanyDetail(true);
    setCompanyItem(item);
  }

  function verifyCompany(item) {
    handleVerifyCompanyStatus(item);
    setIsOpenCompanyDetail(false);
  }

  function declineCompany(item) {
    handleDeclineCompanyStatus(item);
    setIsOpenCompanyDetail(false);
  }

  const handleVerifyCompanyStatus = async (item) => {
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/company/status",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyid: item._id,
          status: 1,
        }),
      }
    );
    const data = await response.json();

    if (data === 200) {
      alert("Berhasil update");
    } else {
      alert("Error: " + data.message);
    }
  };

  const handleDeclineCompanyStatus = async (item) => {
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/company/status",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyid: item._id,
          status: 2,
        }),
      }
    );
    const data = await response.json();

    if (data === 200) {
      alert("Berhasil update");
    } else {
      alert("Error: " + data.message);
    }
  };

  function CompanyFormDialog({ item }) {
    return (
      <>
        <body className="w-full text-gray-900">
          <div className="flex justify-start items-center py-2 px-4 space-x-4">
            <div className="p-2 bg-red-500 rounded">
              <ClipboardListIcon
                className="w-6 h-6 text-white"
                aria-hidden="true"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-red-500">
                Verifikasi Perusahaan
              </h1>
              <p className="text-sm font-bold">
                Data di bawah ini merupakan data lengkap perusahaan untuk
                mendaftar sebagai member
              </p>
            </div>
          </div>
          <div className="px-2 mx-auto w-full">
            <div className="py-4 px-8 space-y-4 rounded-xl border divide-y divide-gray-300">
              <div className="py-2">
                <h1 className="pb-2 text-xl font-semibold">
                  Informasi Perusahaan
                </h1>
                <p className="pb-2 text-sm">
                  Silahkan isi data-data dibawah ini sesuai dengan kondisi
                  perusahaan yang di wakili untuk memudahkan kami berkoordinasi
                  dengan anda
                </p>
                <div className="grid grid-cols-2 space-y-4 text-sm divide-x">
                  <div className="pr-12 mt-4 space-y-4">
                    <div className="space-y-2">
                      <h1>Company Name</h1>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={item.name}
                        className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <h1>Type of Industry</h1>
                      <input
                        id="industry"
                        type="text"
                        name="industry"
                        value={item.industrytype}
                        className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        placeholder="Select type of industry"
                      />
                    </div>
                    <div className="space-y-2">
                      <h1>Company Email</h1>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={item.email}
                        className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        placeholder="Enter company email"
                      />
                    </div>
                    <div className="space-y-2">
                      <h1>Website</h1>
                      <input
                        id="website"
                        type="text"
                        name="website"
                        value={item.website}
                        className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        placeholder="Enter website URL"
                      />
                    </div>
                    <div className="space-y-2">
                      <h1>Company Phone Number</h1>
                      <input
                        id="phone"
                        type="text"
                        name="phone"
                        value={item.phone}
                        className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <h1>Company Description</h1>
                      <textarea
                        id="description"
                        type="text"
                        name="description"
                        value={item.description}
                        className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        placeholder="Enter company description"
                      />
                    </div>
                  </div>
                  <div className="pl-12 space-y-4">
                    <div className="space-y-2">
                      <h1>Company Country</h1>
                      <input
                        id="country"
                        type="text"
                        name="country"
                        value={item.country}
                        className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        placeholder="Enter company country"
                      />
                    </div>
                    <div className="space-y-2">
                      <h1>Company Province</h1>
                      <input
                        id="province"
                        type="text"
                        name="province"
                        value={item.province}
                        className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        placeholder="Enter company province"
                      />
                    </div>
                    <div className="space-y-2">
                      <h1>Company City</h1>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={item.city}
                        className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        placeholder="Enter company city"
                      />
                    </div>
                    <div className="space-y-2">
                      <h1>Company Address</h1>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        value={item.address}
                        className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        placeholder="Enter company address"
                      />
                    </div>
                    <div className="space-y-2">
                      <h1>Postal Code</h1>
                      <input
                        id="postalcode"
                        type="text"
                        name="postalcode"
                        value={item.postalcode}
                        className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        placeholder="Enter postal code"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <h1 className="pb-2 text-xl font-semibold">
                  Informasi Officer
                </h1>
                <p className="pb-2 text-sm">
                  Anda akan bertanggung jawab untuk setiap informasi dan
                  transaksi.
                </p>
                <div className="my-4 space-y-4 text-sm">
                  <div className="space-y-2">
                    <h1>Officer Name</h1>
                    <input
                      id="officername"
                      type="text"
                      name="officername"
                      value={item.officername}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter officer name"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1>Officer Email</h1>
                    <input
                      id="officeremail"
                      type="email"
                      name="officeremail"
                      value={item.officeremail}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter officer email"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1>Officer Phone Number</h1>
                    <input
                      id="officerphone"
                      type="text"
                      name="officerphone"
                      value={item.officerphone}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter officer phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1>Officer Mobile Number</h1>
                    <input
                      id="officermobile"
                      type="text"
                      name="officermobile"
                      value={item.officermobile}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter officer mobile number"
                    />
                  </div>
                </div>
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
        <div className="grid grid-cols-1 p-8 bg-white rounded-2xl">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Verifikasi Perusahaan</h1>
          </div>
          <div className="pt-4">
            <div className="grid grid-cols-8 justify-center items-center py-2 space-x-4">
              <h1 className="flex col-span-3 pl-14 text-sm text-gray-500">
                Nama Perusahaan
              </h1>
              <h1 className="flex col-span-1 justify-center text-sm text-gray-500">
                Tanggal
              </h1>
              <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                Pendaftar
              </h1>
              <h1 className="flex col-span-1 justify-center text-sm text-gray-500">
                Status
              </h1>
              <h1 className="flex col-span-1 justify-center text-sm text-gray-500">
                Lihat Detail
              </h1>
            </div>
            {companies.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-8 justify-center items-center py-2 space-x-4"
              >
                <div className="flex col-span-3 items-center space-x-4">
                  <Image
                    src={DefaultPicture}
                    alt=""
                    width={40}
                    height={40}
                    className="object-cover col-span-1 rounded-full"
                  />
                  <h1 className="font-semibold">{item.name}</h1>
                </div>
                <h1 className="flex col-span-1 justify-center text-sm text-gray-500">
                  {item.created_at}
                </h1>
                <h1 className="flex col-span-2 justify-center text-sm font-semibold">
                  {item.officername}
                </h1>
                <div className="flex col-span-1 justify-center">
                  {item.status === "Verified" ? (
                    <h1 className="py-2 px-4 text-sm text-green-600 bg-green-50 rounded-lg">
                      {item.status}
                    </h1>
                  ) : item.status === "Decline" ? (
                    <h1 className="py-2 px-4 text-sm text-red-600 bg-red-50 rounded-lg">
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
                  className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-blue-900 bg-blue-200 rounded-2xl border border-transparent transition duration-150 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={() => openCompanyDetailModal(item)}
                >
                  Detail
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
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
                  <CompanyFormDialog item={companyItem} />
                  {companyItem.status === "Pending" && (
                    <div className="flex justify-end mt-4 space-x-8">
                      <button
                        type="button"
                        className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={() => declineCompany(companyItem)}
                      >
                        Decline
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                        onClick={() => verifyCompany(companyItem)}
                      >
                        Verify
                      </button>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
