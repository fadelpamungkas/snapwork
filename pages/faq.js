import Link from "next/link";
import Image from "next/image";
import HeroImage from "../public/hero.png";
import HeadNav from "../components/HeadNav";
import FootNav from "../components/FootNav";
import ReviewCard from "../components/ReviewCard";

export default function FAQ() {
  return (
    <>
      <div className="py-8 w-full text-gray-900">
        <HeadNav />
        <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200">
          <section className="flex justify-between py-28 px-8 mx-auto max-w-screen-xl">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold leading-tight">
                Bagaimana caranya saya bisa menjadi member SnapWork?
              </h1>
              <p className="mt-8 max-w-md font-light leading-relaxed text-gray-500">
                Untuk menjadi member snapwork, kamu cukup siapkan alamat email
                atau akun media sosial (Facebook, Google, LinkedIn), kemudian
                klik tombol Daftar Gratis pada halaman snapwork
              </p>
              <div className="mt-12 space-x-8">
                <Link href="/login">
                  <a className="py-3.5 px-6 font-medium text-white bg-green-500 rounded-3xl transition duration-150 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200">
                    Daftar sekarang
                  </a>
                </Link>
                <Link href="/signup">
                  <a className="py-3.5 px-6 font-medium text-green-500 rounded-3xl border border-green-500 transition duration-150 hover:shadow-xl">
                    Lebih lanjut
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <Image
                className="self-end max-w-lg shadow-2xl"
                src={HeroImage}
                alt="hero"
              />
            </div>
          </section>
          <section className="flex justify-between items-center py-8 px-8 mx-auto max-w-screen-xl"></section>
          <section className="flex flex-col flex-1 justify-center items-center py-8 px-8 mx-auto max-w-screen-xl">
            <h1 className="max-w-xl text-4xl font-bold">3 Simple Steps</h1>
            <p className="mt-8 max-w-md font-light leading-relaxed text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
              viverra lorem vulputate luctus.
            </p>
            <div className="flex gap-8 justify-between mt-20 w-full">
              <ReviewCard title="Daftarkan diri anda" />
              <div className="mb-40">
                <ReviewCard title="Cari lowongan pekerjaan" />
              </div>
              <ReviewCard title="Lamar kerja dengan mudah" />
              {/* className="transform -translate-y-12" */}
            </div>
          </section>
          <section className="flex flex-col flex-1 justify-center items-center py-28 px-8 mx-auto space-y-8 max-w-screen-xl">
            <div className="space-y-4">
              <h1 className="max-w-xl text-4xl font-bold">
                Bagaimana saya tahu lowongan atau panggilan tes itu palsu?
              </h1>
              <h1 className="max-w-xl text-base font-normal text-center text-gray-500">
                Berikut ini tips untuk memastikan kebenaran sebuah lowongan
                kerja atau panggilan tes, baik melalui website, email, maupun
                surat:
              </h1>
            </div>
            <ul className="text-base list-decimal list-outside text-left">
              <li>
                Perhatikan tata bahasa yang digunakan dan logo perusahaan yang
                dipasang. Jika ada kejanggalan, seperti bahasa tidak baku,
                gambar logo tampak hasil cropping dari tempat lain, dsb., kamu
                patut curiga.
              </li>
              <li>
                Periksa nomor telepon yang tertera pada pengumuman. Umumnya,
                perusahaan menggunakan nomor kantor perusahaan, atau nomor resmi
                petugas rekrutmen perusahaan.
              </li>
              <li>
                Cek alamat email dan domain website perusahaan yag dicantumkan
                dalam pengumuman. Sebagian besar perusahaan di Indonesia
                menggunakan domain berakhiran .co.id pada website resminya,
                namun tidak sedikit yang menggunakan .com atau .id. Telusuri
                sejenak website tersebut, dan pastikan alamat email yang tertera
                pada pengumuman menggunakan domain website yang sama.
              </li>
              <li>
                Konfirmasi ke nomor hotline atau saluran resmi perusahaan, bisa
                melalui akun resmi perusahaan di Instagram, LinkedIn, atau LINE.
                Tanyakan sejelas-jelasnya.
              </li>
              <li>
                Kamu HARUS WASPADA jika diminta untuk membayar sejumlah biaya.
                Perusahaan TIDAK BOLEH memungut biaya dari kandidat yang akan
                direkrut, sesuai Undang-undang Ketenagakerjaan yang berlaku di
                Indonesia. Catat dan laporkan jika kamu diminta untuk membayar
                sejumlah biaya dalam sebuah proses rekrutmen.
              </li>
              <li>
                HATI-HATI jika diarahkan ke sebuah agen perjalanan. Modus
                penipuan paling umum adalah dengan mengarahkan kandidat untuk
                membeli tiket pada suatu travel agent, dengan alasan nanti biaya
                tiket tersebut akan diganti. Pastikan panggilan tes yang kamu
                terima tersebut benar-benar valid, kalau perlu tanyakan ke
                banyak orang, sebelum kamu memutuskan untuk membeli tiket
                perjalanan untuk mendatangi sesi tes tersebut.
              </li>
            </ul>
          </section>
        </div>
        <FootNav />
      </div>
    </>
  );
}
