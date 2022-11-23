import Link from "next/link";
import HeadNav from "../../components/HeadNav";
import FootNav from "../../components/FootNav";
import PemetaanPotensiIcon from "../../public/PemetaanPotensi.svg";

export default function TestConfirmation() {
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
                    <Link href="/quiz/test" passHref>
                      <button className="py-2 px-12 text-white bg-green-500 rounded-md transition duration-150 hover:bg-green-600">
                        Mulai Tes
                      </button>
                    </Link>
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
