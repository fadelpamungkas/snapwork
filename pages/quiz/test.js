import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import { useRouter } from "next/router";
import useUser from "../../lib/useUser";
import useSWR from "swr";

const most = [0, 1, 2, 3];
const least = [0, 1, 2, 3];

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Assessment() {
  const { user } = useUser();
  const router = useRouter();
  const [selectedMost, setSelectedMost] = useState("");
  const [selectedLeast, setSelectedLeast] = useState("");
  const [index, setIndex] = useState(0);
  const [isFinish, setFinish] = useState(false);

  function resetLeast() {
    setSelectedLeast("");
  }

  function resetMost() {
    setSelectedMost("");
  }

  function closeFinish() {
    setFinish(false);
    router.push("/profile");
  }

  const submitAssessment = async () => {
    setTimeout(() => {
      setFinish(true);
    }, 700);
  };

  const goToNext = async () => {
    setTimeout(() => {
      resetMost();
      resetLeast();
      setIndex(index + 1);
    }, 700);
  };

  const validate = async () => {
    if (
      selectedLeast !== "" &&
      selectedMost !== "" &&
      selectedLeast !== selectedMost
    ) {
      if (index === assessment.length - 1) {
        submitAssessment();
      } else {
        goToNext();
      }
    }
  };

  const { data, error } = useSWR(
    `https://snapwork.herokuapp.com/api/assessment`,
    fetcher
  );

  if (!user || user.isLoggedIn === false) {
    return <div>Login first</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const assessment = data?.data.data;

  return (
    <>
      <div className="py-8 w-full min-h-screen bg-gray-100">
        <div className="m-20">
          <div className="p-16 text-black bg-white rounded-xl">
            <div className="w-full">
              <div className="flex justify-start items-center space-x-2 text-sm text-gray-500">
                <h1>Pengembangan Diri</h1>
                <h1>{`> Pemetaan Potensi`}</h1>
                <h1>{`> Quiz`}</h1>
              </div>
              <div className="flex justify-between items-center mt-4 w-full text-xl font-semibold">
                <h1>Personality Style</h1>
                <h1>
                  Soal no: {index + 1} / {assessment.length}
                </h1>
              </div>
              <h1 className="mt-2 text-gray-500">
                Silahkan memilih dua jawaban dari setiap 4 pertanyaan. Satu
                jawaban sesuai dengan kondisi keadaan diri anda (Most), dan satu
                jawaban yang paling tidak menggambarkan diri anda (Least).
              </h1>
              <div className="my-4 w-full h-2.5 bg-gray-100 rounded-full dark:bg-gray-700">
                <div className="w-10 h-2.5 bg-blue-600 rounded-full"></div>
              </div>
              <div className="grid grid-cols-12 gap-4 justify-center items-center py-8">
                <div className="col-span-10">
                  <div className="space-y-4">
                    <h1 className="text-sm text-center">Pernyataan</h1>
                    <div className="py-4 px-8 rounded-lg border border-gray-300">
                      <h1>{assessment[index].item_1}</h1>
                    </div>
                    <div className="py-4 px-8 rounded-lg border border-gray-300">
                      <h1>{assessment[index].item_2}</h1>
                    </div>
                    <div className="py-4 px-8 rounded-lg border border-gray-300">
                      <h1>{assessment[index].item_3}</h1>
                    </div>
                    <div className="py-4 px-8 rounded-lg border border-gray-300">
                      <h1>{assessment[index].item_4}</h1>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <RadioGroup value={selectedMost} onChange={setSelectedMost}>
                    <RadioGroup.Label className="sr-only">
                      Server size
                    </RadioGroup.Label>
                    <div className="flex flex-col justify-center items-center space-y-4">
                      <h1 className="text-sm">Most</h1>
                      {most.map((item, idx) => (
                        <RadioGroup.Option
                          key={idx}
                          value={item}
                          onChange={validate()}
                          className={({ checked }) =>
                            `${
                              checked
                                ? "border border-green-200 bg-green-500 bg-opacity-80 text-white"
                                : "bg-white"
                            }
                    relative flex cursor-pointer rounded-lg border border-gray-300 px-5 py-4 transition duration-150 focus:outline-none`
                          }
                        >
                          {({ checked }) => (
                            <>
                              <div className="flex justify-center items-center w-full">
                                {checked ? (
                                  <>
                                    <CheckIcon className="w-6 h-6 rounded-full" />
                                    {idx == selectedLeast && resetLeast()}
                                  </>
                                ) : (
                                  <CheckIcon className="w-6 h-6 bg-gray-200 rounded-full" />
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="col-span-1">
                  <RadioGroup value={selectedLeast} onChange={setSelectedLeast}>
                    <RadioGroup.Label className="sr-only">
                      Server size
                    </RadioGroup.Label>
                    <div className="flex flex-col justify-center items-center space-y-4">
                      <h1 className="text-sm">Least</h1>
                      {least.map((item, idx) => (
                        <RadioGroup.Option
                          key={idx}
                          value={item}
                          onChange={validate()}
                          className={({ checked }) =>
                            `${
                              checked
                                ? "border border-green-200 bg-green-500 bg-opacity-80 text-white"
                                : "bg-white"
                            }
                    relative flex cursor-pointer rounded-lg border border-gray-300 px-5 py-4 transition duration-150 focus:outline-none`
                          }
                        >
                          {({ checked }) => (
                            <>
                              <div className="flex justify-center items-center w-full">
                                {checked ? (
                                  <>
                                    <CheckIcon className="w-6 h-6 rounded-full" />
                                    {idx == selectedMost && resetMost()}
                                  </>
                                ) : (
                                  <CheckIcon className="w-6 h-6 bg-gray-200 rounded-full" />
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isFinish} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeFinish}>
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
                      Anda sudah menyelesaikan Tes Kepribadian. Hasil tes dapat
                      dilihat pada halaman
                      <span className="font-bold">
                        {` Profil > Pengembangan Diri`}
                      </span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-blue-900 bg-blue-100 rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeFinish}
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

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
