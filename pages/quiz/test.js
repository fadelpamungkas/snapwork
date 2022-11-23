import Link from "next/link";
import HeadNav from "../../components/HeadNav";
import FootNav from "../../components/FootNav";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const most = [0, 1, 2, 3];
const least = [0, 1, 2, 3];

const pernyataan = [
  {
    text: "Santai, mudah setuju",
  },
  {
    text: "Percaya pada orang lain",
  },
  {
    text: "Sang petualang, pengambil resiko",
  },
  {
    text: "Toleran, menghormati",
  },
];

export default function Test() {
  const [selectedMost, setSelectedMost] = useState("");
  const [selectedLeast, setSelectedLeast] = useState("");

  function resetLeast() {
    setSelectedLeast("");
  }

  function resetMost() {
    setSelectedMost("");
  }

  return (
    <>
      <div className="py-8 w-full min-h-screen bg-gray-100">
        <HeadNav />
        <div className="m-40">
          <div className="p-16 text-black bg-white rounded-xl">
            <div className="p-8 w-full">
              <div className="flex justify-start items-center space-x-2 text-sm text-gray-500">
                <h1>Pengembangan Diri</h1>
                <h1>{`> Pemetaan Potensi`}</h1>
                <h1>{`> Quiz`}</h1>
              </div>
              <div className="flex justify-between items-center mt-4 w-full text-xl font-semibold">
                <h1>Personality Style</h1>
                <h1>Soal no:</h1>
              </div>
              <h1 className="mt-2 text-gray-500">
                Silahkan memilih dua jawaban dari setiap 4 pertanyaan. Satu
                jawaban sesuai dengan kondisi keadaan diri anda (Most), dan satu
                jawaban yang paling tidak menggambarkan diri anda (Least).
              </h1>
              <div className="grid grid-cols-12 gap-4 justify-center items-center py-8">
                <div className="col-span-10">
                  <div className="space-y-4">
                    <h1 className="text-sm text-center">Pernyataan</h1>
                    {pernyataan.map((item, index) => (
                      <div
                        key={index}
                        className="py-4 px-8 rounded-lg border border-gray-300"
                      >
                        <h1>{item.text}</h1>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-1">
                  <RadioGroup value={selectedMost} onChange={setSelectedMost}>
                    <RadioGroup.Label className="sr-only">
                      Server size
                    </RadioGroup.Label>
                    <div className="flex flex-col justify-center items-center space-y-4">
                      <h1 className="text-sm">Most</h1>
                      {most.map((item, index) => (
                        <RadioGroup.Option
                          key={index}
                          value={item}
                          className={({ active, checked }) =>
                            `${
                              active
                                ? "border border-green-200"
                                : "border border-gray-300"
                            }
                  ${
                    checked
                      ? "border border-green-200 bg-green-500 bg-opacity-80 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 transition duration-150 focus:outline-none`
                          }
                        >
                          {({ checked }) => (
                            <>
                              <div className="flex justify-center items-center w-full">
                                {checked ? (
                                  <>
                                    <CheckIcon className="w-6 h-6 rounded-full" />
                                    {index == selectedLeast && resetLeast()}
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
                      {least.map((item, index) => (
                        <RadioGroup.Option
                          key={index}
                          value={item}
                          className={({ active, checked }) =>
                            `${
                              active
                                ? "border border-green-200"
                                : "border border-gray-300"
                            }
                  ${
                    checked
                      ? "border border-green-200 bg-green-500 bg-opacity-80 text-white"
                      : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 transition duration-150 focus:outline-none`
                          }
                        >
                          {({ checked }) => (
                            <>
                              <div className="flex justify-center items-center w-full">
                                {checked ? (
                                  <>
                                    <CheckIcon className="w-6 h-6 rounded-full" />
                                    {index == selectedMost && resetMost()}
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
        <FootNav />
      </div>
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
