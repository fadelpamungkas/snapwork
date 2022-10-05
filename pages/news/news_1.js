import Image from "next/image";
import HeaderImage from "../../public/HeaderNews1.png";
import AuthorImage from "../../public/newsauthor1.png";
import HeadNav from "../../components/HeadNav";
import FootNav from "../../components/FootNav";

export default function News1() {
  return (
    <>
      <div className="py-8 w-full text-gray-900">
        <HeadNav />
        <div className="justify-center items-center p-8 mt-12 w-full">
          <Image
            className="object-fill max-w-lg rounded-2xl shadow-2xl"
            src={HeaderImage}
            alt="Header"
          />
          <div className="flex justify-center -translate-y-72">
            <div className="w-4/5 bg-white rounded-xl shadow-xl">
              <div className="p-8 space-y-2">
                <h1 className="text-xl font-medium text-blue-500">
                  Career Innovations 2022
                </h1>
                <h1 className="text-3xl font-semibold">
                  Magang di Perusahaan? Jangan Lupa Tepat dalam Bersikap!
                </h1>
                <div className="flex py-4">
                  <Image
                    className="rounded-full"
                    width={50}
                    height={50}
                    src={AuthorImage}
                    alt="Header"
                  />
                  <div className="px-4">
                    <h1 className="font-semibold text-black">Kevin Barbosa</h1>
                    <h1 className="text-gray-700">18 Oktober 2022</h1>
                  </div>
                </div>
                <p className="text-lg whitespace-pre-line">
                  {`Saat magang, khususnya di perusahaan, kita tidak hanya dituntut untuk bekerja seperti yang dianjurkan tetapi kita juga berkewajiban  untuk menaati peraturan tidak tertulis atau norma yang pasti setiap perusahaan inginkan dari kita. Norma-norma ini sering kali tidak terlalu diperhatikan atau malah dilupakan oleh peserta magang.

Dalam Student Internship Program Guide, California, Amerika Serikat, dijelaskan apa saja poin-poin penting yang harus dilakukan oleh para peserta magang dalam bersikap dan berperilaku saat magang di sebuah perusahaan. Ini dia hal-hal yang harus kamu perhatikan!

`}
                </p>
                <div className="p-4 bg-blue-500 rounded-2xl">
                  <div className="flex space-x-4">
                    <p className="text-6xl font-bold text-white">”</p>
                    <p className="text-lg text-white whitespace-pre-line">
                      {`Sukses berarti melakukan yang terbaik yang kita bisa dengan apa yang kita miliki. Sukses adalah melakukan, bukan mendapatkan; dalam berusaha, bukan kemenangan. Sukses adalah standar pribadi, meraih yang tertinggi yang ada di dalam kita, menjadi semua yang kita bisa.`}
                    </p>
                    <p className="text-6xl font-bold text-white rotate-180">
                      “
                    </p>
                  </div>
                </div>
                <p className="text-lg whitespace-pre-line">
                  {`
1. Mematuhi kebijakan lembaga, prosedur, dan aturan yang mengatur perilaku profesional
Taati semua peraturan perusahaan seperti yang sudah tertulis dan dijelaskan oleh atasan. Hindari melakukan pelanggaran agar tidak dikenai sanksi dari perusahaan tempat kamu magang atau lebih gawatnya lagi dari universitas kamu.

2. Tepat waktu dan bekerjalah sesuai jam kerja yang disetujui atasan
Kecerdasanmu dalam mengatur waktu menjadi nilai tambah bagi pemimpin perusahaan dan rekan-rekan kerja. Memang ini hal yang kecil. Namun selalu tepat waktu, seperti saat datang ke kantor atau mengumpulkan tugas, menjadi sesuatu yang sangat berarti bagi perusahaan. 

Mereka memandangmu bersungguh-sungguh dalam menjalankan magang di perusahaan mereka, tidak sekadar main-main atau hanya memenuhi tugas perkuliahan. Keuntungan lain yang bisa kamu dapat adalah perusahaan tempat di mana kamu magang dapat tertarik dengan kesungguhan kamu dalam bekerja.

3. Memberitahu atasan jika tidak dapat hadir seperti yang direncanakan
Layaknya saat kamu masih berada di bangku sekolah, kapan saja kamu tidak masuk, sekolah selalu menganjurkan agar memberitahukan alasan dengan cara mengirimkan surat atau menelepon. Hal itu juga berlaku saat kamu ada di dunia profesional. 

Atasan kamu bagaikan guru yang selalu kamu hormati dan kadang juga ditakuti. Ada baiknya berperilaku sopan dengan memberitahukan alasan mengapa kamu tidak dapat hadir seperti yang direncanakan. Atasan kamu pun akan menaruh rasa hormat kepadamu. 

Itu dia kewajiban-kewajiban yang harus kamu perhatikan ketika menjalani magang. Praktikkan yuk agar atasan tertarik dengan kinerja kamu yang optimal dan kamu pun terus berkembang!
`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <FootNav />
      </div>
    </>
  );
}
