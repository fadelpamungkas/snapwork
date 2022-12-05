import Image from "next/image";
import Link from "next/link";
import ProfileMenu from "../../components/ProfileMenu";
import FootNav from "../../components/FootNav";
import ProfileTabCompanyDashboard from "../../components/ProfileTabCompanyDashboard";
import PembayaranTabCompanyDashboard from "../../components/PembayaranTabCompanyDashboard";
import LowonganTabCompanyDashboard from "../../components/LowonganTabCompanyDashboard";
import LamaranTabCompanyDashboard from "../../components/LamaranTabCompanyDashboard";
import SnapworkLogo from "../../public/SnapWork.png";
import DashboardIcon from "../../public/Dashboard.svg";
import ProfileIcon from "../../public/Profile.svg";
import PembayaranIcon from "../../public/Pembayaran.svg";
import LamaranIcon from "../../public/Lamaran.svg";
import LowonganIcon from "../../public/Lowongan.svg";
import { Tab } from "@headlessui/react";
import useUser from "../../lib/useUser";
import useSWR from "swr";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function CompanyDashboard() {
  const { user } = useUser();

  const userid = user?.userData.id;

  const { data, error } = useSWR(
    `https://snapwork.herokuapp.com/api/companybyuserid/${userid}`,
    fetcher
  );
  console.log(data);

  if (!data || !user || user.isLoggedIn === false) {
    return <div>Loading...</div>;
  }
  const company = data?.data.data;

  const tabItem = [
    {
      id: 1,
      name: "Dashboard",
      icon: DashboardIcon,
    },
    {
      id: 2,
      name: "Profil Perusahaan",
      icon: ProfileIcon,
    },
    {
      id: 3,
      name: "Pembayaran",
      icon: PembayaranIcon,
    },
    {
      id: 4,
      name: "Lowongan",
      icon: LowonganIcon,
    },
    {
      id: 5,
      name: "Lamaran",
      icon: LamaranIcon,
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

  return (
    <>
      <body className="w-full text-gray-900 bg-gray-100">
        <div className="px-8 py-8 mx-auto max-w-screen-xl">
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
                      Welcome, {company.name}
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
                      selected
                        ? "fill-blue-400 stroke-blue-400 font-semibold text-blue-400"
                        : "text-gray-400"
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
                  <LamaranTabCompanyDashboard
                    applications={company?.applications}
                  />
                  <LowonganTabCompanyDashboard company={company} />
                  <PembayaranTabCompanyDashboard job={company?.companyjob} />
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <ProfileTabCompanyDashboard company={company} />
              </Tab.Panel>
              <Tab.Panel>
                <PembayaranTabCompanyDashboard job={company?.companyjob} />
              </Tab.Panel>
              <Tab.Panel>
                <LowonganTabCompanyDashboard company={company} />
              </Tab.Panel>
              <Tab.Panel>
                <LamaranTabCompanyDashboard
                  applications={company?.applications}
                />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <FootNav />
      </body>
    </>
  );
}
