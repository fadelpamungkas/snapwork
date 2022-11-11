import { ClipboardListIcon } from "@heroicons/react/outline";

export default function AddLowonganDialog() {
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
