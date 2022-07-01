import Link from "next/link";
import Image from "next/image";
import TokopediaAvatar from "../public/avtokopedia.png";
export default function CareerCard() {
  return (
    <>
      <div className="w-full rounded-xl bg-white shadow-xl">
        <div className="relative w-full py-6 px-8">
          <div className="flex space-x-6 mb-6">
            <Image
              src={TokopediaAvatar}
              alt=""
              width={90}
              height={90}
              className="rounded-full"
            />
            <div className="m-auto flex-col items-center justify-start">
              <h1 className="text-xl font-semibold">PT. Tokopedia Indonesia</h1>
              <h1 className="text-lg font-medium text-gray-500 mb-4">Jakarta Selatan, Indonesia</h1>
            </div>
          </div>
          <div className="flex items-center justify-start mb-4 space-x-4">
            <div className="rounded-2xl bg-yellow-200 py-1 px-4">
              <h1 className="text-sm text-yellow-900">Photoshop</h1>
            </div>
            <div className="rounded-xl bg-purple-200 py-1 px-4">
              <h1 className="text-sm text-purple-900">Desktop</h1>
            </div>
            <div className="rounded-xl bg-cyan-200 py-1 px-4">
              <h1 className="text-sm text-cyan-900">Permainan Video</h1>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            {`
Leader in the development and publishing of games, Gameloft has established itself as one of the top innovators in its field since 2000. Gameloft creates games for all digital platforms, two of which are featured in the 10 iOS Games by All-Time Worldwide Downloads from App Annie. Gameloft operates its own established franchises such as Asphalt, Order & Chaos, Modern Combat and Dungeon Hunter and also partners ....
`}
          </p>
          <div className="absolute right-0 top-0">
            <div className="w-full mx-auto rounded-tr-xl rounded-bl-xl flex-col items-center justify-center bg-red-500 py-6 px-8">
              <h1 className="text-white text-4xl font-bold flex justify-center">
                8
              </h1>
              <h1 className="text-white text-xl">
                Lowongan
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full py-3 px-8 bg-blue-500 rounded-b-xl space-y-4">
          <div className="w-full items-center justify-between grid grid-cols-2 gap-8">
            <h1 className="text-white font-semibold">1. Senior Software Engineer - Web Platform</h1>
            <div className="flex space-x-8 justify-end">
              <h1 className="text-white font-semibold">5 Orang</h1>
              <h1 className="text-white font-semibold">9 hari lagi</h1>
            </div>
          </div>
          <div className="w-full items-center justify-between grid grid-cols-2 gap-8">
            <h1 className="text-white font-semibold">2. Data Engineer</h1>
            <div className="flex space-x-8 justify-end">
              <h1 className="text-white font-semibold">1 Orang</h1>
              <h1 className="text-white font-semibold">9 hari lagi</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
