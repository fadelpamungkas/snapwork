import Image from "next/image";
import FootNav from "../../components/FootNav";
import HeadNav from "../../components/HeadNav";
import TokopediaAvatar from "../../public/avtokopedia.png";
import { BookmarkIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Company() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <body className="py-8 w-full text-gray-900">
        <HeadNav />
        <div className="w-full bg-gray-50">
          <div className="py-16 px-8 mx-auto max-w-screen-xl">
            <section className="relative bg-white rounded-xl border border-gray-300">
              <div className="py-8 px-8 bg-blue-200 rounded-t-xl">
                <div className="p-10"></div>
              </div>
              <div className="my-10">
                <div className="absolute left-8 top-20">
                  <Image
                    src={TokopediaAvatar}
                    alt=""
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="relative py-8 px-8">
                <h1 className="mb-2 text-2xl font-bold first:capitalize">
                  PT. Tokopedia Indonesia
                </h1>
                <h1 className="text-base font-medium whitespace-pre first:capitalize">
                  Jakarta Selatan, Indonesia
                </h1>
                <a
                  href="https://www.tokopedia.com"
                  className="text-base font-medium text-blue-500 whitespace-pre first:capitalize"
                >
                  https://www.tokopedia.com
                </a>
                <div className="absolute right-0 bottom-0 py-8 px-8 space-x-4">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2 px-8 space-x-2 rounded-lg"
                  >
                    <BookmarkIcon className="w-5 h-4" aria-hidden="true" />
                    <span>Simpan</span>
                  </button>
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex items-center py-2 px-8 text-white bg-blue-500 rounded-lg"
                  >
                    Lamar
                  </button>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-3 gap-8 py-8">
              <div className="col-span-2 space-y-8">
                <div className="p-8 bg-white rounded-xl border border-gray-300">
                  <h1 className="text-2xl font-semibold">
                    Informasi Pekerjaan
                  </h1>
                  <h1 className="py-4 text-base font-normal whitespace-pre-line">
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam id blandit eget nunc, in tempus tempor. Euismod ipsum ut nisi ac aliquet senectus sagittis vel semper. Egestas integer integer enim duis. Sit augue nisi interdum malesuada ornare in ultrices amet pellentesque. Rhoncus proin hac ipsum sagittis cras senectus vitae ultrices id. Pharetra diam auctor malesuada et sit nulla tempor nunc id. Tellus aliquet lectus quisque volutpat sollicitudin eget pharetra gravida tristique. Pharetra montes, rhoncus, mauris lectus quis purus enim interdum auctor. Adipiscing tellus faucibus ante ut neque. Integer tincidunt vivamus neque eu, lectus sed scelerisque sagittis, fermentum. Blandit in praesent arcu scelerisque aliquam mauris vestibulum gravida sed. Rutrum duis habitant hendrerit sed. `}
                  </h1>
                  <h1 className="text-xl font-semibold">Deskripsi Pekerjaan</h1>
                  <h1 className="py-4 text-base font-normal whitespace-pre-line">
                    {`1.  Develop iOS smart application
2. Collaborate with teams throught the design process
3. Do development process from requirement definision & analysisl, design, implementation/coding
4. Function test, application release, and maintenance.
5. Break any design problem down into viable actionable chucks and solve them with clarity and precision.`}
                  </h1>
                </div>
                <div className="p-8 bg-white rounded-xl border border-gray-300">
                  <h1 className="text-2xl font-semibold">Persyaratan</h1>
                  <div className="grid grid-cols-3 gap-4 py-4">
                    <div className="flex col-span-1 justify-between items-start">
                      <p>Jenjang Pendidikan</p>
                      <p>:</p>
                    </div>
                    <div className="flex col-span-2 justify-start space-x-4">
                      <div className="py-1 px-4 bg-gray-200 rounded-lg">
                        <p className="text-sm text-gray-800">S1</p>
                      </div>
                      <div className="py-1 px-4 bg-gray-200 rounded-lg">
                        <p className="text-sm text-gray-800">S2</p>
                      </div>
                    </div>
                    <div className="flex col-span-1 justify-between items-start">
                      <p>Jurusan</p>
                      <p>:</p>
                    </div>
                    <div className="flex col-span-2 justify-start space-x-4">
                      <div className="flex col-span-2 justify-start space-x-4">
                        <div className="py-1 px-4 bg-gray-200 rounded-lg">
                          <p className="text-sm text-gray-800">
                            Teknik Informatika
                          </p>
                        </div>
                        <div className="py-1 px-4 bg-gray-200 rounded-lg">
                          <p className="text-sm text-gray-800">
                            Teknik Komputer
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex col-span-1 justify-between items-start">
                      <p>Jumlah yang dibutuhkan</p>
                      <p>:</p>
                    </div>
                    <div className="flex col-span-2 justify-start space-x-4">
                      <p>1 Orang</p>
                    </div>
                    <div className="flex col-span-1 justify-between items-start">
                      <p>Syarat khusus lain</p>
                      <p>:</p>
                    </div>
                    <div className="flex col-span-2 justify-start space-x-4 whitespace-pre-line">
                      <p>
                        {`1. D4/51 Computer Engineering/Science or Informatics Engineering
2. Good understanding and has experience about OOP
3. Have knowledge of software development and programming (C/C++ language)
4. Has experience in develop iOS/Android smartphone application will be advantage
5. Able work under pressure and tight deadline
`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8 colspan-1">
                <div className="p-8 space-y-4 bg-white rounded-xl border border-gray-300">
                  <div>
                    <h1 className="text-sm text-gray-500">Nama Posisi</h1>
                    <h1 className="text-xl font-bold text-blue-500">
                      Application Designer
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-sm text-gray-500">Penempatan</h1>
                    <h1 className="text-base font-semibold">
                      Kabupaten Bekasi, Jawa Barat
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-sm text-gray-500">Tayang</h1>
                    <h1 className="text-base font-semibold">26 Juni 2022</h1>
                  </div>
                  <div>
                    <h1 className="text-sm text-gray-500">Tipe Pekerjaan</h1>
                    <h1 className="text-base font-semibold">Fulltime</h1>
                  </div>
                  <div>
                    <h1 className="text-sm text-gray-500">Status Pekerjaan</h1>
                    <h1 className="text-base font-semibold">Tetap</h1>
                  </div>
                  <div>
                    <h1 className="text-sm text-gray-500">Fungsi Pekerjaan</h1>
                    <div className="flex flex-wrap justify-start items-center mt-2 space-x-3">
                      <div className="py-1 px-4 bg-yellow-200 rounded-xl">
                        <h1 className="text-sm text-yellow-900">Photoshop</h1>
                      </div>
                      <div className="py-1 px-4 bg-purple-200 rounded-xl">
                        <h1 className="text-sm text-purple-900">Desktop</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-white rounded-xl border border-gray-300">
                  <h1 className="pb-2 text-xl font-semibold">
                    Lowongan Terbaru
                  </h1>
                  <div className="grid grid-cols-1 divide-y divide-gray-300">
                    <div className="py-2">
                      <h1 className="text-base font-semibold">
                        Software Engineer
                      </h1>
                      <div className="flex justify-start items-center mt-1 space-x-2">
                        <Image
                          src={TokopediaAvatar}
                          alt=""
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                        <h1 className="text-sm text-gray-500">
                          PT. Tokopedia Indonesia • Yogyakarta
                        </h1>
                      </div>
                    </div>
                    <div className="py-2">
                      <h1 className="text-base font-semibold">
                        System Analyst
                      </h1>
                      <div className="flex justify-start items-center mt-1 space-x-2">
                        <Image
                          src={TokopediaAvatar}
                          alt=""
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                        <h1 className="text-sm text-gray-500">
                          PT. Tokopedia Indonesia • Banjarmasin
                        </h1>
                      </div>
                    </div>
                    <div className="py-2">
                      <h1 className="text-base font-semibold">
                        Fullstack Developer
                      </h1>
                      <div className="flex justify-start items-center mt-1 space-x-2">
                        <Image
                          src={TokopediaAvatar}
                          alt=""
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                        <h1 className="text-sm text-gray-500">
                          PT. Tokopedia Indonesia • Jakarta
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <FootNav />
      </body>
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
                    Selamat!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 whitespace-pre-line">
                      Anda berhasil mengisi lamaran pada{" "}
                      <span className="font-bold">
                        {" "}
                        Application Designer - PT. Tokopedia Indonesia.{" "}
                      </span>
                      Anda dapat memantau proses rekrutmen melalui halaman{" "}
                      <span className="text-blue-500"> Profil Saya.</span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-blue-900 bg-blue-100 rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
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
