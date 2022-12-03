import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import TokopediaAvatar from "../public/avtokopedia.png";
import PaymentBanner from "../public/PaymentBanner1.png";
import BNILogo from "../public/BNI.png";
import BCALogo from "../public/BCA.png";
import MandiriLogo from "../public/Mandiri.png";
import AddIcon from "../public/AddIcon.png";

const packets = [
  {
    name: "10 Hari Iklan Lowongan Pekerjaan",
  },
  {
    name: "20 Hari Iklan Lowongan Pekerjaan",
  },
  {
    name: "30 Hari Iklan Lowongan Pekerjaan",
  },
];

export default function LowonganTabCompanyDashboard({ company }) {
  const [packet, setPacket] = useState(packets[0]);
  const [jobItem, setJobItem] = useState("");
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const [isOpenFinal, setIsOpenFinal] = useState(false);
  const [isOpenJobDetail, setIsOpenJobDetail] = useState(false);
  const [isOpenDeleteJob, setIsOpenDeleteJob] = useState(false);

  function closeJobDetailModal() {
    setIsOpenJobDetail(false);
  }

  function openJobDetailModal(item) {
    setIsOpenJobDetail(true);
    if (!item) {
      setJobItem("");
    } else {
      setJobItem(item);
    }
  }

  function closeDeleteJobModal() {
    setIsOpenDeleteJob(false);
  }

  function closeAndConfirmDeleteJobModal() {
    setIsOpenDeleteJob(false);
    handleDeleteJob(jobItem._id);
    setJobItem("");
  }

  function openDeleteJobModal(item) {
    setIsOpenDeleteJob(true);
    setJobItem(item);
  }

  function closeOrderModal() {
    setIsOpenOrder(false);
  }

  function openOrderModal() {
    setIsOpenOrder(true);
    setIsOpenJobDetail(false);
  }

  function closeModalFinal() {
    setIsOpenFinal(false);
  }

  function openModalFinal() {
    setIsOpenOrder(false);
    setIsOpenFinal(true);
  }

  const handleDeleteJob = async (jobId) => {
    const response = await fetch(
      `https://snapwork.herokuapp.com/api/company/${company._id}/${jobId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    if (data === 200) {
      closeDeleteJobModal();
    } else {
      alert("Error: " + data.message);
    }
  };

  const handleEditJob = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/company/job",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: jobItem._id,
          companyid: company._id,
          name: event.target.name.value,
          kind: event.target.kind.value,
          type: event.target.type.value,
          status: event.target.status.value,
          placement: event.target.placement.value,
          available: event.target.available.value,
          description: event.target.description.value,
          softskill: event.target.softskill.value,
          hardskill: event.target.hardskill.value,
          education: event.target.education.value,
          major: event.target.major.value,
          specificreq: event.target.specificreq.value,
        }),
      }
    );
    const data = await response.json();
    console.log(data);

    if (data === 200) {
      closeJobDetailModal();
    } else {
      alert("Error: " + data.message);
    }
  };

  const handleAddJob = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/company/job",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyid: company._id,
          name: event.target.name.value,
          kind: event.target.kind.value,
          type: event.target.type.value,
          status: event.target.status.value,
          placement: event.target.placement.value,
          available: event.target.available.value,
          description: event.target.description.value,
          softskill: event.target.softskill.value,
          hardskill: event.target.hardskill.value,
          education: event.target.education.value,
          major: event.target.major.value,
          specificreq: event.target.specificreq.value,
        }),
      }
    );
    const data = await response.json();
    console.log(data);

    if (data === 200) {
      closeJobDetailModal();
      openOrderModal();
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
              Lowongan Pekerjaan
            </h1>
          </div>
          <div className="py-4 px-10">
            <div className="grid grid-cols-2 gap-8 justify-center items-center">
              {company?.companyjob?.map((item, idx) => (
                <div
                  key={idx}
                  className="col-span-1 p-4 space-y-2 h-full bg-white rounded-xl shadow-xl"
                >
                  <div className="grid grid-cols-3 gap-8 items-center h-full">
                    <div className="flex col-span-1 justify-center items-center">
                      <Image
                        src={TokopediaAvatar}
                        width={100}
                        height={100}
                        alt="Personal"
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <div className="py-1 px-4 text-white bg-red-500 rounded-full w-fit">
                        <p className="text-sm">{item.available} Lowongan</p>
                      </div>
                      <h1 className="text-lg font-semibold">{item.name}</h1>
                      <p className="overflow-ellipsis line-clamp-3">
                        {item.description}
                      </p>
                      <div className="flex justify-between pt-4">
                        <button
                          type="button"
                          onClick={() => openDeleteJobModal(item)}
                          className="inline-flex items-center py-2 px-8 text-white bg-red-500 rounded-lg duration-150 hover:bg-red-600 transiiton"
                        >
                          Hapus
                        </button>
                        <button
                          type="button"
                          onClick={() => openJobDetailModal(item)}
                          className="inline-flex items-center py-2 px-8 text-white bg-green-500 rounded-lg duration-150 hover:bg-green-600 transiiton"
                        >
                          Ubah
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={() => openJobDetailModal()}
                className="col-span-1 w-full h-full cursor-pointer"
              >
                <div className="flex justify-center items-center p-4 h-full bg-white rounded-xl border-2 border-green-500 border-dashed shadow-xl transition duration-150 hover:bg-green-50">
                  <div className="space-y-4">
                    <Image src={AddIcon} width={100} height={100} alt="Add" />
                    <h1 className="text-lg font-semibold text-green-500">
                      Tambah Lowongan
                    </h1>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpenJobDetail} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeJobDetailModal}
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
                  {!jobItem ? (
                    <JobFormDialog />
                  ) : (
                    <JobFormDialog item={jobItem} />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenDeleteJob} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeDeleteJobModal}
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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Hapus Berita
                  </Dialog.Title>
                  <DeleteConfirmation item={jobItem} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenOrder} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeOrderModal}>
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
                    <div className="flex justify-center items-center p-8 m-2 bg-white rounded-2xl shadow-xl -translate-y-12">
                      <h1 className="text-3xl font-bold">
                        Pilih Paket Lowongan
                      </h1>
                    </div>
                  </Dialog.Title>
                  <RadioGroup value={packet} onChange={setPacket}>
                    <RadioGroup.Label className="sr-only">
                      Server size
                    </RadioGroup.Label>
                    <div className="space-y-2">
                      {packets.map((item) => (
                        <RadioGroup.Option
                          key={item.name}
                          value={item}
                          className={({ active, checked }) =>
                            `${
                              active
                                ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                                : ""
                            }
                  ${
                    checked
                      ? "bg-green-600 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex justify-between items-center w-full">
                                {checked && (
                                  <div className="text-white shrink-0">
                                    <CheckIcon className="w-6 h-6" />
                                  </div>
                                )}
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-medium  ${
                                        checked ? "text-white" : "text-gray-900"
                                      }`}
                                    >
                                      {item.name}
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                      as="span"
                                      className={`inline ${
                                        checked
                                          ? "text-sky-100"
                                          : "text-gray-500"
                                      }`}
                                    >
                                      {item.name}
                                    </RadioGroup.Description>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
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
                      onClick={closeOrderModal}
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
                      Terimakasih telah memilih laporan asesmen sebagai salah
                      satu referensi pengenalan pribadimu! Laporan asesmen dapat
                      diunduh setelah pembayaran berhasil diverifikasi.
                    </p>
                  </div>

                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-transparent hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2"
                      onClick={openOrderModal}
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

  function DeleteConfirmation({ item }) {
    return (
      <>
        <div className="mt-2">
          <p className="text-sm text-gray-500 whitespace-pre-line">
            {`Anda yakin menghapus lowongan:`}
            <span className="font-bold"> {item.name}</span>
          </p>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={closeAndConfirmDeleteJobModal}
          >
            Hapus
          </button>
        </div>
      </>
    );
  }

  function JobFormDialog({ item }) {
    return (
      <>
        <form id="formJob" onSubmit={!item ? handleAddJob : handleEditJob}>
          <div className="w-full">
            <div className="px-2 mx-auto w-full">
              <div className="py-4 px-8 space-y-4 rounded-xl">
                <div className="pt-4">
                  <h1 className="pb-2 text-xl font-semibold">
                    Informasi Pekerjaan
                  </h1>
                  <hr />
                  <div className="my-4 space-y-4 text-sm">
                    <div className="space-y-2">
                      <h1>Nama Posisi</h1>
                      {item ? (
                        <input
                          required
                          id="name"
                          type="text"
                          name="name"
                          defaultValue={item.name}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Nama Posisi"
                        />
                      ) : (
                        <input
                          required
                          id="name"
                          type="text"
                          name="name"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Nama Posisi"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Fungsi Pekerjaan</h1>
                      {item ? (
                        <input
                          required
                          id="kind"
                          type="text"
                          name="kind"
                          defaultValue={item.kind}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Fungsi Pekerjaan"
                        />
                      ) : (
                        <input
                          required
                          id="kind"
                          type="text"
                          name="kind"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Fungsi Pekerjaan"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Tipe Pekerjaan</h1>
                      {item ? (
                        <input
                          required
                          id="type"
                          type="text"
                          name="type"
                          defaultValue={item.type}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Tipe Pekerjaan"
                        />
                      ) : (
                        <input
                          required
                          id="type"
                          type="text"
                          name="type"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Tipe Pekerjaan"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Status Pekerjaan</h1>
                      {item ? (
                        <input
                          required
                          id="status"
                          type="text"
                          name="status"
                          defaultValue={item.status}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Status Pekerjaan"
                        />
                      ) : (
                        <input
                          required
                          id="status"
                          type="text"
                          name="status"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Status Pekerjaan"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Penempatan</h1>
                      {item ? (
                        <input
                          required
                          id="placement"
                          type="text"
                          name="placement"
                          defaultValue={item.placement}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Penempatan Pekerjaan"
                        />
                      ) : (
                        <input
                          required
                          id="placement"
                          type="text"
                          name="placement"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Penempatan Pekerjaan"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Lowongan</h1>
                      {item ? (
                        <input
                          required
                          id="available"
                          type="text"
                          name="available"
                          defaultValue={item.available}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Lowongan Tersedia"
                        />
                      ) : (
                        <input
                          required
                          id="available"
                          type="text"
                          name="available"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Lowongan Tersedia"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Deskripsi Pekerjaan</h1>
                      {item ? (
                        <textarea
                          required
                          id="description"
                          type="text"
                          name="description"
                          defaultValue={item.description}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Deskripsi Pekerjaan"
                        />
                      ) : (
                        <textarea
                          required
                          id="description"
                          type="text"
                          name="description"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Deskripsi Pekerjaan"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <h1 className="pb-2 text-xl font-semibold">Syarat-Syarat</h1>
                  <hr />
                  <div className="my-4 space-y-4 text-sm">
                    <div className="space-y-2">
                      <h1>Soft Skill</h1>
                      {item ? (
                        <input
                          required
                          id="softskill"
                          type="text"
                          name="softskill"
                          defaultValue={item.softskill}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Soft Skill"
                        />
                      ) : (
                        <input
                          required
                          id="softskill"
                          type="text"
                          name="softskill"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Soft Skill"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Hard Skill</h1>
                      {item ? (
                        <input
                          required
                          id="hardskill"
                          type="text"
                          name="hardskill"
                          defaultValue={item.hardskill}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Hard Skill"
                        />
                      ) : (
                        <input
                          required
                          id="hardskill"
                          type="text"
                          name="hardskill"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Hard Skill"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Jenjang Pendidikan</h1>
                      {item ? (
                        <input
                          required
                          id="education"
                          type="text"
                          name="education"
                          defaultValue={item.education}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Jenjang Pendidikan"
                        />
                      ) : (
                        <input
                          required
                          id="education"
                          type="text"
                          name="education"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Jenjang Pendidikan"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Jurusan</h1>
                      {item ? (
                        <input
                          required
                          id="major"
                          type="text"
                          name="major"
                          defaultValue={item.major}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Jurusan"
                        />
                      ) : (
                        <input
                          required
                          id="major"
                          type="text"
                          name="major"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Jurusan"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h1>Syarat Khusus Lain</h1>
                      {item ? (
                        <textarea
                          required
                          id="specificreq"
                          type="text"
                          name="specificreq"
                          defaultValue={item.specificreq}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Syarat Khusus Lain"
                        />
                      ) : (
                        <textarea
                          required
                          id="specificreq"
                          type="text"
                          name="specificreq"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Syarat Khusus Lain"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-4 space-x-8">
                  <button
                    type="button"
                    className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeJobDetailModal}
                  >
                    Batal
                  </button>
                  {item ? (
                    <button
                      type="submit"
                      form="formJob"
                      className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >
                      Ubah
                    </button>
                  ) : (
                    <button
                      type="submit"
                      form="formJob"
                      className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >
                      Tambah
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
