import Link from "next/link";
import Image from "next/image";
import TokopediaAvatar from "../public/avtokopedia.png";

export default function CareerCard({ item }) {
  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-xl">
        <Link href={`/company/${item._id}`} passHref>
          <a className="flex">
            <div className="relative py-6 px-8 w-full">
              <div className="flex mb-6 space-x-6">
                <Image
                  src={TokopediaAvatar}
                  alt=""
                  width={90}
                  height={90}
                  className="rounded-full"
                />
                <div className="flex-col justify-start items-center m-auto">
                  <h1 className="text-xl font-semibold">{item.name}</h1>
                  <h1 className="mb-4 text-lg font-medium text-gray-500">
                    {item.city}
                    {`, `}
                    {item.province}
                    {`, `}
                    {item.country}
                  </h1>
                </div>
              </div>
              <div className="flex justify-start items-center mb-4 space-x-4">
                <div className="py-1 px-4 bg-yellow-200 rounded-xl">
                  <h1 className="text-sm text-yellow-900">Photoshop</h1>
                </div>
                <div className="py-1 px-4 bg-purple-200 rounded-xl">
                  <h1 className="text-sm text-purple-900">Desktop</h1>
                </div>
                <div className="py-1 px-4 bg-cyan-200 rounded-xl">
                  <h1 className="text-sm text-cyan-900">Permainan Video</h1>
                </div>
              </div>
              <p className="text-sm text-gray-500">{item.description}</p>
              <div className="absolute top-0 right-0">
                <div className="flex-col justify-center items-center py-6 px-8 mx-auto w-full bg-red-500 rounded-tr-xl rounded-bl-xl">
                  <h1 className="flex justify-center text-4xl font-bold text-white">
                    8
                  </h1>
                  <h1 className="text-xl text-white">Lowongan</h1>
                </div>
              </div>
            </div>
          </a>
        </Link>
        <div className="bg-blue-500 rounded-b-xl">
          {item.companyjob?.map((job, index) => (
            <Link key={index} href="/company" passHref>
              <a className="flex">
                <div className="grid grid-cols-2 gap-8 justify-between items-center py-2.5 px-8 w-full">
                  <h1 className="font-semibold text-white">{job.name}</h1>
                  <div className="flex justify-end space-x-8">
                    <h1 className="font-semibold text-white">
                      {job.available} Orang
                    </h1>
                    <h1 className="font-semibold text-white">9 hari lagi</h1>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
