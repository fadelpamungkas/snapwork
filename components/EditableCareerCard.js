import Link from "next/link";
import Image from "next/image";
import TokopediaAvatar from "../public/avtokopedia.png";
export default function EditableCareerCard() {
  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-xl">
        <div className="relative py-6 px-8 w-full">
          <div className="flex mb-4 space-x-6">
            <h1 className="text-xl font-semibold">Application Designer</h1>
          </div>
          <p className="mr-28 text-sm text-gray-500">
            {`
Membuat aplikasi atau situs yang mudah digunakan oleh pengguna, dan terlihat keren, bagus, namun simple. Karena perasaan pengguna saat berinteraksi dengan interface jadi fokus utamanya.
`}
          </p>
          <div className="grid grid-cols-3 gap-2 py-4">
            <div className="flex col-span-1 justify-between items-start">
              <p>Jenjang Pendidikan</p>
              <p>:</p>
            </div>
            <div className="flex col-span-2 justify-start space-x-4">
              <div className="py-1 px-4 bg-gray-200 rounded-lg">
                <p className="text-sm text-gray-800">S1</p>
              </div>
              <div className="py-1 px-4 bg-gray-200 rounded-lg">
                <p className="text-sm text-gray-800">S2</p>
              </div>
            </div>
            <div className="flex col-span-1 justify-between items-start">
              <p>Jurusan</p>
              <p>:</p>
            </div>
            <div className="flex col-span-2 justify-start space-x-4">
              <div className="flex col-span-2 justify-start space-x-4">
                <div className="py-1 px-4 bg-gray-200 rounded-lg">
                  <p className="text-sm text-gray-800">Teknik Informatika</p>
                </div>
                <div className="py-1 px-4 bg-gray-200 rounded-lg">
                  <p className="text-sm text-gray-800">Teknik Komputer</p>
                </div>
              </div>
            </div>
            <div className="flex col-span-1 justify-between items-start">
              <p>Tipe Pekerjaan</p>
              <p>:</p>
            </div>
            <div className="flex col-span-2 justify-start space-x-4">
              <p>Pengembangan/Development</p>
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="flex-col justify-center items-center py-3 px-4 mx-auto w-full bg-red-500 rounded-tr-xl rounded-bl-xl">
              <h1 className="flex justify-center text-4xl font-bold text-white">
                8
              </h1>
              <h1 className="text-xl text-white">Lowongan</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
