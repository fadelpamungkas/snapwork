import { ClipboardListIcon } from "@heroicons/react/outline";

export default function EditLowonganDialog({ item }) {
  return (
    <>
      <div className="w-full">
        <div className="px-2 mx-auto w-full">
          <div className="py-4 px-8 space-y-4 rounded-xl">
            <div className="pt-4">
              <h1 className="pb-2 text-xl font-semibold">
                Informasi Pekerjaan
              </h1>
              <hr />
              <div className="my-4 space-y-4 text-sm">
                <div className="space-y-2">
                  <h1>Nama Posisi</h1>
                  <input
                    id="nama_posisi"
                    type="text"
                    name="q"
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Nama Posisi"
                    defaultValue={item.name}
                  />
                </div>
                <div className="space-y-2">
                  <h1>Fungsi Pekerjaan</h1>
                  <input
                    id="fungsi_pekerjaan"
                    type="text"
                    name="q"
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Fungsi Pekerjaan"
                    defaultValue={item.kind}
                  />
                </div>
                <div className="space-y-2">
                  <h1>Tipe Pekerjaan</h1>
                  <input
                    id="tipe_pekerjaan"
                    type="text"
                    name="q"
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Tipe Pekerjaan"
                    defaultValue={item.type}
                  />
                </div>
                <div className="space-y-2">
                  <h1>Status Pekerjaan</h1>
                  <input
                    id="status_pekerjaan"
                    type="text"
                    name="q"
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Status Pekerjaan"
                    defaultValue={item.status}
                  />
                </div>
                <div className="space-y-2">
                  <h1>Penempatan</h1>
                  <input
                    id="penempatan_pekerjaan"
                    type="text"
                    name="q"
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Penempatan Pekerjaan"
                    defaultValue={item.placement}
                  />
                </div>
                <div className="space-y-2">
                  <h1>Lowongan</h1>
                  <input
                    id="lowongan_tersedia"
                    type="text"
                    name="q"
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Lowongan Tersedia"
                    defaultValue={item.available}
                  />
                </div>
                <div className="space-y-2">
                  <h1>Deskripsi Pekerjaan</h1>
                  <textarea
                    id="deskripsi_pekerjaan"
                    type="text"
                    name="q"
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Deskripsi Pekerjaan"
                    defaultValue={item.description}
                  />
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h1 className="pb-2 text-xl font-semibold">Syarat-Syarat</h1>
              <hr />
              <div className="my-4 space-y-4 text-sm">
                <div className="space-y-2">
                  <h1>Soft Skill</h1>
                  <input
                    id="soft_skill"
                    type="text"
                    name="q"
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Soft Skill"
                    defaultValue={item.softskill}
                  />
                </div>
                <div className="space-y-2">
                  <h1>Hard Skill</h1>
                  <input
                    id="hard_skill"
                    type="text"
                    name="q"
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Hard Skill"
                    defaultValue={item.hardskill}
                  />
                </div>
                <div className="space-y-2">
                  <h1>Jenjang Pendidikan</h1>
                  <input
                    id="jenjang_pendidikan"
                    type="text"
                    name="q"
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Jenjang Pendidikan"
                    defaultValue={item.education}
                  />
                </div>
                <div className="space-y-2">
                  <h1>Jurusan</h1>
                  <input
                    id="jurusan"
                    type="text"
                    name="q"
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Jurusan"
                    defaultValue={item.major}
                  />
                </div>
                <div className="space-y-2">
                  <h1>Syarat Khusus Lain</h1>
                  <textarea
                    id="syarat_khusus"
                    type="text"
                    name="q"
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Syarat Khusus Lain"
                    defaultValue={item.specificreq}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
