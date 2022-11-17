import Image from "next/image";
import Link from "next/link";
import ProfileMenu from "../../components/ProfileMenu";
import FootNav from "../../components/FootNav";
import HeadNav from "../../components/HeadNav";
import CompanyProfileTab from "../../components/CompanyProfileTab";
import CompanyLowonganTab from "../../components/CompanyLowonganTab";
import AddLowonganDialog from "../../components/AddLowonganDialog";
import ProfileTabCompanyDashboard from "../../components/ProfileTabCompanyDashboard";
import LowonganTabCompanyDashboard from "../../components/LowonganTabCompanyDashboard";
import DefaultPicture from "../../public/default_picture.png";
import CompanyBanner from "../../public/CompanyBanner1.png";
import TokopediaAvatar from "../../public/avtokopedia.png";
import SnapworkLogo from "../../public/SnapWork.png";
import AddIcon from "../../public/AddIcon.png";
import { Tab } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  DocumentTextIcon,
  UserIcon,
  TicketIcon,
  HomeIcon,
  ClipboardIcon,
} from "@heroicons/react/outline";
import toRupiah from "../../lib/currency";
import useUser from "../../lib/useUser";
import useSWR from "swr";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export async function getStaticProps() {
  const resCompanies = await fetch(
    "https://snapwork.herokuapp.com/api/companies"
  );
  const getCompanies = await resCompanies.json();
  const companies = getCompanies.data.data;

  const resApps = await fetch(
    "https://snapwork.herokuapp.com/api/transaction/applications"
  );
  const getApps = await resApps.json();
  const apps = getApps.data.data;

  return {
    props: {
      companies,
      apps,
    },
  };
}

export default function CompanyDashboard({ companies, apps }) {
  const { user } = useUser();
  const [edit, setEdit] = useState(false);
  const [isOpenAddApplication, setIsOpenAddApplication] = useState(false);

  const userid = user?.userData.id;

  const { data, error } = useSWR(
    `https://snapwork.herokuapp.com/api/companybyuserid/${userid}`,
    fetcher
  );
  console.log(data);

  if (!data || !user || user.isLoggedIn === false) {
    return <div>Loading...</div>;
  }
  const company = data.data.data;

  const tabItem = [
    {
      id: 1,
      name: "Dashboard",
      icon: HomeIcon,
    },
    {
      id: 2,
      name: "Profil Perusahaan",
      icon: UserIcon,
    },
    {
      id: 3,
      name: "Pembayaran",
      icon: TicketIcon,
    },
    {
      id: 4,
      name: "Lowongan",
      icon: ClipboardIcon,
    },
    {
      id: 5,
      name: "Lamaran",
      icon: DocumentTextIcon,
    },
  ];

  const tabProfileItem = [
    {
      id: 1,
      name: "Lowongan",
    },
    {
      id: 2,
      name: "Profil",
    },
  ];

  function closeAddApplicationModal() {
    setIsOpenAddApplication(false);
  }

  function openAddApplicationModal() {
    setIsOpenAddApplication(true);
  }

  return (
    <>
      <body className="w-full text-gray-900 bg-gray-100">
        <div className="px-8 pt-4 pb-4 mx-auto max-w-screen-xl">
          <div className="grid grid-cols-5">
            <div className="col-span-1 bg-white rounded-t-2xl">
              <div className="flex justify-center items-center h-full">
                <Image
                  src={SnapworkLogo}
                  className="object-contain"
                  width={120}
                  height={50}
                  alt="Snapwork"
                />
              </div>
            </div>
            <div className="col-span-4 pb-8 pl-8">
              <div className="p-4 bg-rose-50 rounded-2xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                    <h1 className="pt-2 text-lg font-medium">
                      Welcome, PT. Indonesia EPSON INDUSTRY
                    </h1>
                    <p className="text-sm text-gray-500 whitespace-pre-line">
                      {`Memberikan kemudahan membaca informasi dengan cepat dan
                      akurat dari database yang telah dihubungkan`}
                    </p>
                  </div>
                  <div className="">
                    {user?.isLoggedIn ? (
                      <ProfileMenu user={user} />
                    ) : (
                      <>
                        <Link href="/login">
                          <a className="py-3 px-6 font-medium text-blue-500 rounded-xl transition duration-150 hover:text-blue-600">
                            Sign In
                          </a>
                        </Link>
                        <Link href="/signup">
                          <a className="py-3 px-6 font-medium text-white bg-blue-500 rounded-xl transition duration-150 hover:bg-blue-600">
                            Sign Up
                          </a>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tab.Group vertical as="div" className="grid grid-cols-5">
            <Tab.List className="flex flex-col col-span-1 justify-start items-start p-8 space-y-2 text-sm bg-white rounded-b-2xl">
              <div className="mb-4">
                <h1 className="text-lg font-semibold">General</h1>
              </div>
              {tabItem.map((item) => (
                <Tab
                  key={item}
                  className={({ selected }) =>
                    classNames(
                      "flex items-center space-x-4 py-1 text-base font-medium leading-5 transition duration-150 hover:text-blue-500 focus:outline-none",
                      selected ? "font-semibold text-blue-400" : "text-gray-400"
                    )
                  }
                >
                  <item.icon className="w-6 h-6" />
                  <h1>{item.name}</h1>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="col-span-4 pl-8">
              <Tab.Panel>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 p-8 bg-white rounded-2xl">
                    <div className="flex justify-between items-center py-2">
                      <h1 className="text-xl font-semibold">
                        Verifikasi Pelamar Kerja
                      </h1>
                    </div>
                    <div className="py-2">
                      {apps.map((item, index) => (
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
                            <h1 className="font-semibold">{item.userid}</h1>
                          </div>
                          <h1 className="flex col-span-1 text-sm text-gray-500">
                            {item.companyid}
                          </h1>
                          <h1 className="flex col-span-2 justify-center text-sm font-semibold">
                            {item.created_at}
                          </h1>
                          <div className="flex col-span-2 justify-center">
                            {item.status === "Verified" ? (
                              <h1 className="py-2 px-4 text-sm text-green-900 bg-green-100 rounded-2xl">
                                {item.status}
                              </h1>
                            ) : (
                              <h1 className="py-2 px-4 text-sm text-yellow-900 bg-yellow-100 rounded-2xl">
                                {item.status}
                              </h1>
                            )}
                          </div>
                          <button
                            type="button"
                            className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-blue-900 bg-blue-100 rounded-2xl border border-transparent transition duration-150 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          >
                            Detail
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 p-8 bg-white rounded-2xl">
                    <div className="flex justify-between items-center py-2">
                      <h1 className="text-xl font-semibold">Lowongan Kerja</h1>
                    </div>
                    <div className="py-2">
                      <CompanyLowonganTab editable={true} company={company} />
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <ProfileTabCompanyDashboard />
              </Tab.Panel>
              <Tab.Panel>
                <div className="">
                  <div className="grid grid-cols-1 p-8 bg-white rounded-2xl">
                    <div className="flex justify-between items-center py-2">
                      <h1 className="text-xl font-semibold">
                        Verifikasi Perusahaan
                      </h1>
                    </div>
                    <div className="py-2">
                      {apps.map((item, index) => (
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
                            <h1 className="font-semibold">{item.userid}</h1>
                          </div>
                          <h1 className="flex col-span-1 text-sm text-gray-500">
                            {item.companyid}
                          </h1>
                          <h1 className="flex col-span-2 justify-center text-sm font-semibold">
                            {item.created_at}
                          </h1>
                          <div className="flex col-span-2 justify-center">
                            {item.status === "Verified" ? (
                              <h1 className="py-2 px-4 text-sm text-green-900 bg-green-100 rounded-2xl">
                                {item.status}
                              </h1>
                            ) : (
                              <h1 className="py-2 px-4 text-sm text-yellow-900 bg-yellow-100 rounded-2xl">
                                {item.status}
                              </h1>
                            )}
                          </div>
                          <button
                            type="button"
                            className="inline-flex col-span-1 justify-center py-2 px-6 text-sm font-medium text-blue-900 bg-blue-100 rounded-2xl border border-transparent transition duration-150 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={() => openCompanyDetailModal(item)}
                          >
                            Detail
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <LowonganTabCompanyDashboard />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <FootNav />
      </body>
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
