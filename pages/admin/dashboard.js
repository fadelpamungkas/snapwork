import FootNav from "../../components/FootNav";
import HeadNav from "../../components/HeadNav";
import CompanyTabAdminDashboard from "../../components/CompanyTabAdminDashboard";
import OrderTabAdminDashboard from "../../components/OrderTabAdminDashboard";
import NewsTabAdminDashboard from "../../components/NewsTabAdminDashboard";
import { Tab } from "@headlessui/react";
import {
  DocumentTextIcon,
  TicketIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AdminDashboard() {
  const tabItem = [
    {
      id: 1,
      name: "Perusahaan",
      icon: DocumentTextIcon,
    },
    {
      id: 2,
      name: "Pembayaran",
      icon: TicketIcon,
    },
    {
      id: 3,
      name: "Berita",
      icon: NewspaperIcon,
    },
  ];

  return (
    <>
      <body className="w-full text-gray-900 bg-gray-100">
        <HeadNav />
        <div className="px-8 pt-24 pb-4 mx-auto max-w-screen-xl">
          <Tab.Group vertical as="div" className="grid grid-cols-5">
            <Tab.List className="flex flex-col col-span-1 justify-start items-start p-8 space-y-2 text-sm bg-white rounded-2xl">
              <div className="mb-4">
                <h1 className="text-lg font-semibold">General</h1>
              </div>
              {tabItem.map((item) => (
                <Tab
                  key={item}
                  className={({ selected }) =>
                    classNames(
                      "flex items-center space-x-4 py-1 hover:text-blue-500 transition duration-150 text-base font-medium leading-5 focus:outline-none",
                      selected
                        ? "font-semibold text-blue-400"
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
                <CompanyTabAdminDashboard />
              </Tab.Panel>
              <Tab.Panel>
                <OrderTabAdminDashboard />
              </Tab.Panel>
              <Tab.Panel>
                <NewsTabAdminDashboard />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <FootNav />
      </body>
    </>
  );
}
