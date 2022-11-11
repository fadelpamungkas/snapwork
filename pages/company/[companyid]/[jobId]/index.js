import Link from "next/link";
import Image from "next/image";
import HeaderImage from "../../../../public/CompanyHeaderDefault.png";
import FootNav from "../../../../components/FootNav";
import HeadNav from "../../../../components/HeadNav";
import TokopediaAvatar from "../../../../public/avtokopedia.png";
import { BookmarkIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import useUser from "../../../../lib/useUser";
import useSWR from "swr";

const jobFetcher = (...args) => fetch(...args).then((res) => res.json());
const companyFetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Index() {
  const { user } = useUser();
  const router = useRouter();
  const companyId = router.query.companyid;
  const jobId = router.query.jobId;

  const { data: jobres, error: joberror } = useSWR(
    `https://snapwork.herokuapp.com/api/company/${companyId}/${jobId}`,
    jobFetcher
  );

  const { data: companyres, error: companyerror } = useSWR(
    `https://snapwork.herokuapp.com/api/company/${companyId}`,
    companyFetcher
  );

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    if (user?.userData.role === "none") {
      router.push("/chooserole");
    } else {
      setIsOpen(true);
    }
  }

  if (joberror || companyerror) return <div>Failed to load</div>;
  if (!jobres || !companyres) return <div>Loading...</div>;

  console.log(job);

  const job = jobres?.data.data;
  const company = companyres?.data.data;

  return (
    <>
      <body className="py-8 w-full text-gray-900">
        <HeadNav />
        <div className="justify-center items-center p-8 w-full">
          <Image
            className="object-fill max-w-lg rounded-2xl shadow-2xl"
            src={HeaderImage}
            alt="Header"
          />
          <div className="py-16 px-8 mx-auto max-w-screen-xl">
            <div className="w-full -translate-y-52">
              <div className="bg-white rounded-xl border border-gray-300">
                <div className="flex justify-between py-8 px-8 items-cener">
                  <div className="flex items-center space-x-8">
                    <Image
                      src={TokopediaAvatar}
                      alt=""
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                    <div>
                      <h1 className="text-2xl font-bold first:capitalize">
                        {company.name}
                      </h1>
                      <h1 className="text-base font-medium whitespace-pre first:capitalize">
                        {company.address}
                      </h1>
                      <a
                        href="https://www.tokopedia.com"
                        className="text-base font-medium text-blue-500 whitespace-pre first:capitalize"
                      >
                        {company.website}
                      </a>
                    </div>
                  </div>
                  <div className="py-8 px-8 space-x-4">
                    <button
                      type="submit"
                      className="inline-flex items-center py-2 px-8 space-x-2 rounded-lg transition duration-150 hover:text-blue-500"
                    >
                      <BookmarkIcon className="w-5 h-4" aria-hidden="true" />
                      <span>Simpan</span>
                    </button>
                    <button
                      type="button"
                      onClick={openModal}
                      className="inline-flex items-center py-2 px-8 text-white bg-green-500 rounded-lg duration-150 hover:bg-green-600 transiiton"
                    >
                      Lamar
                    </button>
                  </div>
                </div>
              </div>
              <section className="grid grid-cols-3 gap-8 py-8">
                <div className="col-span-2 space-y-8">
                  <div className="p-8 bg-white rounded-xl border border-gray-300">
                    <h1 className="text-2xl font-semibold">
                      Informasi Perusahaan
                    </h1>
                    <h1 className="py-4 text-base font-normal whitespace-pre-line">
                      {company.description}
                    </h1>
                    <h1 className="text-xl font-semibold">
                      Deskripsi Pekerjaan
                    </h1>
                    <h1 className="py-4 text-base font-normal whitespace-pre-line">
                      {job.description}
                      {`
1.  Develop iOS smart application
2. Collaborate with teams throught the design process
3. Do development process from requirement definision & analysisl, design, implementation/coding
4. Function test, application release, and maintenance.
5. Break any design problem down into viable actionable chucks and solve them with clarity and precision.`}
                    </h1>
                  </div>
                  <div className="p-8 bg-white rounded-xl border border-gray-300">
                    <h1 className="text-2xl font-semibold">Persyaratan</h1>
                    <div className="grid grid-cols-3 gap-4 py-4">
                      <div className="flex col-span-1 justify-between items-start">
                        <p>Jenjang Pendidikan</p>
                        <p>:</p>
                      </div>
                      <div className="flex col-span-2 justify-start space-x-4">
                        <div className="py-1 px-4 bg-gray-200 rounded-lg">
                          <p className="text-sm text-gray-800">
                            {job.education}
                          </p>
                        </div>
                      </div>
                      <div className="flex col-span-1 justify-between items-start">
                        <p>Jurusan</p>
                        <p>:</p>
                      </div>
                      <div className="flex col-span-2 justify-start space-x-4">
                        <div className="flex col-span-2 justify-start space-x-4">
                          <div className="py-1 px-4 bg-gray-200 rounded-lg">
                            <p className="text-sm text-gray-800">{job.major}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex col-span-1 justify-between items-start">
                        <p>Jumlah yang dibutuhkan</p>
                        <p>:</p>
                      </div>
                      <div className="flex col-span-2 justify-start space-x-4">
                        <p>{job.available}</p>
                      </div>
                      <div className="flex col-span-1 justify-between items-start">
                        <p>Syarat khusus lain</p>
                        <p>:</p>
                      </div>
                      <div className="flex col-span-2 justify-start space-x-4 whitespace-pre-line">
                        <p>
                          {job.specificreq}
                          {`
1. D4/51 Computer Engineering/Science or Informatics Engineering
2. Good understanding and has experience about OOP
3. Have knowledge of software development and programming (C/C++ language)
4. Has experience in develop iOS/Android smartphone application will be advantage
5. Able work under pressure and tight deadline
`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-8 colspan-1">
                  <div className="p-8 space-y-4 bg-white rounded-xl border border-gray-300">
                    <div>
                      <h1 className="text-sm text-gray-500">Nama Posisi</h1>
                      <h1 className="text-xl font-bold text-blue-500">
                        {job.name}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-sm text-gray-500">Penempatan</h1>
                      <h1 className="text-base font-semibold">
                        {job.placement}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-sm text-gray-500">Tayang</h1>
                      <h1 className="text-base font-semibold">
                        {job.created_at}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-sm text-gray-500">Tipe Pekerjaan</h1>
                      <h1 className="text-base font-semibold">{job.type}</h1>
                    </div>
                    <div>
                      <h1 className="text-sm text-gray-500">
                        Status Pekerjaan
                      </h1>
                      <h1 className="text-base font-semibold">{job.status}</h1>
                    </div>
                    <div>
                      <h1 className="text-sm text-gray-500">
                        Fungsi Pekerjaan
                      </h1>
                      <div className="flex flex-wrap justify-start items-center mt-2 space-x-3">
                        <div className="py-1 px-4 bg-yellow-200 rounded-xl">
                          <h1 className="text-sm text-yellow-900">Photoshop</h1>
                        </div>
                        <div className="py-1 px-4 bg-purple-200 rounded-xl">
                          <h1 className="text-sm text-purple-900">Desktop</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-white rounded-xl border border-gray-300">
                    <h1 className="pb-2 text-xl font-semibold">
                      Lowongan Lainnya
                    </h1>
                    <div className="grid grid-cols-1 divide-y divide-gray-300">
                      {company.companyjob.map(
                        (job, index) =>
                          job._id !== jobId && (
                            <Link
                              key={index}
                              href={`/company/${company._id}/${job._id}`}
                              passHref
                            >
                              <a className="py-2">
                                <h1 className="text-base font-semibold">
                                  {job.name}
                                </h1>
                                <div className="flex justify-start items-center mt-1 space-x-2">
                                  <Image
                                    src={TokopediaAvatar}
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="rounded-full"
                                  />
                                  <h1 className="text-sm text-gray-500">
                                    {company.name} • {job.placement}
                                  </h1>
                                </div>
                              </a>
                            </Link>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-50"></div>
        <FootNav />
      </body>
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
                    Selamat!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 whitespace-pre-line">
                      Anda berhasil mengisi lamaran pada{" "}
                      <span className="font-bold">
                        {" "}
                        Application Designer - PT. Tokopedia Indonesia.{" "}
                      </span>
                      Anda dapat memantau proses rekrutmen melalui halaman{" "}
                      <span className="text-blue-500"> Profil Saya.</span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-blue-900 bg-blue-100 rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      OK
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
