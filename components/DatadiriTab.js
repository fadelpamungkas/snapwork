import { Tab } from "@headlessui/react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import EditButton from "../public/edit.svg";
import UploadLogo from "../public/UploadLogo.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function DatadiriTab({ person }) {
  const [edit, setEdit] = useState(false);
  const [isOpenPortfolioDetail, setIsOpenPortfolioDetail] = useState(false);
  const [isOpenDocumentDetail, setIsOpenDocumentDetail] = useState(false);
  const [isOpenBiodataDetail, setIsOpenBiodataDetail] = useState(false);
  const [ktpFile, setKtpFile] = useState({ name: "", size: "0" });
  const [ijazahFile, setIjazahFile] = useState({ name: "", size: "0" });
  const [skckFile, setSKCKFile] = useState({ name: "", size: "0" });
  const [cvFile, setCVFile] = useState({ name: "", size: "0" });
  const [certFile, setCertFile] = useState({ name: "", size: "0" });

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

  function closePortfolioModal() {
    setIsOpenPortfolioDetail(false);
  }

  function openPortfolioModal() {
    setIsOpenPortfolioDetail(true);
  }

  function closeDocumentModal() {
    setIsOpenDocumentDetail(false);
  }

  function openDocumentModal() {
    setIsOpenDocumentDetail(true);
  }

  function openBiodataModal() {
    setIsOpenBiodataDetail(true);
  }

  function closeBiodataModal() {
    setIsOpenBiodataDetail(false);
  }

  const handleSubmitBiodata = async (event) => {
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
        education: {
          s1: event.target.s1.value,
          s1datein: event.target.s1datein.value,
          s1dateout: event.target.s1dateout.value,
          s1major: event.target.s1major.value,
          sma: event.target.sma.value,
          smadatein: event.target.smadatein.value,
          smadateout: event.target.smadateout.value,
          smamajor: event.target.smamajor.value,
        },
      }),
    });
    const data = await response.json();
    console.log(data);

    if (data === 200) {
      alert("Berhasil diubah");
      closeBiodataModal();
    } else {
      alert("Fail to edit, please contact for any problems");
      closeBiodataModal();
    }
  };
  const handleSubmitDocument = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/person/document",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: person._id,
          ktpname: event.target.ktpname.value,
          ijazahname: event.target.ijazahname.value,
          skckname: event.target.skckname.value,
          cvname: event.target.cvname.value,
          certificatename: event.target.certificatename.value,
        }),
      }
    );
    const data = await response.json();
    console.log(data);

    if (data === 200) {
      alert("Berhasil diubah");
      closeDocumentModal();
    } else {
      alert("Fail to edit, please contact for any problems");
      closeDocumentModal();
    }
  };

  const handleSubmitPortfolio = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/person/portfolio",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: person._id,
          link: event.target.link.value,
          description: event.target.description.value,
        }),
      }
    );
    const data = await response.json();
    console.log(data);

    if (data === 200) {
      alert("Berhasil diubah");
      closePortfolioModal();
    } else {
      alert("Fail to edit, please contact for any problems");
      closePortfolioModal();
    }
  };

  function BiodataFormDialog({ item }) {
    return (
      <>
        <body className="w-full text-gray-900">
          <div className="flex justify-center items-center py-2 px-4 space-x-4">
            <h1 className="text-2xl font-semibold text-red-500">Biodata</h1>
          </div>
          <div className="px-2 mx-auto w-full">
            <form id="formEditDatadiri" onSubmit={handleSubmitBiodata}>
              <div className="py-4 px-8 space-y-4 rounded-xl">
                <div className="py-2">
                  <div className="grid grid-cols-2 space-y-4 text-sm">
                    <div className="pr-12 mt-4 space-y-4">
                      <div className="space-y-2">
                        <h1>Nama Lengkap</h1>
                        <input
                          required
                          id="name"
                          type="text"
                          name="name"
                          value={item.name}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Masukkan Nama Lengkap"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Tempat, Tanggal Lahir</h1>
                        <input
                          required
                          id="birth"
                          type="text"
                          name="birth"
                          defaultValue={item.birth}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Masukkan Tempat & Tanggal Lahir"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="gender">Jenis Kelamin</label>
                        <select
                          required
                          name="gender"
                          id="gender"
                          defaultValue={item.gender}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        >
                          <option value="Laki-Laki">Laki-Laki</option>
                          <option value="Perempuan">Perempuan</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="religion">Agama</label>
                        <select
                          required
                          name="religion"
                          id="religion"
                          defaultValue={item.religion}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        >
                          <option value="Islam">Islam</option>
                          <option value="Protestan">Protestan</option>
                          <option value="Katolik">Katolik</option>
                          <option value="Buddha">Buddha</option>
                          <option value="Khonghucu">Khonghucu</option>
                          <option value="Hindu">Hindu</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="marriage">Status Pernikahan</label>
                        <select
                          required
                          name="marriage"
                          id="marriage"
                          defaultValue={item.marriage}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        >
                          <option value="Lajang">Lajang</option>
                          <option value="Kawin">Kawin</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <h1>Hobi</h1>
                        <input
                          required
                          id="hobby"
                          type="text"
                          name="hobby"
                          defaultValue={item.hobby}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Masukkan Hobi"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Nomor Ponsel</h1>
                        <input
                          required
                          id="telephone"
                          type="number"
                          name="telephone"
                          minLength="7"
                          defaultValue={item.telephone}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Masukkan Nomor Telepon"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Email</h1>
                        <input
                          required
                          id="email"
                          type="email"
                          name="email"
                          value={item.email}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Masukkan Email"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Alamat</h1>
                        <input
                          required
                          id="address"
                          type="text"
                          name="address"
                          defaultValue={item.address}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Masukkan Alamat"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Kota</h1>
                        <input
                          required
                          id="city"
                          type="text"
                          name="city"
                          defaultValue={item.city}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Masukkan Kota"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Provinsi</h1>
                        <input
                          required
                          id="province"
                          type="text"
                          name="province"
                          defaultValue={item.province}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Masukkan Provinsi"
                        />
                      </div>
                    </div>
                    <div className="pl-12 space-y-4">
                      <div className="space-y-2">
                        <h1>Negara</h1>
                        <input
                          required
                          id="state"
                          type="text"
                          name="state"
                          defaultValue={item.state}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Masukkan Negara"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>S1</h1>
                        <input
                          required
                          id="s1"
                          type="text"
                          name="s1"
                          defaultValue={item.education?.s1}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Masukkan Universitas"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Tanggal Masuk</h1>
                        <input
                          required
                          id="s1datein"
                          type="month"
                          name="s1datein"
                          defaultValue={item.education?.s1datein}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Pilih Tanggal Masuk"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Tanggal Kelulusan</h1>
                        <input
                          required
                          id="s1dateout"
                          type="month"
                          name="s1dateout"
                          defaultValue={item.education?.s1dateout}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Pilih Tanggal Kelulusan"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="s1major">Jurusan</label>
                        <select
                          required
                          name="s1major"
                          id="s1majjor"
                          defaultValue={item.education?.s1major}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        >
                          <option value="Teknik Informatika">
                            Teknik Informatika
                          </option>
                          <option value="Teknik Industri">
                            Teknik Industri
                          </option>
                          <option value="Teknik Kimia">Teknik Kimia</option>
                          <option value="Teknik Elektro">Teknik Elektro</option>
                          <option value="Teknik Mesin">Teknik Mesin</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <h1>SMA</h1>
                        <input
                          required
                          id="sma"
                          type="text"
                          name="sma"
                          defaultValue={item.education?.sma}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Masukkan SMA"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Tanggal Masuk</h1>
                        <input
                          required
                          id="smadatein"
                          type="month"
                          name="smadatein"
                          defaultValue={item.education?.smadatein}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Masukkan Tanggal Masuk"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Tanggal Kelulusan</h1>
                        <input
                          required
                          id="smadateout"
                          type="month"
                          name="smadateout"
                          defaultValue={item.education?.smadateout}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Masukkan Tanggal Kelulusan"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="smamajor">Konsentrasi</label>
                        <select
                          required
                          name="smamajor"
                          id="smamajor"
                          defaultValue={item.education?.smamajor}
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                        >
                          <option value="IPA">IPA</option>
                          <option value="IPS">IPS</option>
                          <option value="Bahasa">Bahasa</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <h1>Twitter</h1>
                        <div className="flex justify-center items-center">
                          <input
                            required
                            type="text"
                            value="www."
                            disabled
                            className="py-3.5 pr-1 pl-4 w-16 text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-l-lg border border-r-0 shadow-sm transition duration-150"
                          />
                          <input
                            required
                            id="twitter"
                            type="text"
                            name="twitter"
                            defaultValue={item.twitter}
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-r-lg border border-l-0 shadow-sm transition duration-150"
                            placeholder="Masukkan Link Twitter"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h1>Linkedin</h1>
                        <div className="flex justify-center items-center">
                          <input
                            required
                            type="text"
                            value="www."
                            disabled
                            className="py-3.5 pr-1 pl-4 w-16 text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-l-lg border border-r-0 shadow-sm transition duration-150"
                          />
                          <input
                            required
                            id="linkedin"
                            type="text"
                            name="linkedin"
                            defaultValue={item.linkedin}
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-r-lg border border-l-0 shadow-sm transition duration-150"
                            placeholder="Masukkan Link Linkedin"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <h1>Deskripsi Diri</h1>
                  <textarea
                    required
                    id="about"
                    type="text"
                    name="about"
                    defaultValue={item.about}
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150 min-h-fit"
                    placeholder="Masukkan Deskripsi Diri"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4 space-x-8">
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  onClick={() => closeBiodataModal()}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </body>
      </>
    );
  }
  function DocumentFormDialog({ document }) {
    return (
      <>
        <body className="w-full text-gray-900">
          <div className="flex justify-center items-center py-2 px-4 space-x-4">
            <h1 className="text-2xl font-semibold text-red-500">Dokumen</h1>
          </div>
          <div className="px-2 mx-auto w-full">
            <form id="formEditDocument" onSubmit={handleSubmitDocument}>
              <div className="py-4 px-8 space-y-4 rounded-xl">
                <div className="py-2">
                  <div className="grid grid-cols-5 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="col-span-4">
                      <div className="grid grid-cols-4 justify-start items-center mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">
                          KTP
                        </h1>
                        <div className="col-span-3">
                          <input
                            required
                            id="ktpname"
                            name="ktpname"
                            type="text"
                            value={
                              ktpFile.name
                                ? ktpFile.name
                                : person?.document?.ktpname
                            }
                            className="overflow-auto w-full text-sm font-semibold bg-white focus:outline-none"
                          />
                          <p>
                            {ktpFile.size} Bytes
                          </p>
                        </div>
                      </div>
                      <ul className="text-xs list-disc list-inside">
                        <li>
                          Hanya file jpg, jpeg, png dan pdf yang diijinkan
                        </li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="flex col-span-1 justify-center items-center m-auto space-x-4">
                      <label
                        htmlFor="ktp"
                        className="py-1.5 px-3 text-sm text-white bg-blue-500 rounded transition duration-150 cursor-pointer hover:bg-blue-600"
                      >
                        <div className="flex space-x-2">
                          <UploadLogo />
                          <h1>Unggah</h1>
                        </div>
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
                    <div className="col-span-4">
                      <div className="grid grid-cols-4 justify-start items-center mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">
                          Ijazah
                        </h1>
                        <div className="col-span-3">
                          <input
                            required
                            id="ijazahname"
                            name="ijazahname"
                            type="text"
                            value={
                              ijazahFile.name
                                ? ijazahFile.name
                                : person?.document?.ijazahname
                            }
                            className="overflow-auto w-full text-sm font-semibold bg-white focus:outline-none"
                          />
                          <p>
                            {ijazahFile.size} Bytes
                          </p>
                        </div>
                      </div>
                      <ul className="text-xs list-disc list-inside">
                        <li>
                          Hanya file jpg, jpeg, png dan pdf yang diijinkan
                        </li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="flex col-span-1 justify-center items-center m-auto space-x-4">
                      <label
                        htmlFor="ijazah"
                        className="py-1.5 px-3 text-sm text-white bg-blue-500 rounded transition duration-150 cursor-pointer hover:bg-blue-600"
                      >
                        <div className="flex space-x-2">
                          <UploadLogo />
                          <h1>Unggah</h1>
                        </div>
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
                    <div className="col-span-4">
                      <div className="grid grid-cols-4 justify-start items-center mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">
                          SKCK
                        </h1>
                        <div className="col-span-3">
                          <input
                            required
                            id="skckname"
                            name="skckname"
                            type="text"
                            value={
                              skckFile.name
                                ? skckFile.name
                                : person?.document?.skckname
                            }
                            className="overflow-auto w-full text-sm font-semibold bg-white focus:outline-none"
                          />
                          <p>
                            {skckFile.size} Bytes
                          </p>
                        </div>
                      </div>
                      <ul className="text-xs list-disc list-inside">
                        <li>
                          Hanya file jpg, jpeg, png dan pdf yang diijinkan
                        </li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="flex col-span-1 justify-center items-center m-auto space-x-4">
                      <label
                        htmlFor="skck"
                        className="py-1.5 px-3 text-sm text-white bg-blue-500 rounded transition duration-150 cursor-pointer hover:bg-blue-600"
                      >
                        <div className="flex space-x-2">
                          <UploadLogo />
                          <h1>Unggah</h1>
                        </div>
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
                    <div className="col-span-4">
                      <div className="grid grid-cols-4 justify-start items-center mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">CV</h1>
                        <div className="col-span-3">
                          <input
                            required
                            id="cvname"
                            name="cvname"
                            type="text"
                            value={
                              cvFile.name
                                ? cvFile.name
                                : person?.document?.cvname
                            }
                            className="overflow-auto w-full text-sm font-semibold bg-white focus:outline-none"
                          />
                          <p>
                            {cvFile.size} Bytes
                          </p>
                        </div>
                      </div>
                      <ul className="text-xs list-disc list-inside">
                        <li>
                          Hanya file jpg, jpeg, png dan pdf yang diijinkan
                        </li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="flex col-span-1 justify-center items-center m-auto space-x-4">
                      <label
                        htmlFor="cv"
                        className="py-1.5 px-3 text-sm text-white bg-blue-500 rounded transition duration-150 cursor-pointer hover:bg-blue-600"
                      >
                        <div className="flex space-x-2">
                          <UploadLogo />
                          <h1>Unggah</h1>
                        </div>
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
                <div className="py-2">
                  <div className="grid grid-cols-5 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="col-span-4">
                      <div className="grid grid-cols-4 justify-start items-center mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">
                          Sertifikat
                        </h1>
                        <div className="col-span-3">
                          <input
                            required
                            id="certificatename"
                            name="certificatename"
                            type="text"
                            value={
                              certFile.name
                                ? certFile.name
                                : person?.document?.certificatename
                            }
                            className="overflow-auto w-full text-sm font-semibold bg-white focus:outline-none"
                          />
                          <p>
                            {certFile.size} Bytes
                          </p>
                        </div>
                      </div>
                      <ul className="text-xs list-disc list-inside">
                        <li>
                          Hanya file jpg, jpeg, png dan pdf yang diijinkan
                        </li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="flex col-span-1 justify-center items-center m-auto space-x-4">
                      <label
                        htmlFor="cert"
                        className="py-1.5 px-3 text-sm text-white bg-blue-500 rounded transition duration-150 cursor-pointer hover:bg-blue-600"
                      >
                        <div className="flex space-x-2">
                          <UploadLogo />
                          <h1>Unggah</h1>
                        </div>
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
              <div className="flex justify-end mt-4 space-x-8">
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  onClick={() => closeDocumentModal()}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </body>
      </>
    );
  }

  function PortfolioFormDialog({ portfolio }) {
    return (
      <>
        <body className="w-full text-gray-900">
          <div className="flex justify-center items-center py-2 px-4 space-x-4">
            <h1 className="text-2xl font-semibold text-red-500">Portofolio</h1>
          </div>
          <div className="px-2 mx-auto w-full">
            <form id="formEditPortfolio" onSubmit={handleSubmitPortfolio}>
              <div className="py-4 px-8 space-y-4 rounded-xl">
                <div className="space-y-2">
                  <h1>Link</h1>
                  <input
                    required
                    id="link"
                    type="text"
                    name="link"
                    defaultValue={portfolio?.link}
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Masukkan link portofolio"
                  />
                </div>
                <div className="space-y-2 text-sm">
                  <h1>Deskripsi Diri</h1>
                  <textarea
                    required
                    id="description"
                    type="text"
                    name="description"
                    defaultValue={portfolio?.description}
                    className="py-3.5 px-4 w-full h-40 text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Deskripsi portofolio"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4 space-x-8">
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-8 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                  onClick={() => closePortfolioModal()}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-8 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </body>
      </>
    );
  }

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
            <div>
              <div className="grid grid-cols-1 divide-y divide-gray-300">
                <div className="flex justify-between items-center py-2">
                  <h1 className="text-xl font-semibold">Biodata</h1>
                  <div onClick={() => openBiodataModal()}>
                    <EditButton className="cursor-pointer hover:stroke-blue-500" />
                  </div>
                </div>
                <div className="py-2">
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <h1 className="text-base font-semibold">Informasi Umum</h1>
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
                    <div className="col-span-2">
                      <h1>{person.birth}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Jenis Kelamin</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.gender}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Agama</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.religion}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Status Pernikahan</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.marriage}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Hobi</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.hobby}</h1>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <h1 className="text-base font-semibold">Informasi Kontak</h1>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Nomor Ponsel</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.telephone}</h1>
                    </div>
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
                    <div className="col-span-2">
                      <h1>{person.twitter}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Linkedin</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.linkedin}</h1>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <h1 className="text-base font-semibold">Domisili Sekarang</h1>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Alamat</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.address}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Kota</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.city}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Provinsi</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.province}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Negara</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.state}</h1>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <h1 className="text-base font-semibold">
                    Pendidikan Terakhir
                  </h1>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>S1</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.education?.s1}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Tanggal Masuk</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.education?.s1datein}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Tanggal Kelulusan</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.education?.s1dateout}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Jurusan</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.education?.s1major}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start mt-8 mb-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>SMA</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.education?.sma}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Tanggal Masuk</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.education?.smadatein}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Tanggal Kelulusan</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.education?.smadateout}</h1>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="flex col-span-1 justify-between items-start">
                      <h1>Konsentrasi</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>{person.education?.smamajor}</h1>
                    </div>
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
                      <h1 className="whitespace-pre-line">{person.about}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid grid-cols-1 divide-y divide-gray-300">
                <div className="flex justify-between items-center py-2">
                  <h1 className="text-xl font-semibold">Dokumen</h1>
                  <div onClick={() => openDocumentModal()}>
                    <EditButton className="cursor-pointer hover:stroke-blue-500" />
                  </div>
                </div>
                <div className="py-2">
                  <div className="justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="w-full">
                      <div className="grid grid-cols-5 justify-start items-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">
                          KTP
                        </h1>
                        <div className="col-span-4 space-y-2">
                          <h1 className="overflow-auto text-sm font-semibold">
                            {person?.document?.ktpname}
                          </h1>
                          <ul className="text-xs list-disc list-inside">
                            <li>
                              Hanya file jpg, jpeg, png dan pdf yang diijinkan
                            </li>
                            <li>Ukuran maksimal file adalah 800kb</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <input
                      id="ktp"
                      name="ktp"
                      type="file"
                      onChange={() =>
                        setKtpFile({
                          name: document.getElementById("ktp").files[0].name,
                          size: document.getElementById("ktp").files[0].size,
                        })
                      }
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>
                <div className="py-2">
                  <div className="justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="w-full">
                      <div className="grid grid-cols-5 justify-start items-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">
                          Ijazah
                        </h1>
                        <div className="col-span-4 space-y-2">
                          <h1 className="overflow-auto text-sm font-semibold">
                            {person?.document?.ijazahname}
                          </h1>
                          <ul className="text-xs list-disc list-inside">
                            <li>
                              Hanya file jpg, jpeg, png dan pdf yang diijinkan
                            </li>
                            <li>Ukuran maksimal file adalah 800kb</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <input
                      id="ijazah"
                      name="ijazah"
                      type="file"
                      onChange={() =>
                        setIjazahFile({
                          name: document.getElementById("ijazah").files[0].name,
                          size: document.getElementById("ijazah").files[0].size,
                        })
                      }
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>
                <div className="py-2">
                  <div className="justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="w-full">
                      <div className="grid grid-cols-5 justify-start items-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">
                          SKCK
                        </h1>
                        <div className="col-span-4 space-y-2">
                          <h1 className="overflow-auto text-sm font-semibold">
                            {person?.document?.skckname}
                          </h1>
                          <ul className="text-xs list-disc list-inside">
                            <li>
                              Hanya file jpg, jpeg, png dan pdf yang diijinkan
                            </li>
                            <li>Ukuran maksimal file adalah 800kb</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <input
                      id="skck"
                      name="skck"
                      type="file"
                      onChange={() =>
                        setSKCKFile({
                          name: document.getElementById("skck").files[0].name,
                          size: document.getElementById("skck").files[0].size,
                        })
                      }
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>
                <div className="py-2">
                  <div className="justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="w-full">
                      <div className="grid grid-cols-5 justify-start items-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">CV</h1>
                        <div className="col-span-4 space-y-2">
                          <h1 className="overflow-auto text-sm font-semibold">
                            {person?.document?.cvname}
                          </h1>
                          <ul className="text-xs list-disc list-inside">
                            <li>
                              Hanya file jpg, jpeg, png dan pdf yang diijinkan
                            </li>
                            <li>Ukuran maksimal file adalah 800kb</li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
                  <div className="justify-start items-start my-4 space-x-2 text-sm text-gray-700">
                    <div className="w-full">
                      <div className="grid grid-cols-5 justify-start items-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">
                          Sertifikat
                        </h1>
                        <div className="col-span-4 space-y-2">
                          <h1 className="overflow-auto text-sm font-semibold">
                            {person?.document?.certificatename}
                          </h1>
                          <ul className="text-xs list-disc list-inside">
                            <li>
                              Hanya file jpg, jpeg, png dan pdf yang diijinkan
                            </li>
                            <li>Ukuran maksimal file adalah 800kb</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <input
                      id="cert"
                      name="cert"
                      type="file"
                      onChange={() =>
                        setCertFile({
                          name: document.getElementById("cert").files[0].name,
                          size: document.getElementById("cert").files[0].size,
                        })
                      }
                      accept="image/*"
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid grid-cols-1 divide-y divide-gray-300">
                <div className="flex justify-between items-center py-2">
                  <h1 className="text-xl font-semibold">Portofolio</h1>
                  <div onClick={() => openPortfolioModal()}>
                    <EditButton className="cursor-pointer hover:stroke-blue-500" />
                  </div>
                </div>
                <div className="py-2">
                  {person?.portfolio?.link ? (
                    <>
                      <div className="grid grid-cols-5 gap-2 pt-4">
                        <div className="col-span-1">
                          <p className="flex justify-between pb-2 text-sm">
                            <span>Link</span>
                            <span>:</span>
                          </p>
                          <p className="flex justify-between pb-2 text-sm">
                            <span>Deskripsi</span>
                            <span>:</span>
                          </p>
                        </div>
                        <div className="col-span-4">
                          <p className="pb-2 text-sm">
                            {person?.portfolio?.link}
                          </p>
                          <p className="pb-2 text-sm">
                            {person?.portfolio?.description}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="pb-2 text-sm">
                        Anda belum mengisi portofolio. Silahkan tambah
                        portofolio dengan klik tombol dibawah
                      </p>
                      <button
                        type="button"
                        className="inline-flex justify-center py-2 px-4 text-sm font-medium text-blue-900 bg-blue-100 rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => openPortfolioModal()}
                      >
                        Tambah
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <Transition appear show={isOpenPortfolioDetail} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closePortfolioModal}
        >
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
                <Dialog.Panel className="overflow-hidden p-8 w-full max-w-screen-md text-left align-middle bg-white rounded-2xl transition-all transform">
                  <PortfolioFormDialog portfolio={person?.portfolio} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenDocumentDetail} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDocumentModal}>
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
                <Dialog.Panel className="overflow-hidden p-8 w-full max-w-screen-md text-left align-middle bg-white rounded-2xl transition-all transform">
                  <DocumentFormDialog document={person?.document} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenBiodataDetail} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeBiodataModal}>
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
                <Dialog.Panel className="overflow-hidden p-8 w-full max-w-screen-lg text-left align-middle bg-white rounded-2xl transition-all transform">
                  <BiodataFormDialog item={person} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
