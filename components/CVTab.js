import { Tab } from '@headlessui/react'
import useUser from "../lib/useUser";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function CVTab() {
  const { user } = useUser();

  const tabItem = [
    {
      id: 1,
      name: "Data Diri",
    },
    {
      id: 2,
      name: "Dokumen",
    },
    {
      id: 3,
      name: "Portofolio",
    },
    {
      id: 4,
      name: "Video Profil",
    },
  ];
  return (
    <>
      <Tab.Group vertical as="div" className="grid grid-cols-5">
        <Tab.List className="col-span-1 border-t border-r flex flex-col items-start justify-start py-4 space-y-2 text-sm">
          {tabItem.map((item) => (
            <Tab
              key={item}
              className={({ selected }) =>
                classNames(
                  'pl-8 py-1 text-sm font-medium leading-5 text-black',
                  '',
                  selected
                    ? 'border-l-4 border-l-blue-300 '
                    : 'text-black hover:border-l-2 border-l-blue-50'
                )
              }
            >
              {item.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="col-span-4 border-t py-2 px-8">
          <Tab.Panel>
            <div>
              <div className="grid grid-cols-1 divide-y divide-gray-300">
                <div className="py-2">
                  <h1 className="text-xl font-semibold pb-2">Data Diri</h1>
                </div>
                <div className="py-2">
                  <div className="my-4 items-start justify-start space-x-2 grid grid-cols-3 text-sm text-gray-700">
                    <h1 className="text-base font-semibold">Informasi Umum</h1>
                  </div>
                  <div className="my-4 items-start justify-start space-x-2 grid grid-cols-3 text-sm text-gray-700">
                    <div className="col-span-1 flex items-start justify-between">
                      <h1>Nama Lengkap</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      {user?.isLoggedIn ? (
                        <h1>{user.userData.name}</h1>
                      ) : (
                          <h1>Fadel Pamungkas</h1>
                        )}
                    </div>
                  </div>
                  <div className="my-4 items-start justify-start space-x-2 grid grid-cols-3 text-sm text-gray-700">
                    <div className="col-span-1 flex items-start justify-between">
                      <h1>Tempat, Tanggal Lahir</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>Gorontalo, 16 November 1999</h1>
                    </div>
                  </div>
                  <div className="my-4 items-start justify-start space-x-2 grid grid-cols-3 text-sm text-gray-700">
                    <div className="col-span-1 flex items-start justify-between">
                      <h1>Jenis Kelamin</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>Laki-laki</h1>
                    </div>
                  </div>
                  <div className="my-4 items-start justify-start space-x-2 grid grid-cols-3 text-sm text-gray-700">
                    <div className="col-span-1 flex items-start justify-between">
                      <h1>Agama</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>Islam</h1>
                    </div>
                  </div>
                  <div className="my-4 items-start justify-start space-x-2 grid grid-cols-3 text-sm text-gray-700">
                    <div className="col-span-1 flex items-start justify-between">
                      <h1>Domisili</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>Jl Mulia ll No 7a, Ngaglik, Sleman, Yogyakarta</h1>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <h1 className="text-base font-semibold">Informasi Kontak</h1>
                  <div className="my-4 items-start justify-start space-x-2 grid grid-cols-3 text-sm text-gray-700">
                    <div className="col-span-1 flex items-start justify-between">
                      <h1>Nomor Ponsel</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1>+6281275151011</h1>
                    </div>
                  </div>
                  <div className="my-4 items-start justify-start space-x-2 grid grid-cols-3 text-sm text-gray-700">
                    <div className="col-span-1 flex items-start justify-between">
                      <h1>Email</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      {user?.isLoggedIn ? (
                        <h1>{ user.userData.email }</h1>
                      ) : (
                          <h1>fadelpamungkas3@gmail.com</h1>
                        )}
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <h1 className="text-base font-semibold">Profil Singkat</h1>
                  <div className="my-4 items-start justify-start space-x-2 grid grid-cols-3 text-sm text-gray-700">
                    <div className="col-span-1 flex items-start justify-between">
                      <h1>Deskripsi Diri</h1>
                      <h1>:</h1>
                    </div>
                    <div className="col-span-2">
                      <h1 className="whitespace-pre-line">{`Profesional TI yang berorientasi detail dengan pengalaman 10 tahun sebagai software support specialist dan system/network technician. Terampil dalam mengoperasikan berbagai platform, memiliki kemampuan komunikasi lisan dan verbal yang baik, dan mampu menjelaskan masalah software yang kompleks dalam istilah yang mudah dipahami.
`}</h1>
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
                  <h1 className="text-xl font-semibold pb-2">Dokumen</h1>
                  <p className="text-sm pb-2">Informasi berikut ini bersifat opsional, silakan diisi untuk kepentingan lamar online yang mewajibkan syarat-syarat dokumen harus diunggah.</p>
                </div>
                <div className="py-2">
                  <div className="my-4 items-start justify-start space-x-2 grid grid-cols-5 text-sm text-gray-700">
                    <div className="col-span-3">
                      <div className="grid grid-cols-4 items-start justify-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">KTP</h1>
                        <div className="col-span-3">
                          <p className="text-sm font-semibold overflow-auto">Foto KTP 2022.png</p>
                          <p className="text-sm">512KB</p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside text-xs">
                        <li>Hanya file jpg, jpeg, png dan pdf yang diijinkan</li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="col-span-2 m-auto flex items-center justify-center space-x-4">
                      <button className="bg-red-500 px-5 py-1 text-sm text-white rounded">Hapus</button>
                      <button className="bg-blue-500 px-5 py-1 text-sm text-white rounded">Unggah</button>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="my-4 items-start justify-start space-x-2 grid grid-cols-5 text-sm text-gray-700">
                    <div className="col-span-3">
                      <div className="grid grid-cols-4 items-start justify-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">Ijazah</h1>
                        <div className="col-span-3">
                          <p className="text-sm font-semibold overflow-auto">Foto Ijazah SMA 2022.png</p>
                          <p className="text-sm">512KB</p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside text-xs">
                        <li>Hanya file jpg, jpeg, png dan pdf yang diijinkan</li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="col-span-2 m-auto flex items-center justify-center space-x-4">
                      <button className="bg-red-500 px-5 py-1 text-sm text-white rounded">Hapus</button>
                      <button className="bg-blue-500 px-5 py-1 text-sm text-white rounded">Unggah</button>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="my-4 items-start justify-start space-x-2 grid grid-cols-5 text-sm text-gray-700">
                    <div className="col-span-3">
                      <div className="grid grid-cols-4 items-start justify-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">SKCK</h1>
                        <div className="col-span-3">
                          <p className="text-sm font-semibold overflow-auto">Foto SKCK 2022.png</p>
                          <p className="text-sm">512KB</p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside text-xs">
                        <li>Hanya file jpg, jpeg, png dan pdf yang diijinkan</li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="col-span-2 m-auto flex items-center justify-center space-x-4">
                      <button className="bg-red-500 px-5 py-1 text-sm text-white rounded">Hapus</button>
                      <button className="bg-blue-500 px-5 py-1 text-sm text-white rounded">Unggah</button>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="my-4 items-start justify-start space-x-2 grid grid-cols-5 text-sm text-gray-700">
                    <div className="col-span-3">
                      <div className="grid grid-cols-4 items-start justify-start mb-2">
                        <h1 className="col-span-1 text-lg font-semibold">CV</h1>
                        <div className="col-span-3">
                          <p className="text-sm font-semibold overflow-auto">Curriculum Vitae.png</p>
                          <p className="text-sm">512KB</p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside text-xs">
                        <li>Hanya file jpg, jpeg, png dan pdf yang diijinkan</li>
                        <li>Ukuran maksimal file adalah 800kb</li>
                      </ul>
                    </div>
                    <div className="col-span-2 m-auto flex items-center justify-center space-x-4">
                      <button className="bg-red-500 px-5 py-1 text-sm text-white rounded">Hapus</button>
                      <button className="bg-blue-500 px-5 py-1 text-sm text-white rounded">Unggah</button>
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
                  <h1 className="text-xl font-semibold pb-2">Portofolio</h1>
                  <p className="text-sm pb-2">Informasi berikut ini bersifat opsional, silakan diisi untuk kepentingan lamar online yang mewajibkan syarat-syarat dokumen harus diunggah.</p>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <div className="grid grid-cols-1 divide-y divide-gray-300">
                <div className="py-2">
                  <h1 className="text-xl font-semibold pb-2">Video Profil</h1>
                  <p className="text-sm pb-2">Informasi berikut ini bersifat opsional, silakan diisi untuk kepentingan lamar online yang mewajibkan syarat-syarat dokumen harus diunggah.</p>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  )
}
