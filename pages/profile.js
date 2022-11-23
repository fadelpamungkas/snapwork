import Image from "next/image";
import FootNav from "../components/FootNav";
import HeadNav from "../components/HeadNav";
import ProfilTab from "../components/ProfilTab";
import DatadiriTab from "../components/DatadiriTab";
import PengembanganDiriTab from "../components/PengembanganDiriTab";
import KarirTab from "../components/KarirTab";
import { Tab } from "@headlessui/react";
import UserAvatar from "../public/avuser.png";
import { CogIcon } from "@heroicons/react/outline";
import useUser from "../lib/useUser";
import useSWR from "swr";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const personFetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Profile() {
  const { user } = useUser();

  const tabItem = [
    {
      id: 1,
      name: "Profil",
    },
    {
      id: 2,
      name: "Data Diri",
    },
    {
      id: 3,
      name: "Pengembangan Diri",
    },
    {
      id: 4,
      name: "Karir Saya",
    },
  ];

  const userId = user?.userData.id;

  const { data: personres, error: personerror } = useSWR(
    `https://snapwork.herokuapp.com/api/person/${userId}`,
    personFetcher
  );

  if (personerror) return <div>Failed to load</div>;
  if (!personres) return <div>Loading...</div>;

  const person = personres?.data.data;
  console.log(person);

  return (
    <>
      <body className="py-8 w-full text-gray-900">
        <HeadNav />
        <div className="w-full bg-gray-50">
          <div className="py-16 px-8 mx-auto max-w-screen-xl">
            <section className="p-2 bg-white rounded-xl border shadow-2xl">
              <div className="flex justify-between items-center py-2 px-4">
                <h1 className="text-2xl font-semibold text-blue-500">
                  Profil Saya
                </h1>
              </div>
              <div className="grid grid-cols-10 gap-8 px-2 mx-auto max-w-screen-xl">
                <div className="col-span-3">
                  <div className="p-8 rounded-xl border divide-y divide-gray-300">
                    <div className="flex flex-col justify-center items-center py-4">
                      <Image
                        src={UserAvatar}
                        alt=""
                        width={90}
                        height={90}
                        className="rounded-full"
                      />
                      {user?.isLoggedIn ? (
                        <h1 className="mt-4 text-xl font-semibold">
                          {user.userData.name}
                        </h1>
                      ) : (
                        <h1 className="mt-4 text-xl font-semibold">-</h1>
                      )}
                      <h1 className="text-sm">S1 Teknik Informatika</h1>
                      <h1 className="text-sm">
                        Mahasiswa di Universitas Islam Indonesia
                      </h1>
                      <h1 className="text-sm">Agustus 2018 - Sekarang</h1>
                    </div>
                    <div className="flex flex-col justify-center items-start py-4 space-y-4">
                      <div className="space-y-2">
                        <h1 className="text-sm text-gray-500">
                          Pendidikan Terakhir
                        </h1>
                        {person?.education?.name ? (
                          <h1 className="text-sm">{person.education.name}</h1>
                        ) : (
                          <h1 className="text-sm">-</h1>
                        )}
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-sm text-gray-500">Social Media</h1>
                        <div className="grid grid-cols-4">
                          <div className="col-span-1 space-y-1">
                            <div className="flex justify-between items-center space-x-1">
                              <h1 className="text-sm">Twitter</h1>
                              <h1 className="text-sm">:</h1>
                            </div>
                            <div className="flex justify-between items-center">
                              <h1 className="text-sm">Linkedin</h1>
                              <h1 className="text-sm">:</h1>
                            </div>
                          </div>
                          <div className="col-span-3 pl-1 space-y-1">
                            {person?.twitter ? (
                              <h1 className="text-sm truncate">
                                {person.twitter}
                              </h1>
                            ) : (
                              <h1 className="text-sm truncate">-</h1>
                            )}
                            {person?.linkedin ? (
                              <h1 className="text-sm truncate">
                                {person.linkedin}
                              </h1>
                            ) : (
                              <h1 className="text-sm truncate">-</h1>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {person.applications && (
                      <>
                        {person.applications.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col justify-center items-start py-4 space-y-1"
                          >
                            <h1 className="text-base font-medium text-gray-900">
                              {item.jobposition} • {item.jobtype}
                            </h1>
                            <h1 className="text-sm text-gray-500">
                              {item.companyname}
                            </h1>
                            <h1 className="text-sm text-gray-500">
                              {`Status: `}
                              <span className="font-semibold text-red-400">
                                {item.status}
                              </span>
                            </h1>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="flex-col justify-center items-start rounded-xl border">
                    <Tab.Group>
                      <Tab.List className="flex justify-evenly items-center p-1 space-x-1 rounded-xl">
                        {tabItem.map((item) => (
                          <Tab
                            key={item}
                            className={({ selected }) =>
                              classNames(
                                "py-2.5 text-base font-medium leading-5 text-black",
                                selected
                                  ? "border-b-4 border-b-blue-300 "
                                  : "border-b-blue-50 text-black hover:border-b-4"
                              )
                            }
                          >
                            {item.name}
                          </Tab>
                        ))}
                      </Tab.List>
                      <Tab.Panels className="mt-2">
                        <Tab.Panel>
                          <ProfilTab />
                        </Tab.Panel>
                        <Tab.Panel>
                          <DatadiriTab person={person} />
                        </Tab.Panel>
                        <Tab.Panel>
                          <PengembanganDiriTab />
                        </Tab.Panel>
                        <Tab.Panel>
                          <KarirTab applications={person.applications} />
                        </Tab.Panel>
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <FootNav />
      </body>
    </>
  );
}
