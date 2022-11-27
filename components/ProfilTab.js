export default function ProfilTab({ person }) {
  return (
    <>
      <div className="p-8 space-y-8">
        <div className="p-4 space-y-4 bg-yellow-100 rounded-lg">
          <h1 className="text-sm text-yellow-700">
            Hai {person.name}, selamat datang di website SnapWork. Update profil
            kamu dari sekarang, agar kamu lebih mudah mencari pekerjaan yang
            paling tepat. Biarkan perusahaan tahu kualifikasi dan prestasi
            terbaru kamu melalui cv!
          </h1>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-lg font-medium text-blue-500">Tentang</h1>
            {person.about ? <p>{person.about}</p> : <p> - </p>}
          </div>
          <hr />
          <div className="space-y-2">
            <h1 className="text-lg font-medium text-blue-500">
              Riwayat Pendidikan
            </h1>
            {person.education ? (
              <div className="flex justify-start items-center space-x-6">
                <div className="py-10 border-l-8 border-gray-500 border-dotted" />
                <div>
                  <p className="font-semibold">{person.education?.s1}</p>
                  <p className="text-sm text-gray-500">
                    {person.education?.s1major}
                  </p>
                  <p className="text-sm text-gray-500">
                    {person.education?.s1date}
                  </p>
                  <p className="mt-4 font-semibold">{person.education?.sma}</p>
                  <p className="text-sm text-gray-500">
                    {person.education?.smamajor}
                  </p>
                  <p className="text-sm text-gray-500">
                    {person.education?.smadate}
                  </p>
                </div>
              </div>
            ) : (
              <p> - </p>
            )}
          </div>
          <hr />
          <div className="space-y-2">
            <h1 className="text-lg font-medium text-blue-500">Portfolio</h1>
            {person.portfolio ? (
              <p>Link: {person?.portfolio}</p>
            ) : (
              <p>Link: -</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
