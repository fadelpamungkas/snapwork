import Link from "next/link";
import FootNav from "../../components/FootNav";
import CompanyTabAdminDashboard from "../../components/CompanyTabAdminDashboard";
import OrderTabAdminDashboard from "../../components/OrderTabAdminDashboard";
import NewsTabAdminDashboard from "../../components/NewsTabAdminDashboard";
import DashboardIcon from "../../public/Dashboard.svg";
import PembayaranIcon from "../../public/Pembayaran.svg";
import BeritaIcon from "../../public/BeritaIcon.svg";
import LamaranIcon from "../../public/Lamaran.svg";
import { Tab } from "@headlessui/react";
import ProfileMenu from "../../components/ProfileMenu";
import useUser from "../../lib/useUser";
import useSWR from "swr";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const companyFetcher = (...args) => fetch(...args).then((res) => res.json());
const personFetcher = (...args) => fetch(...args).then((res) => res.json());
const newsFetcher = (...args) => fetch(...args).then((res) => res.json());

export default function AdminDashboard() {
  const { user } = useUser();

  const tabItem = [
    {
      id: 1,
      name: "Dashboard",
      icon: DashboardIcon,
    },
    {
      id: 2,
      name: "Pembayaran",
      icon: PembayaranIcon,
    },
    {
      id: 3,
      name: "Perusahaan",
      icon: LamaranIcon,
    },
    {
      id: 4,
      name: "Berita",
      icon: BeritaIcon,
    },
  ];

  const { data: personres, error: personerror } = useSWR(
    `https://snapwork.herokuapp.com/api/person`,
    personFetcher
  );

  const { data: companyres, error: companyerror } = useSWR(
    `https://snapwork.herokuapp.com/api/companies`,
    companyFetcher
  );

  const { data: newsres, error: newserror } = useSWR(
    `https://snapwork.herokuapp.com/api/news`,
    newsFetcher
  );

  if (personerror || companyerror || newserror)
    return <div>Failed to load</div>;
  if (!personres || !companyres || !newsres) return <div>Loading...</div>;

  const persons = personres?.data.data;
  const companies = companyres?.data.data;
  const news = newsres?.data.data;

  return (
    <>
      <body className="w-full text-gray-900 bg-gray-100">
        <div className="py-8 px-8 mx-auto max-w-screen-xl">
          <div className="grid grid-cols-5">
            <div className="col-span-1 bg-white rounded-t-2xl">
              <div className="flex justify-center items-center h-full"></div>
            </div>
            <div className="col-span-4 pb-8 pl-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-semibold">Dashboard Admin</h1>
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
          <Tab.Group vertical as="div" className="grid grid-cols-5">
            <Tab.List className="flex flex-col col-span-1 justify-start items-start px-8 space-y-2 text-sm bg-white rounded-2xl">
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
              <Tab.Panel className="space-y-8">
                <CompanyTabAdminDashboard companies={companies} />
                <OrderTabAdminDashboard
                  persons={persons}
                  companies={companies}
                />
                <NewsTabAdminDashboard news={news} />
              </Tab.Panel>
              <Tab.Panel>
                <OrderTabAdminDashboard
                  persons={persons}
                  companies={companies}
                />
              </Tab.Panel>
              <Tab.Panel>
                <CompanyTabAdminDashboard companies={companies} />
              </Tab.Panel>
              <Tab.Panel>
                <NewsTabAdminDashboard news={news} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <FootNav />
      </body>
    </>
  );
}
