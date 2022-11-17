import Image from "next/image";
import CompanyBanner from "../public/CompanyBanner1.png";
import TokopediaAvatar from "../public/avtokopedia.png";
import CompanyProfileTab from "../components/CompanyProfileTab";
import CompanyLowonganTab from "../components/CompanyLowonganTab";
import { Tab } from "@headlessui/react";
import useUser from "../lib/useUser";
import useSWR from "swr";

const companyFetcher = (...args) => fetch(...args).then((res) => res.json());

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileTabCompanyDashboard() {
  const { user } = useUser();
  const userid = user?.userData.id;

  const { data: companyres, error: companyerror } = useSWR(
    `https://snapwork.herokuapp.com/api/companybyuserid/${userid}`,
    companyFetcher
  );

  if (companyerror) return <div>Failed to load</div>;
  if (!companyres || !user || user.isLoggedIn === false) {
    return <div>Loading...</div>;
  }

  const company = companyres?.data.data;

  return (
    <>
      <section className="p-2 bg-white rounded-xl">
        <div className="p-2 mb-8">
          <Image
            className="object-fill max-w-lg rounded-2xl shadow-2xl"
            src={CompanyBanner}
            alt="Banner"
          />
        </div>
        <div className="grid grid-cols-10 gap-8 px-2 mx-auto max-w-screen-xl">
          <div className="col-span-3">
            <div className="p-8 rounded-xl border">
              <div className="flex flex-col justify-center items-center py-4">
                <Image
                  src={TokopediaAvatar}
                  alt=""
                  width={90}
                  height={90}
                  className="rounded-full"
                />
                <h1 className="mt-4 text-xl font-semibold">{company.name}</h1>
              </div>
              <div className="flex flex-col justify-center items-start py-4 space-y-4">
                <div className="space-y-2">
                  <h1 className="text-sm text-gray-500">Jenis Industri</h1>
                  <h1 className="text-sm">{company.industrytype}</h1>
                </div>
                <div className="space-y-2">
                  <h1 className="text-sm text-gray-500">Situs Web</h1>
                  <h1 className="text-sm">{company.website}</h1>
                </div>
                <div className="space-y-2">
                  <h1 className="text-sm text-gray-500">Alamat</h1>
                  <h1 className="text-sm">{company.address}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <div className="flex-col justify-center items-start rounded-xl border">
              <Tab.Group>
                <Tab.List className="flex justify-evenly items-center p-1 space-x-1 rounded-xl">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        "py-2.5 text-base font-medium leading-5 text-black",
                        selected
                          ? "border-b-4 border-b-blue-300 "
                          : "border-b-blue-50 text-black hover:border-b-4"
                      )
                    }
                  >
                    Profile
                  </Tab>
                </Tab.List>
                <Tab.Panels className="mt-2">
                  <Tab.Panel>
                    <CompanyProfileTab description={company.description} />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
