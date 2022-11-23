import Image from "next/image";
import { Tab } from "@headlessui/react";
import { CogIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import EditButton from "../public/edit.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function DatadiriTab({ person }) {
  const [edit, setEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [ktpFile, setKtpFile] = useState({ name: "-", size: "0" });
  const [ijazahFile, setIjazahFile] = useState({ name: "-", size: "0" });
  const [skckFile, setSKCKFile] = useState({ name: "-", size: "0" });
  const [cvFile, setCVFile] = useState({ name: "-", size: "0" });
  const [certFile, setCertFile] = useState({ name: "-", size: "0" });

  const tabItem = [
    {
      id: 1,
      name: "Biodata",
    },
    {
      id: 2,
      name: "Dokumen",
    },
    {
      id: 3,
      name: "Portofolio",
    },
  ];

  function closeModal() {
    setIsOpen(false);
    setEdit(false);
  }

  function closeModalAndSave() {
    setIsOpen(false);
    setEdit(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://snapwork.herokuapp.com/api/person", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: person._id,
        name: person.name,
        email: person.email,
        birth: event.target.birth.value,
        gender: event.target.gender.value,
        religion: event.target.religion.value,
        marriage: event.target.marriage.value,
        hobby: event.target.hobby.value,
        telephone: event.target.telephone.value,
        twitter: event.target.twitter.value,
        linkedin: event.target.linkedin.value,
        address: event.target.address.value,
        city: event.target.city.value,
        province: event.target.province.value,
        state: event.target.state.value,
        about: event.target.about.value,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (data === 200) {
      alert("Berhasil diubah");
      setEdit(false);
    } else {
      alert("Fail to register, please contact for any problems");
      setEdit(false);
    }
  };

  return (
    <>
      <Tab.Group vertical as="div" className="grid grid-cols-5">
        <Tab.List className="flex flex-col col-span-1 justify-start items-start py-4 space-y-2 text-sm border-t border-r">
          {tabItem.map((item) => (
            <Tab
              key={item}
              className={({ selected }) =>
                classNames(
                  "py-1 pl-8 text-sm font-medium leading-5 text-black",
                  "",
                  selected
                    ? "border-l-4 border-l-blue-300 "
                    : "border-l-blue-50 text-black hover:border-l-2"
                )
              }
            >
              {item.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="col-span-4 py-2 px-8 border-t">
          <Tab.Panel>
            <form id="formEditDatadiri" onSubmit={handleSubmit}>
              <div>
                <div className="grid grid-cols-1 divide-y divide-gray-300">
                  <div className="flex justify-between items-center py-2">
                    <h1 className="text-xl font-semibold">Biodata</h1>
                    {edit ? (
                      <button
                        form="formEditDatadiri"
                        type="submit"
                        className="inline-flex justify-center items-center space-x-1 text-base font-medium text-blue-500 hover:text-blue-600"
                      >
                        Simpan
                      </button>
                    ) : (
                      <div onClick={() => setEdit(true)}>
                        <EditButton className="cursor-pointer hover:stroke-blue-500" />
                      </div>
                    )}
                  </div>
                  <div className="py-2">
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <h1 className="text-base font-semibold">
                        Informasi Umum
                      </h1>
                    </div>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Nama Lengkap</h1>
                        <h1>:</h1>
                      </div>
                      <div className="col-span-2">
                        <h1>{person.name}</h1>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Tempat, Tanggal Lahir</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            id="birth"
                            name="birth"
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="text"
                            defaultValue={person.birth}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.birth}</h1>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Jenis Kelamin</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            id="gender"
                            name="gender"
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="text"
                            defaultValue={person.gender}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.gender}</h1>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Agama</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            id="religion"
                            name="religion"
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="text"
                            defaultValue={person.religion}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.religion}</h1>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Status Pernikahan</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            id="marriage"
                            name="marriage"
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="text"
                            defaultValue={person?.marriage}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.marriage}</h1>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Hobi</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            id="hobby"
                            name="hobby"
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="text"
                            defaultValue={person.hobby}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.hobby}</h1>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="py-2">
                    <h1 className="text-base font-semibold">
                      Informasi Kontak
                    </h1>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Nomor Ponsel</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            id="telephone"
                            name="telephone"
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="tel"
                            defaultValue={person.telephone}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.telephone}</h1>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Email</h1>
                        <h1>:</h1>
                      </div>
                      <div className="col-span-2">
                        <h1>{person.email}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <h1 className="text-base font-semibold">Media Sosial</h1>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Twitter</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            id="twitter"
                            name="twitter"
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="tel"
                            defaultValue={person.twitter}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.twitter}</h1>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Linkedin</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            id="linkedin"
                            name="linkedin"
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="tel"
                            defaultValue={person.linkedin}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.linkedin}</h1>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="py-2">
                    <h1 className="text-base font-semibold">
                      Domisili Sekarang
                    </h1>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Alamat</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            id="address"
                            name="address"
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="tel"
                            defaultValue={person.address}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.address}</h1>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Kota</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            id="city"
                            name="city"
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="tel"
                            defaultValue={person.city}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.city}</h1>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Provinsi</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            id="province"
                            name="province"
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="tel"
                            defaultValue={person.province}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.province}</h1>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Negara</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            id="state"
                            name="state"
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="tel"
                            defaultValue={person.state}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.state}</h1>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="py-2">
                    <h1 className="text-base font-semibold">
                      Pendidikan Terakhir
                    </h1>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Twitter</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="tel"
                            defaultValue={person.twitter}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.twitter}</h1>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Linkedin</h1>
                        <h1>:</h1>
                      </div>
                      {edit ? (
                        <div className="col-span-2">
                          <input
                            className="py-2 px-2.5 w-full text-sm leading-none placeholder-gray-400 text-gray-800 rounded-lg border border-gray-500 shadow-sm transition duration-150"
                            type="tel"
                            defaultValue={person.linkedin}
                          />
                        </div>
                      ) : (
                        <div className="col-span-2">
                          <h1>{person.linkedin}</h1>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="py-2">
                    <h1 className="text-base font-semibold">Profil Singkat</h1>
                    <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                      <div className="flex col-span-1 justify-between items-start">
                        <h1>Deskripsi Diri</h1>
                        <h1>:</h1>
                      </div>
                      <div className="col-span-2">
                        {edit ? (
                          <textarea
                            id="about"
                            name="about"
                            className="py-1 px-2 w-full h-36 rounded border border-gray-500"
                            type="text"
                            defaultValue={person.about}
                          />
                        ) : (
                          <h1 className="whitespace-pre-line">
                            {person.about}
                          </h1>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid grid-cols-1 divide-y divide-gray-300">
                <div className="py-2">
                  <h1 className="pb-2 text-xl font-semibold">Dokumen</h1>
                  <p className="pb-2 text-sm">
                    Informasi berikut ini bersifat opsional, silakan diisi untuk
                    kepentingan lamar online yang mewajibkan syarat-syarat
                    dokumen harus diunggah.
                  </p>
                </div>
                <div className="py-2">
                  <div className="grid grid-cols-5 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="col-span-3">
                      <div className="grid grid-cols-4 justify-start items-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">
                          KTP
                        </h1>
                        <div className="col-span-3">
                          <h1 className="overflow-auto text-sm font-semibold">
                            {ktpFile.name}
                          </h1>
                          <p className="text-sm">{ktpFile.size} Bytes</p>
                        </div>
                      </div>
                      <ul className="text-xs list-disc list-inside">
                        <li>
                          Hanya file jpg, jpeg, png dan pdf yang diijinkan
                        </li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="flex col-span-2 justify-center items-center m-auto space-x-4">
                      <button
                        onClick={() => setKtpFile({ name: "-", size: "0" })}
                        className="py-1 px-5 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                      >
                        Hapus
                      </button>
                      <label
                        htmlFor="ktp"
                        className="py-1 px-5 text-sm text-white bg-blue-500 rounded transition duration-150 cursor-pointer hover:bg-blue-600"
                      >
                        <h1>Unggah</h1>
                        <input
                          id="ktp"
                          name="ktp"
                          type="file"
                          onChange={() =>
                            setKtpFile({
                              name: document.getElementById("ktp").files[0]
                                .name,
                              size: document.getElementById("ktp").files[0]
                                .size,
                            })
                          }
                          accept="image/*"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="grid grid-cols-5 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="col-span-3">
                      <div className="grid grid-cols-4 justify-start items-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">
                          Ijazah
                        </h1>
                        <div className="col-span-3">
                          <h1 className="overflow-auto text-sm font-semibold">
                            {ijazahFile.name}
                          </h1>
                          <p className="text-sm">{ijazahFile.size} Bytes</p>
                        </div>
                      </div>
                      <ul className="text-xs list-disc list-inside">
                        <li>
                          Hanya file jpg, jpeg, png dan pdf yang diijinkan
                        </li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="flex col-span-2 justify-center items-center m-auto space-x-4">
                      <button
                        onClick={() => setIjazahFile({ name: "-", size: "0" })}
                        className="py-1 px-5 text-sm text-white bg-red-500 rounded"
                      >
                        Hapus
                      </button>
                      <label
                        htmlFor="ijazah"
                        className="py-1 px-5 text-sm text-white bg-blue-500 rounded transition duration-150 cursor-pointer hover:bg-blue-600"
                      >
                        <h1>Unggah</h1>
                        <input
                          id="ijazah"
                          name="ijazah"
                          type="file"
                          onChange={() =>
                            setIjazahFile({
                              name: document.getElementById("ijazah").files[0]
                                .name,
                              size: document.getElementById("ijazah").files[0]
                                .size,
                            })
                          }
                          accept="image/*"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="grid grid-cols-5 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="col-span-3">
                      <div className="grid grid-cols-4 justify-start items-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">
                          SKCK
                        </h1>
                        <div className="col-span-3">
                          <h1 className="overflow-auto text-sm font-semibold">
                            {skckFile.name}
                          </h1>
                          <p className="text-sm">{skckFile.size} Bytes</p>
                        </div>
                      </div>
                      <ul className="text-xs list-disc list-inside">
                        <li>
                          Hanya file jpg, jpeg, png dan pdf yang diijinkan
                        </li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="flex col-span-2 justify-center items-center m-auto space-x-4">
                      <button
                        onClick={() => setSKCKFile({ name: "-", size: "0" })}
                        className="py-1 px-5 text-sm text-white bg-red-500 rounded"
                      >
                        Hapus
                      </button>
                      <label
                        htmlFor="skck"
                        className="py-1 px-5 text-sm text-white bg-blue-500 rounded transition duration-150 cursor-pointer hover:bg-blue-600"
                      >
                        <h1>Unggah</h1>
                        <input
                          id="skck"
                          name="skck"
                          type="file"
                          onChange={() =>
                            setSKCKFile({
                              name: document.getElementById("skck").files[0]
                                .name,
                              size: document.getElementById("skck").files[0]
                                .size,
                            })
                          }
                          accept="image/*"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="grid grid-cols-5 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="col-span-3">
                      <div className="grid grid-cols-4 justify-start items-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">CV</h1>
                        <div className="col-span-3">
                          <h1 className="overflow-auto text-sm font-semibold">
                            {cvFile.name}
                          </h1>
                          <p className="text-sm">{cvFile.size} Bytes</p>
                        </div>
                      </div>
                      <ul className="text-xs list-disc list-inside">
                        <li>
                          Hanya file jpg, jpeg, png dan pdf yang diijinkan
                        </li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="flex col-span-2 justify-center items-center m-auto space-x-4">
                      <button
                        onClick={() => setCVFile({ name: "-", size: "0" })}
                        className="py-1 px-5 text-sm text-white bg-red-500 rounded"
                      >
                        Hapus
                      </button>
                      <label
                        htmlFor="cv"
                        className="py-1 px-5 text-sm text-white bg-blue-500 rounded transition duration-150 cursor-pointer hover:bg-blue-600"
                      >
                        <h1>Unggah</h1>
                        <input
                          id="cv"
                          name="cv"
                          type="file"
                          onChange={() =>
                            setCVFile({
                              name: document.getElementById("cv").files[0].name,
                              size: document.getElementById("cv").files[0].size,
                            })
                          }
                          accept="image/*"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 divide-y divide-gray-300">
                <div className="py-2">
                  <h1 className="pb-2 text-xl font-semibold">
                    Dokumen Pendukung
                  </h1>
                  <p className="pb-2 text-sm">
                    Informasi berikut ini bersifat opsional, silakan diisi untuk
                    kepentingan lamar online yang mewajibkan syarat-syarat
                    dokumen harus diunggah.
                  </p>
                </div>
                <div className="py-2">
                  <div className="grid grid-cols-5 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="col-span-3">
                      <div className="grid grid-cols-4 justify-start items-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">
                          Sertifikat
                        </h1>
                        <div className="col-span-3">
                          <h1 className="overflow-auto text-sm font-semibold">
                            {certFile.name}
                          </h1>
                          <p className="text-sm">{certFile.size} Bytes</p>
                        </div>
                      </div>
                      <ul className="text-xs list-disc list-inside">
                        <li>
                          Hanya file jpg, jpeg, png dan pdf yang diijinkan
                        </li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="flex col-span-2 justify-center items-center m-auto space-x-4">
                      <button
                        onClick={() => setCertFile({ name: "-", size: "0" })}
                        className="py-1 px-5 text-sm text-white bg-red-500 rounded"
                      >
                        Hapus
                      </button>
                      <label
                        htmlFor="cert"
                        className="py-1 px-5 text-sm text-white bg-blue-500 rounded transition duration-150 cursor-pointer hover:bg-blue-600"
                      >
                        <h1>Unggah</h1>
                        <input
                          id="cert"
                          name="cert"
                          type="file"
                          onChange={() =>
                            setCertFile({
                              name: document.getElementById("cert").files[0]
                                .name,
                              size: document.getElementById("cert").files[0]
                                .size,
                            })
                          }
                          accept="image/*"
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid grid-cols-1 divide-y divide-gray-300">
                <div className="py-2">
                  <h1 className="pb-2 text-xl font-semibold">Portofolio</h1>
                  <p className="pb-2 text-sm">
                    Informasi berikut ini bersifat opsional, silakan diisi untuk
                    kepentingan lamar online yang mewajibkan syarat-syarat
                    dokumen harus diunggah.
                  </p>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
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
                    Simpan
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 whitespace-pre-line">
                      Semua Perubahan akan disimpan dan tidak dapat
                      dikembalikan.
                    </p>
                  </div>
                  <div className="mt-4 space-x-4">
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-blue-900 bg-blue-100 rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModalAndSave}
                    >
                      Simpan
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-md border border-transparent hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Batal
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
