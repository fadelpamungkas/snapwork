import Link from "next/link";
import Image from "next/image";
import HeadNav from "../../components/HeadNav";
import FootNav from "../../components/FootNav";
import PemetaanPotensiIcon from "../../public/PemetaanPotensi.svg";

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
      <div className="py-8 w-full min-h-screen">
        <HeadNav />
        <div className="m-24">
          <div className="p-16 text-black bg-white rounded-xl">
            <div className="flex flex-col justify-center items-center p-8 space-y-20 w-full">
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold text-center">
                  Tes Kepribadian Diri
                </h1>
                <p className="text-center whitespace-pre-line">
                  {`Tes Kepribadian Online merupakan program pengembangan diri dari ecc.co.id yang ditujukan bagi member, baik member alumni 
ataupun member mahasiswa. Program ini bertujuan untuk menjembatani jurang yang sering ditemui antara kompetensi yang dimiliki
para pencari kerja dengan kualifikasi kompetensi yang dibutuhkan perusahaan.`}
                </p>
              </div>
              <div className="relative py-6 px-20 bg-white rounded-lg shadow-xl w-fit">
                <div className="absolute top-0 right-0 py-4 px-3 bg-rose-500 rounded-full translate-x-6 -translate-y-6">
                  <h1 className="text-xs text-white">Free</h1>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <div>
                    <PemetaanPotensiIcon className="w-28 h-28" />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-xl font-semibold">Pemetaan Potensi</h1>
                    <p className="text-sm whitespace-pre-line">
                      {`Asesmen ini bertujuan untuk mengetahui gaya 
perilaku dan kelebihan serta kekurangan anda.`}
                    </p>
                    <button className="py-2 px-24 text-white bg-green-500 rounded-md transition duration-150 hover:bg-green-600">
                      Mulai Tes
                    </button>
                  </div>
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
