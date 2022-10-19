import Image from "next/image";
import FootNav from "../../../components/FootNav";
import HeadNav from "../../../components/HeadNav";
import KarirTab from "../../../components/KarirTab";
import CompanyProfileTab from "../../../components/CompanyProfileTab";
import CompanyLowonganTab from "../../../components/CompanyLowonganTab";
import { Tab } from "@headlessui/react";
import CompanyBanner from "../../../public/CompanyBanner1.png";
import TokopediaAvatar from "../../../public/avtokopedia.png";
import useUser from "../../../lib/useUser";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://snapwork.herokuapp.com/api/companies");
  const companies = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = companies.data.data.map((company) => ({
    params: { companyid: company._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://snapwork.herokuapp.com/api/company/${params.companyid}`
  );
  const data = await res.json();
  const company = data.data.data;

  // Pass post data to the page via props
  return { props: { company } };
}

export default function Index({ company }) {
  const router = useRouter();
  const { user } = useUser();

  const tabItem = [
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
      <body className="py-8 w-full text-gray-900">
        <HeadNav />
        <div className="w-full bg-gray-50">
          <div className="py-16 px-8 mx-auto max-w-screen-xl">
            <section className="p-2 bg-white rounded-xl border shadow-2xl">
              <div className="p-2 mb-8">
                <Image
                  className="object-fill max-w-lg rounded-2xl shadow-2xl"
                  src={CompanyBanner}
                  alt="Banner"
                />
              </div>
              <div className="grid grid-cols-10 gap-8 px-2 mx-auto max-w-screen-xl">
                <div className="col-span-3">
                  <div className="p-8 rounded-xl border divide-y divide-gray-300">
                    <div className="flex flex-col justify-center items-center py-4">
                      <Image
                        src={TokopediaAvatar}
                        alt=""
                        width={90}
                        height={90}
                        className="rounded-full"
                      />
                      {user?.isLoggedIn ? (
                        <h1 className="mt-4 text-xl font-semibold">
                          {company.name}
                        </h1>
                      ) : (
                        <h1 className="mt-4 text-xl font-semibold">
                          {company.name}
                        </h1>
                      )}
                    </div>
                    <div className="flex flex-col justify-center items-start py-4 space-y-4">
                      <div className="space-y-2">
                        <h1 className="text-sm text-gray-500">
                          {router.query.companyid}
                        </h1>
                        <h1 className="text-sm">{company.industrytype}</h1>
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-sm text-gray-500">Situs Web</h1>
                        <a href={company.website}>
                          <h1 className="text-sm text-blue-500">
                            {company.website}
                          </h1>
                        </a>
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
                          <CompanyLowonganTab
                            editable={false}
                            company={company}
                          />
                        </Tab.Panel>
                        <Tab.Panel>
                          <CompanyProfileTab
                            description={company.description}
                          />
                        </Tab.Panel>
                        <Tab.Panel>
                          <KarirTab />
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
