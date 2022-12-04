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
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function LamaranTabCompanyDashboard({ applications }) {
  const [isOpenApplicationDetail, setIsOpenApplicationDetail] = useState(false);
  const [applicationItem, setApplicationItem] = useState("");

  function closeApplicationDetailModal() {
    setIsOpenApplicationDetail(false);
  }

  function openApplicationDetailModal(item) {
    setIsOpenApplicationDetail(true);
    if (item.status === "Applied") {
      item.status = "Screening";
      handleUpdateApplicationStatus((item = item));
    }
    setApplicationItem(item);
  }

  function nextPhaseApplication(item) {
    handleUpdateApplicationStatus(item);
    setIsOpenApplicationDetail(false);
  }

  function rejectApplication(item) {
    handleRejectApplicationStatus(item);
    setIsOpenApplicationDetail(false);
  }

  const addNotification = async () => {
    const res = await fetch(
      "https://snapwork.herokuapp.com/api/person/notification",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: person.userid,
          status: "ApplySuccess",
          title: "Lamaran Diterima",
          description: `Selamat anda berhasil melamar sebagai ${job.name} di ${company.name}`,
        }),
      }
    );
    const data = await res.json();

    if (data !== 200) {
      alert("failed");
    }
  };

  const handleRejectApplicationStatus = async (item) => {
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/transaction/application/status",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicationid: item._id,
          personid: item.personid,
          companyid: item.companyid,
          status: "Rejected",
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

  const handleUpdateApplicationStatus = async (item) => {
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/transaction/application/status",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicationid: item._id,
          personid: item.personid,
          companyid: item.companyid,
          status: item.status,
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

  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 bg-white rounded-2xl">
          <div className="flex justify-between items-center py-4 px-8 bg-blue-500 rounded-t-2xl">
            <h1 className="text-lg font-medium text-white">
              Verifikasi Pelamar Kerja
            </h1>
          </div>
          <div className="py-4 px-10">
            <div className="grid grid-cols-8 justify-center items-center py-2 space-x-4">
              <h1 className="flex col-span-2 ml-14 text-sm text-gray-500">
                Nama
              </h1>
              <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                Tanggal Melamar
              </h1>
              <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                Posisi
              </h1>
              <h1 className="flex col-span-1 justify-center text-sm text-gray-500">
                Status
              </h1>
              <h1 className="flex col-span-1 justify-center text-sm text-gray-500">
                Detail
              </h1>
            </div>
            {applications ? (
              <>
                {applications.map((item, index) => (
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
                      <h1 className="font-semibold">{item.username}</h1>
                    </div>
                    <h1 className="flex col-span-2 justify-center text-sm text-gray-500">
                      {item.created_at}
                    </h1>
                    <h1 className="flex col-span-2 justify-center text-sm font-semibold">
                      {item.jobposition}
                    </h1>
                    <div className="flex col-span-1 justify-center">
                      {item.status === "Accepted" ? (
                        <div className="py-2 px-4 text-sm text-green-900 bg-green-100 rounded-2xl">
                          <h1>{item.status}</h1>
                        </div>
                      ) : item.status === "Rejected" ? (
                        <div className="py-2 px-4 text-sm text-red-900 bg-red-100 rounded-2xl">
                          <h1>{item.status}</h1>
                        </div>
                      ) : (
                        <div className="py-2 px-4 text-sm text-yellow-900 bg-yellow-100 rounded-2xl">
                          <h1>{item.status}</h1>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => openApplicationDetailModal(item)}
                      className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-blue-900 bg-blue-100 rounded-2xl border border-transparent transition duration-150 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Detail
                    </button>
                  </div>
                ))}
              </>
            ) : (
              <h1>Tidak ada lamaran</h1>
            )}
          </div>
        </div>
      </div>
      <Transition appear show={isOpenApplicationDetail} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeApplicationDetailModal}
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
                <Dialog.Panel className="overflow-hidden p-8 w-full max-w-6xl text-left align-middle bg-gray-100 rounded-2xl transition-all transform">
                  <div className="p-8 space-y-8">
                    <div className="p-8 bg-white rounded-lg">
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-8">
                          <Image
                            src={DefaultPicture}
                            alt=""
                            width={80}
                            height={80}
                            className="object-cover col-span-1 rounded-full"
                          />
                          <div className="space-y-1">
                            <h1 className="text-lg font-bold">
                              {applicationItem.username}
                            </h1>
                            <p>S1 {applicationItem.usereducation?.s1major}</p>
                            <p>Melamar sebagai {applicationItem.jobposition}</p>
                          </div>
                        </div>
                        <div className="mr-8">
                          {applicationItem.status === "Accepted" ? (
                            <div className="py-3 px-8 text-green-900 bg-green-100 rounded-xl">
                              <h1>{applicationItem.status}</h1>
                            </div>
                          ) : applicationItem.status === "Rejected" ? (
                            <div className="py-3 px-8 text-red-900 bg-red-100 rounded-xl">
                              <h1>{applicationItem.status}</h1>
                            </div>
                          ) : (
                            <div className="py-3 px-8 text-yellow-900 bg-yellow-100 rounded-xl">
                              <h1>{applicationItem.status}</h1>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                      <div className="col-span-2 space-y-8">
                        <div className="p-8 space-y-4 bg-white rounded-lg">
                          <h1 className="text-lg font-semibold">
                            Informasi Personal
                          </h1>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex col-span-1 justify-start items-center space-x-2">
                              <div className="p-2 bg-gray-100 rounded-full">
                                <MarriageIcon className="w-6 h-6" />
                              </div>
                              <div className="space-y-1">
                                <h1>{applicationItem.usermarriage}</h1>
                                <p className="text-sm text-gray-500">
                                  Status Pernikahan
                                </p>
                              </div>
                            </div>
                            <div className="flex col-span-1 justify-start items-center space-x-2">
                              <div className="p-2 bg-gray-100 rounded-full">
                                <BirthIcon className="w-6 h-6" />
                              </div>
                              <div className="space-y-1">
                                <h1>{applicationItem.userbirth}</h1>
                                <p className="text-sm text-gray-500">
                                  Tanggal Lahir
                                </p>
                              </div>
                            </div>
                            <div className="flex col-span-1 justify-start items-center space-x-2">
                              <div className="p-2 bg-gray-100 rounded-full">
                                <StateIcon className="w-6 h-6" />
                              </div>
                              <div className="space-y-1">
                                <h1>{applicationItem.userstate}</h1>
                                <p className="text-sm text-gray-500">Negara</p>
                              </div>
                            </div>
                            <div className="flex col-span-1 justify-start items-center space-x-2">
                              <div className="p-2 bg-gray-100 rounded-full">
                                <GenderIcon className="w-6 h-6" />
                              </div>
                              <div className="space-y-1">
                                <h1>{applicationItem.usergender}</h1>
                                <p className="text-sm text-gray-500">
                                  Jenis Kelamin
                                </p>
                              </div>
                            </div>
                            <hr className="col-span-2" />
                            <div className="flex col-span-2 justify-start items-center space-x-2">
                              <div className="p-2 bg-gray-100 rounded-full">
                                <AddressIcon className="w-6 h-6" />
                              </div>
                              <div className="space-y-1">
                                <h1>{applicationItem.useraddress}</h1>
                                <p className="text-sm text-gray-500">Alamat</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-8 space-y-4 bg-white rounded-lg">
                          <h1 className="text-lg font-semibold">
                            Deskripsi Diri
                          </h1>
                          <h1>{applicationItem.userabout}</h1>
                        </div>
                        <div className="p-8 space-y-4 bg-white rounded-lg">
                          <h1 className="text-lg font-semibold">Dokumen</h1>
                          <div className="space-y-5">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-4">
                                <div className="p-2 bg-gray-100 rounded-full">
                                  <DocumentIcon className="w-6 h-6" />
                                </div>
                                <h1>haydar-Foto KTP.png</h1>
                              </div>
                              <button
                                type="button"
                                className="py-2 px-6 font-medium text-white bg-blue-500 rounded-3xl transition duration-150 hover:bg-blue-600"
                                onClick={closeApplicationDetailModal}
                              >
                                Download
                              </button>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-4">
                                <div className="p-2 bg-gray-100 rounded-full">
                                  <DocumentIcon className="w-6 h-6" />
                                </div>
                                <h1>haydar-Foto KTP.png</h1>
                              </div>
                              <button
                                type="button"
                                className="py-2 px-6 font-medium text-white bg-blue-500 rounded-3xl transition duration-150 hover:bg-blue-600"
                                onClick={closeApplicationDetailModal}
                              >
                                Download
                              </button>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-4">
                                <div className="p-2 bg-gray-100 rounded-full">
                                  <DocumentIcon className="w-6 h-6" />
                                </div>
                                <h1>haydar-Foto KTP.png</h1>
                              </div>
                              <button
                                type="button"
                                className="py-2 px-6 font-medium text-white bg-blue-500 rounded-3xl transition duration-150 hover:bg-blue-600"
                                onClick={closeApplicationDetailModal}
                              >
                                Download
                              </button>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-4">
                                <div className="p-2 bg-gray-100 rounded-full">
                                  <DocumentIcon className="w-6 h-6" />
                                </div>
                                <h1>haydar-Foto KTP.png</h1>
                              </div>
                              <button
                                type="button"
                                className="py-2 px-6 font-medium text-white bg-blue-500 rounded-3xl transition duration-150 hover:bg-blue-600"
                                onClick={closeApplicationDetailModal}
                              >
                                Download
                              </button>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-4">
                                <div className="p-2 bg-gray-100 rounded-full">
                                  <DocumentIcon className="w-6 h-6" />
                                </div>
                                <h1>haydar-Foto KTP.png</h1>
                              </div>
                              <button
                                type="button"
                                className="py-2 px-6 font-medium text-white bg-blue-500 rounded-3xl transition duration-150 hover:bg-blue-600"
                                onClick={closeApplicationDetailModal}
                              >
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="p-8 space-y-4 bg-white rounded-lg">
                          <h1 className="text-lg font-semibold">
                            Riwayat Pendidikan
                          </h1>
                          <div className="flex justify-start items-center space-x-4">
                            <div className="p-2 bg-gray-100 rounded-full">
                              <PhoneIcon className="w-6 h-6" />
                            </div>
                            <div>
                              <h1 className="text-lg font-semibold leading-tight">
                                {applicationItem.usereducation?.s1}
                              </h1>
                              <p>
                                Jurusan {applicationItem.usereducation?.s1major}
                              </p>
                              <p className="pt-1 text-sm text-gray-500">
                                {applicationItem.usereducation?.s1date}
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-start items-center space-x-4">
                            <div className="p-2 bg-gray-100 rounded-full">
                              <PhoneIcon className="w-6 h-6" />
                            </div>
                            <div>
                              <h1 className="text-lg font-semibold leading-tight">
                                {applicationItem.usereducation?.sma}
                              </h1>
                              <p>
                                Konsentrasi{" "}
                                {applicationItem.usereducation?.smamajor}
                              </p>
                              <p className="pt-1 text-sm text-gray-500">
                                {applicationItem.usereducation?.smadate}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 space-y-8">
                        <div className="col-span-1 p-8 space-y-4 bg-white rounded-lg">
                          <h1 className="text-lg font-semibold">
                            Informasi Lamaran
                          </h1>
                          <div className="space-y-4">
                            <div className="flex justify-start items-center space-x-2">
                              <div className="p-2 bg-gray-100 rounded-full">
                                <JobPositionIcon className="w-6 h-6" />
                              </div>
                              <div className="space-y-1">
                                <h1>{applicationItem.jobposition}</h1>
                                <p className="text-sm text-gray-500">
                                  Nama Posisi
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-start items-center space-x-2">
                              <div className="p-2 bg-gray-100 rounded-full">
                                <AddressIcon className="w-6 h-6" />
                              </div>
                              <div className="space-y-1">
                                <h1>{applicationItem.jobplacement}</h1>
                                <p className="text-sm text-gray-500">
                                  Penempatan
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-start items-center space-x-2">
                              <div className="p-2 bg-gray-100 rounded-full">
                                <JobTypeIcon className="w-6 h-6" />
                              </div>
                              <div className="space-y-1">
                                <h1>{applicationItem.jobtype}</h1>
                                <p className="text-sm text-gray-500">
                                  Tipe Pekerjaan
                                </p>
                              </div>
                            </div>
                            {applicationItem.status !== "Accepted" &&
                              applicationItem.status !== "Rejected" && (
                                <div className="flex justify-between pt-4 space-x-8 w-full">
                                  <button
                                    className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                    onClick={() =>
                                      rejectApplication(applicationItem)
                                    }
                                  >
                                    Tolak
                                  </button>
                                  <button
                                    className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                    onClick={() =>
                                      nextPhaseApplication(applicationItem)
                                    }
                                  >
                                    {applicationItem.status === "Test" ? (
                                      <h1>Terima</h1>
                                    ) : (
                                      <h1>Lanjut</h1>
                                    )}
                                  </button>
                                </div>
                              )}
                          </div>
                        </div>
                        <div className="col-span-1 p-8 space-y-4 bg-white rounded-lg">
                          <h1 className="text-lg font-semibold">
                            Informasi Kontak
                          </h1>
                          <div className="space-y-4">
                            <div className="flex justify-start items-center space-x-2">
                              <div className="p-2 bg-gray-100 rounded-full">
                                <EmailIcon className="w-6 h-6" />
                              </div>
                              <div className="space-y-1">
                                <h1>{applicationItem.useremail}</h1>
                                <p className="text-sm text-gray-500">Email</p>
                              </div>
                            </div>
                            <div className="flex justify-start items-center space-x-2">
                              <div className="p-2 bg-gray-100 rounded-full">
                                <PhoneIcon className="w-6 h-6" />
                              </div>
                              <div className="space-y-1">
                                <h1>{applicationItem.usertelephone}</h1>
                                <p className="text-sm text-gray-500">
                                  Nomor Ponsel
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-start items-center space-x-2">
                              <LinkedinIcon className="w-10 h-10" />
                              <div className="space-y-1 truncate">
                                <a
                                  href={`https://${applicationItem.userlinkedin}`}
                                  className="text-blue-500 hover:underline"
                                >
                                  {applicationItem.userlinkedin}
                                </a>
                                <p className="text-sm text-gray-500">
                                  Linkedin
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-start items-center space-x-2">
                              <TwitterIcon className="w-10 h-10" />
                              <div className="space-y-1 truncate">
                                <a
                                  href={`https://${applicationItem.usertwitter}`}
                                  className="text-blue-500 hover:underline"
                                >
                                  {applicationItem.usertwitter}
                                </a>
                                <p className="text-sm text-gray-500">Twitter</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
