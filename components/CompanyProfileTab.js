import { Tab } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useUser from "../lib/useUser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function CompanyProfileTab() {
  const { user } = useUser();
  const [edit, setEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="col-span-4 py-2 px-12 border-t">
        <div className="grid grid-cols-1">
          <div className="flex justify-between items-center py-2">
            <h1 className="text-xl font-semibold">Tentang Perusahaan</h1>
          </div>
          <h1 className="whitespace-pre-line text-gray-500">
            {`Indonesia Epson Industry (furthermore IEI), is a leading printer manufacturing company located in EJIP Industrial Park, Cikarang Selatan, Bekasi. In general, we produce two kinds of Epson printers: Ink-Jet dan SIDM (Serial Impact Dot Matrix) Printers, with its various models. Our production capacity is more than 10 million printers in a year ; most of all are for export market. During peak season more than 10,000 employees work in this factory.`}
          </h1>
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
