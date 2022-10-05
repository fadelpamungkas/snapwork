import Link from "next/link";
import Image from "next/image";
import EditLowonganDialog from "../components/EditLowonganDialog";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import TokopediaAvatar from "../public/avtokopedia.png";
export default function EditableCareerCard() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-xl">
        <div className="relative py-6 px-8 w-full">
          <div className="flex mb-4 space-x-6">
            <h1 className="text-xl font-semibold">Application Designer</h1>
          </div>
          <p className="mr-28 text-sm text-gray-500">
            {`
Membuat aplikasi atau situs yang mudah digunakan oleh pengguna, dan terlihat keren, bagus, namun simple. Karena perasaan pengguna saat berinteraksi dengan interface jadi fokus utamanya.
`}
          </p>
          <div className="grid grid-cols-3 gap-2 py-4">
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
                  <p className="text-sm text-gray-800">Teknik Informatika</p>
                </div>
                <div className="py-1 px-4 bg-gray-200 rounded-lg">
                  <p className="text-sm text-gray-800">Teknik Komputer</p>
                </div>
              </div>
            </div>
            <div className="flex col-span-1 justify-between items-start">
              <p>Tipe Pekerjaan</p>
              <p>:</p>
            </div>
            <div className="flex col-span-2 justify-start space-x-4">
              <p>Pengembangan/Development</p>
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="flex-col justify-center items-center py-3 px-4 mx-auto w-full bg-red-500 rounded-tr-xl rounded-bl-xl">
              <h1 className="flex justify-center text-4xl font-bold text-white">
                8
              </h1>
              <h1 className="text-xl text-white">Lowongan</h1>
            </div>
          </div>
          <div className="absolute right-0 bottom-0">
            <div className="p-4">
              <button
                type="button"
                className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                onClick={openModal}
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
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
                <Dialog.Panel className="overflow-hidden p-8 w-full max-w-6xl text-left align-middle bg-white rounded-2xl transition-all transform">
                  <Dialog.Title
                    as="h3"
                    className="p-4 text-xl font-medium leading-6 text-center text-gray-900"
                  >
                    Ubah Lowongan
                  </Dialog.Title>
                  <hr />
                  <EditLowonganDialog />

                  <div className="flex justify-end mt-4 space-x-8">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Post
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
