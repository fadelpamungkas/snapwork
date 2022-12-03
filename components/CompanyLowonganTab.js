import Image from "next/image";
import Link from "next/link";
import ProfileCareerCard from "../components/ProfileCareerCard";
import AddIcon from "../public/AddIcon.png";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import AddLowonganDialog from "../components/AddLowonganDialog";

export default function CompanyLowonganTab({ editable, company }) {
  const [isOpenAddApplication, setIsOpenAddApplication] = useState(false);

  function closeAddApplicationModal() {
    setIsOpenAddApplication(false);
  }

  function openAddApplicationModal() {
    setIsOpenAddApplication(true);
  }

  return (
    <>
      <div>
        <div className="p-8 space-y-8">
          {editable ? (
            <>
              {company?.companyjob?.map((item, index) => (
                <ProfileCareerCard
                  key={index}
                  editable={editable}
                  item={item}
                />
              ))}
              <a className="cursor-pointer" onClick={openAddApplicationModal}>
                <div className="py-8 w-full">
                  <div className="bg-white rounded-xl border border-gray-300 border-dashed shadow-xl transition duration-150 hover:bg-green-50">
                    <div className="flex justify-center items-center p-8 space-x-8">
                      <Image src={AddIcon} width={100} height={100} alt="Add" />
                      <h1 className="text-lg font-semibold text-green-500">
                        Tambah Lowongan
                      </h1>
                    </div>
                  </div>
                </div>
              </a>
            </>
          ) : (
            <>
              {company?.companyjob?.map((item, index) => (
                <Link
                  href={`/company/${company._id}/${item._id}`}
                  passHref
                  key={index}
                >
                  <a className="flex">
                    <ProfileCareerCard editable={editable} item={item} />
                  </a>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
      <Transition appear show={isOpenAddApplication} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeAddApplicationModal}
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
                <Dialog.Panel className="overflow-hidden p-8 w-full max-w-6xl text-left align-middle bg-white rounded-2xl transition-all transform">
                  <Dialog.Title
                    as="h3"
                    className="p-4 text-xl font-medium leading-6 text-center text-gray-900"
                  >
                    Tambah Lowongan
                  </Dialog.Title>
                  <hr />
                  <AddLowonganDialog />

                  <div className="flex justify-end mt-4 space-x-8">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeAddApplicationModal}
                    >
                      Batal
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={closeAddApplicationModal}
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
