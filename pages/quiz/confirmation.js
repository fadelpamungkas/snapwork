import Link from "next/link";
import Image from "next/image";
import HeadNav from "../../components/HeadNav";
import FootNav from "../../components/FootNav";

export default function TestConfirmation() {
  const cbItems = [
    {
      id: "cb1",
      value:
        "Saya bersedia mengerjakan asesmen ini dengan sungguh-sungguh sesuai dengan kondisi saya sebenarnya.",
    },
    {
      id: "cb2",
      value:
        "Saya akan menggunakan hasil tes ini dengan bijaksana untuk pengembangan diri secara positif.",
    },
    {
      id: "cb3",
      value:
        "Saya berjanji tidak akan menggandakan dan menyebarluaskan tes ini, karena tes ini merupakan hasil karya cipta intelektual yang dilindungi.",
    },
    {
      id: "cb4",
      value:
        "Hasil asesmen online ini dapat diketahui oleh pihak ketiga jika memang diperlukan. Untuk melindungi data dan kerahasiaan member, Snapwork akan memberikan notifikasi dan pernyataan kesediaan via email jika ada perusahaan yang ingin melihat profilmu.",
    },
  ];
  return (
    <>
      <div className="py-8 w-full">
        <HeadNav />
        <div className="p-8 m-24 rounded-xl shadow-xl">
          <div className="bg-blue-500 rounded-xl">
            <div className="flex justify-center items-center p-8">
              <h1 className="text-3xl font-medium text-white">
                Gaya Kepribadian Persetujuan
              </h1>
            </div>
            <div className="p-8 bg-white">
              <p>
                Berikut ini akan ditampilkan sebuah tes psikologi. Tes akan
                berlangsung sekitar 9 menit. Kamu diminta memilih 1 di antara 4
                pernyataan yang ada sesuai dengan kondisi diri Kamu. Sebelumnya,
                silakan membaca pernyataan persetujuan berikut.
              </p>
              <div className="p-4">
                {cbItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-start items-center mb-2 w-full"
                  >
                    <input
                      id={item.id}
                      type="checkbox"
                      value=""
                      className="text-green-500 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={item.id}
                      className="ml-4 text-base text-gray-800"
                    >
                      {item.value}
                    </label>
                  </div>
                ))}
              </div>
              <p>
                Setelah membaca 4 syarat ketentuan di atas, saya menyatakan:
              </p>
              <div className="flex justify-center mt-8 space-x-8">
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-20 font-medium text-white bg-red-500 rounded-md border border-transparent transition duration-150 hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                >
                  Batal
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center py-2 px-20 font-medium text-white bg-green-500 rounded-md border border-transparent transition duration-150 hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                >
                  Lanjut
                </button>
              </div>
            </div>
            <div className="p-8">
              <p className="text-white whitespace-pre-line">
                {`Hak cipta isi alat tes : Sri Muliati Abdullah (2015)
Assesment ini hanya bisa dikerjakan dalam 3 bulan sekali. Kerjakanlah dengan sungguh-sungguh dan jangan lupa berdoa agar hasil assesment tersebut sesuai dengan Personality Style Kamu.`}
              </p>
            </div>
          </div>
        </div>
        <FootNav />
      </div>
    </>
  );
}
