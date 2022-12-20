import Link from "next/link";
import Image from "next/image";
import PaymentBanner from "../public/PaymentBanner1.png";
import BNILogo from "../public/BNI.png";
import BCALogo from "../public/BCA.png";
import MandiriLogo from "../public/Mandiri.png";
import Graph1 from "../public/Graph1.svg";
import Graph2 from "../public/Graph2.svg";
import Triangle from "../public/Triangle.svg";
import Warning from "../public/Warning.svg";
import { Tab } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function PengembanganDiriTab({ person }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFinal, setIsOpenFinal] = useState(false);
  const [fileProof, setFileProof] = useState("");

  const selfdevelopment = person?.selfdevelopment;

  const tabItem = [
    {
      id: 1,
      name: "Gaya Kepribadian",
    },
  ];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpenFinal(false);
    setIsOpen(true);
  }

  function closeModalFinal() {
    setIsOpenFinal(false);
  }

  function openModalFinal() {
    addNotification();
    setIsOpen(false);
    setIsOpenFinal(true);
  }

  function submitPayment(file) {
    handleSubmit(file);
  }

  const handleSubmit = async (file) => {
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/person/selfdevelopment/payment",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: person._id,
          status: "Pending",
          price: 50000,
          fileproof: file,
        }),
      }
    );
    const data = await response.json();

    if (data === 200) {
      openModalFinal();
    } else {
      alert("Error: " + data.message);
      closeModal();
    }
  };

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
          status: "PaymentSuccess",
          title: "Pembayaran Diterima",
          description: `Terima kasih Anda telah melakukan pembayaran tes kepribadian. Silahkan menunggu verifikasi dari admin untuk melihat hasil tes.`,
        }),
      }
    );
    const data = await res.json();

    if (data !== 200) {
      alert("failed");
    }
  };

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
              {!selfdevelopment?.score ? (
                <div className="grid grid-cols-1 divide-y divide-gray-300">
                  <div className="py-4 space-y-2 text-sm">
                    <h1 className="text-xl font-semibold">Gaya Kepribadian</h1>
                    <p>
                      Anda belum pernah menyelesaikan tes kepribadian. Silahkan
                      mulai tes kepribadian dengan klik tombol dibawah.
                    </p>
                    <div className="flex justify-center items-center pt-4 w-full">
                      <Link href="/quiz" passHref>
                        <button className="inline-flex justify-center py-2 px-8 font-medium text-white bg-blue-500 rounded-md border border-transparent transition duration-150 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                          Mulai Tes Kepribadian
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 divide-y divide-gray-300">
                  <div className="py-4 space-y-2 text-sm">
                    <h1 className="text-xl font-semibold">
                      Grafik 1: Adaptasi (Pekerjaan/Kantor)
                    </h1>
                    <p>
                      Hasil dari asesmen ini akan menghasilkan informasi
                      mengenai respon anda terhadap lingkungan.
                    </p>
                    <div className="py-4">
                      <Graph1 />
                    </div>
                    <div className="grid grid-cols-2 gap-4 justify-between items-center px-8 w-full">
                      <div className="flex justify-start items-center space-x-4">
                        <Triangle />
                        <h1>Dominance : Sedang</h1>
                      </div>
                      <div className="flex justify-start items-center space-x-4">
                        <Triangle />
                        <h1>Steadiness : Rendah</h1>
                      </div>
                      <div className="flex justify-start items-center space-x-4">
                        <Triangle />
                        <h1>
                          Influence :{" "}
                          <span className="font-semibold">Tinggi</span>
                        </h1>
                      </div>
                      <div className="flex justify-start items-center space-x-4">
                        <Triangle />
                        <h1>Compliance : Sedang</h1>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 space-y-2 text-sm">
                    <h1 className="text-xl font-semibold">
                      Nilai Terhadap Tim
                    </h1>
                    <p>
                      Hasil dari asesmen ini akan menghasilkan informasi terkait
                      gambaran anda dalam dalam bekerja bersama tim.
                    </p>
                    <ul className="ml-4">
                      <li className="list-disc list-inside">
                        Optimis dan antusias
                      </li>
                      <li className="list-disc list-inside">
                        Pemecah masalah yang kreatif dan merundingkan konflik
                      </li>
                      <li className="list-disc list-inside">
                        Memotivasi orang lain dalam mencapai tujuan
                      </li>
                      <li className="list-disc list-inside">Pemain tim</li>
                    </ul>
                  </div>
                  <div className="py-4 space-y-2 text-sm">
                    <h1 className="text-xl font-semibold">
                      Keterbatasan Yang Mungkin
                    </h1>
                    <p>
                      Hasil dari asesmen ini akan menghasilkan informasi terkait
                      gambaran keterbatasan anda dalam dalam bekerja.
                    </p>
                    <ul className="ml-4">
                      <li className="list-disc list-inside">Tidak detail</li>
                      <li className="list-disc list-inside">
                        Tidak realistis dalam menilai orang
                      </li>
                      <li className="list-disc list-inside">
                        Percaya pada semua orang
                      </li>
                      <li className="list-disc list-inside">
                        Pendengar yang situasional
                      </li>
                    </ul>
                  </div>
                  <div className="py-4 space-y-2 text-sm">
                    <h1 className="text-xl font-semibold">
                      Grafik 2: Alami (Sehari-hari/Rumah)
                    </h1>
                    <p>
                      Hasil dari asesmen ini akan menghasilkan informasi
                      mengenai perilaku dasar anda.
                    </p>
                    {selfdevelopment?.payment?.status === "Done" ? (
                      <>
                        <div className="py-4">
                          <Graph2 />
                        </div>
                        <div className="grid grid-cols-2 gap-4 justify-between items-center px-8 w-full">
                          <div className="flex justify-start items-center space-x-4">
                            <Triangle />
                            <h1>Dominance : Sedang</h1>
                          </div>
                          <div className="flex justify-start items-center space-x-4">
                            <Triangle />
                            <h1>Steadiness : Rendah</h1>
                          </div>
                          <div className="flex justify-start items-center space-x-4">
                            <Triangle />
                            <h1>
                              Influence :{" "}
                              <span className="font-semibold">Tinggi</span>
                            </h1>
                          </div>
                          <div className="flex justify-start items-center space-x-4">
                            <Triangle />
                            <h1>Compliance : Sedang</h1>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="relative">
                          <div className="blur-sm">
                            <div className="py-4">
                              <Graph2 />
                            </div>
                            <div className="grid grid-cols-2 gap-4 justify-between items-center px-8 w-full">
                              <div className="flex justify-start items-center space-x-4">
                                <Triangle />
                                <h1>Dominance : Sedang</h1>
                              </div>
                              <div className="flex justify-start items-center space-x-4">
                                <Triangle />
                                <h1>Steadiness : Rendah</h1>
                              </div>
                              <div className="flex justify-start items-center space-x-4">
                                <Triangle />
                                <h1>
                                  Influence :{" "}
                                  <span className="font-semibold">Tinggi</span>
                                </h1>
                              </div>
                              <div className="flex justify-start items-center space-x-4">
                                <Triangle />
                                <h1>Compliance : Sedang</h1>
                              </div>
                            </div>
                          </div>
                          <div className="flex absolute top-0 left-0 flex-col justify-center items-center p-2 space-y-4 w-full h-full">
                            <div className="flex flex-col justify-center items-center space-y-4">
                              <Warning />
                              <p className="text-base font-medium text-center whitespace-pre-line">{`Klik disini untuk mendapatkan 
laporan lengkap`}</p>
                              <button
                                type="button"
                                className="inline-flex justify-center py-2 px-8 font-medium text-white bg-blue-500 rounded-md border border-transparent transition duration-150 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={() => openModal()}
                              >
                                Bayar
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  {selfdevelopment?.payment?.status === "Done" && (
                    <>
                      <div className="py-4 space-y-2 text-sm">
                        <h1 className="text-xl font-semibold">
                          Kekuatan Utama
                        </h1>
                        <p>
                          Hasil dari asesmen ini akan menghasilkan informasi
                          terkait gambaran kekuatan anda dalam melakukan sesuatu
                          hal.
                        </p>
                        <ul className="ml-4">
                          <li className="list-disc list-inside">
                            Kemampuan untuk membantu orang lain menggunakan
                            kehangatan, empati dan pemahaman
                          </li>
                          <li className="list-disc list-inside">
                            Melindungi dan menghargai manusia serta segala
                            sesuatu
                          </li>
                          <li className="list-disc list-inside">
                            Pendengar & pembicara yang baik
                          </li>
                          <li className="list-disc list-inside">Pemain tim</li>
                        </ul>
                      </div>
                      <div className="py-4 space-y-2 text-sm">
                        <h1 className="text-xl font-semibold">
                          Memperbaiki Efektivitas Dengan
                        </h1>
                        <p>
                          Hasil dari asesmen ini akan menghasilkan informasi
                          terkait gambaran sikap anda dalam mengerjakan sesuatu.
                        </p>
                        <ul className="ml-4">
                          <li className="list-disc list-inside">
                            Bersikap tegas dalam situasi tertentu
                          </li>
                          <li className="list-disc list-inside">
                            Tidak menghindari konfrontasi, bahkan ketika
                            berisiko
                          </li>
                          <li className="list-disc list-inside">
                            Lebih inisiatif, rasa urgensi
                          </li>
                        </ul>
                      </div>
                      <div className="py-4 space-y-2 text-sm">
                        <h1 className="text-xl font-semibold">Kecenderungan</h1>
                        <p>
                          Hasil dari asesmen ini akan menghasilkan informasi
                          terkait kecenderungan anda dalam mengerjakan sesuatu.
                        </p>
                        <ul className="ml-4 space-y-4">
                          <li>
                            Tujuan:
                            <li className="ml-8 list-disc list-inside">
                              Menjaga persahabatan jangka panjang
                            </li>
                          </li>
                          <li>
                            Menilai orang lain dengan:
                            <li className="ml-8 list-disc list-inside">
                              Kesetiaan mereka kepada hubungan
                            </li>
                          </li>
                          <li>
                            Mempengaruhi orang lain dengan:
                            <li className="ml-8 list-disc list-inside">
                              Hubungan pribadi, menetapkan contoh yang baik
                            </li>
                          </li>
                          <li>
                            Nilai terhadap organisasi:
                            <li className="ml-8 list-disc list-inside">
                              Pendengar yang baik, sabar terhadap orang lain
                            </li>
                          </li>
                          <li>
                            Berlebihan menggunakan:
                            <li className="ml-8 list-disc list-inside">
                              Toleransi
                            </li>
                          </li>
                          <li>
                            Ketika di bawah tekanan:
                            <li className="ml-8 list-disc list-inside">
                              Gelisah di bawah situasi stress
                            </li>
                          </li>
                          <li>
                            Ketakutan
                            <li className="ml-8 list-disc list-inside">
                              Konfrontasi
                            </li>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
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
                <Dialog.Panel className="overflow-hidden p-2 w-full max-w-lg text-left align-middle bg-gray-100 rounded-2xl transition-all transform">
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
                          <h1 className="text-xl font-bold">
                            1420 0008 6693 1
                          </h1>
                          <h1 className="text-lg font-medium">
                            BCA{" "}
                            <span className="text-base font-normal">
                              atas nama
                            </span>{" "}
                            Fadel Pamungkas
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
                          <h1 className="text-xl font-bold">
                            1420 0008 6693 1
                          </h1>
                          <h1 className="text-lg font-medium">
                            Mandiri{" "}
                            <span className="text-base font-normal">
                              atas nama
                            </span>{" "}
                            Fadel Pamungkas
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
                          <h1 className="text-xl font-bold">
                            1420 0008 6693 1
                          </h1>
                          <h1 className="text-lg font-medium">
                            BNI{" "}
                            <span className="text-base font-normal">
                              atas nama
                            </span>{" "}
                            Haydar Maulana
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-8 m-4 space-y-2">
                    <label
                      htmlFor="fileproof"
                      className="flex flex-col justify-center items-center space-y-4 w-full h-32 bg-white rounded-xl border border-blue-500 border-dashed"
                    >
                      {fileProof ? (
                        <h1 className="overflow-auto text-sm font-semibold">
                          {fileProof}
                        </h1>
                      ) : (
                        <h1 className="overflow-auto text-sm font-semibold text-gray-500">
                          No file selected
                        </h1>
                      )}
                      <label
                        htmlFor="fileproof"
                        className="py-1 px-5 text-sm text-blue-500 rounded border border-blue-500 transition duration-150 cursor-pointer hover:text-white hover:bg-blue-600"
                      >
                        <h1>Browse</h1>
                        <input
                          id="fileproof"
                          name="fileproof"
                          type="file"
                          onChange={() =>
                            setFileProof(
                              document.getElementById("fileproof").files[0].name
                            )
                          }
                          accept="image/*"
                          className="hidden"
                        />
                      </label>
                    </label>
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
                  <div className="flex justify-evenly items-center m-4 space-x-4">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2"
                      onClick={() => closeModal()}
                    >
                      Batal
                    </button>
                    {fileProof ? (
                      <button
                        type="button"
                        className="inline-flex justify-center py-2 px-4 text-sm font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => submitPayment(fileProof)}
                      >
                        Unggah
                      </button>
                    ) : (
                      <button
                        disabled
                        type="button"
                        className="inline-flex justify-center py-2 px-4 text-sm font-medium text-white bg-gray-400 rounded-md border border-transparent"
                      >
                        Unggah
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenFinal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => closeModalFinal()}
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
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-blue-900 bg-blue-100 rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => closeModalFinal()}
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
