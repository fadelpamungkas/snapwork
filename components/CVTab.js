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

  const tabItem = [
    {
      id: 1,
      name: "Data Diri",
    },
    {
      id: 2,
      name: "Dokumen",
    },
    {
      id: 3,
      name: "Portofolio",
    },
    {
      id: 4,
      name: "Video Profil",
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
    setIsOpen(true);
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
                <div className="flex justify-between items-center py-2">
                  <h1 className="text-xl font-semibold">Data Diri</h1>
                  {edit ? (
                    <button
                      type="submit"
                      onClick={openModal}
                      className="inline-flex justify-center items-center space-x-1 text-base font-medium text-blue-500"
                    >
                      <CogIcon className="w-4 h-4" aria-hidden="true" />
                      <span>Simpan</span>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={() => setEdit(true)}
                      className="inline-flex justify-center items-center space-x-1 text-base font-medium text-red-500"
                    >
                      <CogIcon className="w-4 h-4" aria-hidden="true" />
                      <span>Ubah</span>
                    </button>
                  )}
                </div>
                <div className="py-2">
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <h1 className="text-base font-semibold">Informasi Umum</h1>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Nama Lengkap</h1>
                      <h1>:</h1>
                    </div>
                    {edit ? (
                      <div className="col-span-2">
                        {user?.isLoggedIn ? (
                          <input
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="text"
                            defaultValue={user.userData.name}
                          />
                        ) : (
                          <input
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="text"
                            defaultValue="Fadel Pamungkas"
                          />
                        )}
                      </div>
                    ) : (
                      <div className="col-span-2">
                        {user?.isLoggedIn ? (
                          <h1>{user.userData.name}</h1>
                        ) : (
                          <h1>Fadel Pamungkas</h1>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Tempat, Tanggal Lahir</h1>
                      <h1>:</h1>
                    </div>
                    {edit ? (
                      <div className="col-span-2">
                        <input
                          className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                          type="text"
                          defaultValue="Gorontalo, 16 November 1999"
                        />
                      </div>
                    ) : (
                      <div className="col-span-2">
                        <h1>Gorontalo, 16 November 1999</h1>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Jenis Kelamin</h1>
                      <h1>:</h1>
                    </div>
                    {edit ? (
                      <div className="col-span-2">
                        <input
                          className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                          type="text"
                          defaultValue="Laki-laki"
                        />
                      </div>
                    ) : (
                      <div className="col-span-2">
                        <h1>Laki-laki</h1>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Agama</h1>
                      <h1>:</h1>
                    </div>
                    {edit ? (
                      <div className="col-span-2">
                        <input
                          className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                          type="text"
                          defaultValue="Islam"
                        />
                      </div>
                    ) : (
                      <div className="col-span-2">
                        <h1>Islam</h1>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Domisili</h1>
                      <h1>:</h1>
                    </div>
                    {edit ? (
                      <div className="col-span-2">
                        <input
                          defaultValue="Jl Mulia ll No 7a, Ngaglik, Sleman, Yogyakarta"
                          className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                          type="text"
                        />
                      </div>
                    ) : (
                      <div className="col-span-2">
                        <h1>Jl Mulia ll No 7a, Ngaglik, Sleman, Yogyakarta</h1>
                      </div>
                    )}
                  </div>
                </div>
                <div className="py-2">
                  <h1 className="text-base font-semibold">Informasi Kontak</h1>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Nomor Ponsel</h1>
                      <h1>:</h1>
                    </div>
                    {edit ? (
                      <div className="col-span-2">
                        <input
                          className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                          type="tel"
                          defaultValue="+6281275151011"
                        />
                      </div>
                    ) : (
                      <div className="col-span-2">
                        <h1>+6281275151011</h1>
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Email</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      {user?.isLoggedIn ? (
                        <h1>{user.userData.email}</h1>
                      ) : (
                        <h1>fadelpamungkas3@gmail.com</h1>
                      )}
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <h1 className="text-base font-semibold">Profil Singkat</h1>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Deskripsi Diri</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      {edit ? (
                        <textarea
                          className="py-1 px-2 w-full h-36 rounded border border-gray-500"
                          type="text"
                          value="Profesional TI yang berorientasi detail dengan pengalaman 10 tahun sebagai software support specialist dan system/network technician. Terampil dalam mengoperasikan berbagai platform, memiliki kemampuan komunikasi lisan dan verbal yang baik, dan mampu menjelaskan masalah software yang kompleks dalam istilah yang mudah dipahami."
                        />
                      ) : (
                        <h1 className="whitespace-pre-line">
                          {`Profesional TI yang berorientasi detail dengan pengalaman 10 tahun sebagai software support specialist dan system/network technician. Terampil dalam mengoperasikan berbagai platform, memiliki kemampuan komunikasi lisan dan verbal yang baik, dan mampu menjelaskan masalah software yang kompleks dalam istilah yang mudah dipahami.`}
                        </h1>
                      )}
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
                <Dialog.Panel className="overflow-hidden p-8 w-full max-w-lg text-left align-middle bg-white rounded-2xl transition-all transform">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Simpan
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 whitespace-pre-line">
                      Semua Perubahan akan disimpan dan tidak dapat
                      dikembalikan.
                    </p>
                  </div>
                  <div className="mt-4 space-x-4">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-blue-900 bg-blue-100 rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModalAndSave}
                    >
                      Simpan
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-transparent hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Batal
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
