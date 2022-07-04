import Image from "next/image";
import FootNav from "../../components/FootNav";
import HeadNav from "../../components/HeadNav";
import TokopediaAvatar from "../../public/avtokopedia.png";
import { BookmarkIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
export default function Company() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <body className="w-full py-8 text-gray-900">
        <HeadNav />
        <div className="w-full bg-gray-50">
          <div className="mx-auto max-w-screen-xl py-16 px-8">
            <section className="relative bg-white border rounded-xl border-gray-300 ">
              <div className="rounded-t-xl bg-blue-200 py-8 px-8">
                <div className="p-10">

                </div>
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
                <h1 className="text-2xl mb-2 font-bold first:capitalize ">
                  PT. Tokopedia Indonesia
                </h1>
                <h1 className="whitespace-pre text-base font-medium first:capitalize">
                  Jakarta Selatan, Indonesia
                </h1>
                <h1 className="whitespace-pre text-base font-medium first:capitalize">
                  www.tokopedia.com
                </h1>
                <div className="absolute bottom-0 right-0 py-8 px-8 space-x-4">
                  <button type="submit" className="rounded-lg space-x-2 px-8 py-2 inline-flex items-center">
                    <BookmarkIcon
                      className="h-4 w-5"
                      aria-hidden="true"
                    />
                    <span>Simpan</span>
                  </button>
                  <button type="button" onClick={openModal} className="rounded-lg px-8 py-2 bg-blue-500 text-white inline-flex items-center">Lamar</button>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-3 gap-8 py-8">
              <div className="col-span-2 space-y-8">
                <div className="bg-white border rounded-xl border-gray-300 p-8">
                  <h1 className="text-2xl font-semibold">Informasi Pekerjaan</h1>
                  <h1 className="whitespace-pre-line py-4 text-base font-normal">
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam id blandit eget nunc, in tempus tempor. Euismod ipsum ut nisi ac aliquet senectus sagittis vel semper. Egestas integer integer enim duis. Sit augue nisi interdum malesuada ornare in ultrices amet pellentesque. Rhoncus proin hac ipsum sagittis cras senectus vitae ultrices id. Pharetra diam auctor malesuada et sit nulla tempor nunc id. Tellus aliquet lectus quisque volutpat sollicitudin eget pharetra gravida tristique. Pharetra montes, rhoncus, mauris lectus quis purus enim interdum auctor. Adipiscing tellus faucibus ante ut neque. Integer tincidunt vivamus neque eu, lectus sed scelerisque sagittis, fermentum. Blandit in praesent arcu scelerisque aliquam mauris vestibulum gravida sed. Rutrum duis habitant hendrerit sed. `}
                  </h1>
                  <h1 className="text-xl font-semibold">Deskripsi Pekerjaan</h1>
                  <h1 className="whitespace-pre-line py-4 text-base font-normal">
                    {`1.  Develop iOS smart application
2. Collaborate with teams throught the design process
3. Do development process from requirement definision & analysisl, design, implementation/coding
4. Function test, application release, and maintenance.
5. Break any design problem down into viable actionable chucks and solve them with clarity and precision.`}
                  </h1>
                </div>
                <div className="bg-white border rounded-xl border-gray-300 p-8">
                  <h1 className="text-2xl font-semibold">Persyaratan</h1>
                  <div className="grid grid-cols-3 gap-4 py-4">
                    <div className="col-span-1 flex items-start justify-between">
                      <p>Jenjang Pendidikan</p>
                      <p>:</p>
                    </div>
                    <div className="col-span-2 flex justify-start space-x-4">
                      <div className="bg-gray-200 py-1 px-4 rounded-lg">
                        <p className="text-sm text-gray-800">S1</p>
                      </div>
                      <div className="bg-gray-200 py-1 px-4 rounded-lg">
                        <p className="text-sm text-gray-800">S2</p>
                      </div>
                    </div>
                    <div className="col-span-1 flex items-start justify-between">
                      <p>Jurusan</p>
                      <p>:</p>
                    </div>
                    <div className="col-span-2 flex justify-start space-x-4">
                      <div className="col-span-2 flex justify-start space-x-4">
                        <div className="bg-gray-200 py-1 px-4 rounded-lg">
                          <p className="text-sm text-gray-800">Teknik Informatika</p>
                        </div>
                        <div className="bg-gray-200 py-1 px-4 rounded-lg">
                          <p className="text-sm text-gray-800">Teknik Komputer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 flex items-start justify-between">
                      <p>Jumlah yang dibutuhkan</p>
                      <p>:</p>
                    </div>
                    <div className="col-span-2 flex justify-start space-x-4">
                      <p>1 Orang</p>
                    </div>
                    <div className="col-span-1 flex items-start justify-between">
                      <p>Syarat khusus lain</p>
                      <p>:</p>
                    </div>
                    <div className="col-span-2 whitespace-pre-line flex justify-start space-x-4">
                      <p>{`1. D4/51 Computer Engineering/Science or Informatics Engineering
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
              <div className="colspan-1 space-y-8">
                <div className="bg-white border rounded-xl border-gray-300 p-8 space-y-4">
                  <div>
                    <h1 className="text-sm text-gray-500">Nama Posisi</h1>
                    <h1 className="text-xl font-bold text-blue-500">Application Designer</h1>
                  </div>
                  <div>
                    <h1 className="text-sm text-gray-500">Penempatan</h1>
                    <h1 className="text-base font-semibold">Kabupaten Bekasi, Jawa Barat</h1>
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
                    <div className="flex items-center justify-start mt-2 space-x-3 flex-wrap">
                      <div className="rounded-xl bg-yellow-200 py-1 px-4">
                        <h1 className="text-sm text-yellow-900">Photoshop</h1>
                      </div>
                      <div className="rounded-xl bg-purple-200 py-1 px-4">
                        <h1 className="text-sm text-purple-900">Desktop</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border rounded-xl border-gray-300 p-8">
                  <h1 className="text-xl font-semibold pb-2">Lowongan Terbaru</h1>
                  <div className="grid grid-cols-1 divide-y divide-gray-300">
                    <div className="py-2">
                      <h1 className="text-base font-semibold">Software Engineer</h1>
                      <div className="mt-1 flex items-center justify-start space-x-2">
                        <Image
                          src={TokopediaAvatar}
                          alt=""
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                        <h1 className="text-sm text-gray-500">PT. Tokopedia Indonesia • Yogyakarta</h1>
                      </div>
                    </div>
                    <div className="py-2">
                      <h1 className="text-base font-semibold">System Analyst</h1>
                      <div className="mt-1 flex items-center justify-start space-x-2">
                        <Image
                          src={TokopediaAvatar}
                          alt=""
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                        <h1 className="text-sm text-gray-500">PT. Tokopedia Indonesia • Banjarmasin</h1>
                      </div>
                    </div>
                    <div className="py-2">
                      <h1 className="text-base font-semibold">Fullstack Developer</h1>
                      <div className="mt-1 flex items-center justify-start space-x-2">
                        <Image
                          src={TokopediaAvatar}
                          alt=""
                          width={20}
                          height={20}
                          className="rounded-full"
                        />
                        <h1 className="text-sm text-gray-500">PT. Tokopedia Indonesia • Jakarta</h1>
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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Selamat!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="whitespace-pre-line text-sm text-gray-500">
                      Anda berhasil mengisi lamaran pada <span className="font-bold"> Application Designer - PT. Tokopedia Indonesia. </span>
                      Anda dapat memantau proses rekrutmen melalui halaman <span className="text-blue-500"> Profil Saya.</span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
  )
}
