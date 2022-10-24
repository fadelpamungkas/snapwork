import { ClipboardListIcon } from "@heroicons/react/outline";

export default function CompanyFormDialog({ item }) {
  return (
    <>
      <body className="w-full text-gray-900">
        <div className="flex justify-start items-center py-2 px-4 space-x-4">
          <div className="p-2 bg-red-500 rounded">
            <ClipboardListIcon
              className="w-6 h-6 text-white"
              aria-hidden="true"
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-red-500">
              Verifikasi Perusahaan
            </h1>
            <p className="text-sm font-bold">
              Data di bawah ini merupakan data lengkap perusahaan untuk
              mendaftar sebagai member
            </p>
          </div>
        </div>
        <div className="px-2 mx-auto w-full">
          <div className="py-4 px-8 space-y-4 rounded-xl border divide-y divide-gray-300">
            <div className="py-2">
              <h1 className="pb-2 text-xl font-semibold">
                Informasi Perusahaan
              </h1>
              <p className="pb-2 text-sm">
                Silahkan isi data-data dibawah ini sesuai dengan kondisi
                perusahaan yang di wakili untuk memudahkan kami berkoordinasi
                dengan anda
              </p>
              <div className="grid grid-cols-2 space-y-4 text-sm divide-x">
                <div className="pr-12 mt-4 space-y-4">
                  <div className="space-y-2">
                    <h1>Company Name</h1>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={item.name}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1>Type of Industry</h1>
                    <input
                      id="industry"
                      type="text"
                      name="industry"
                      value={item.industrytype}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Select type of industry"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1>Company Email</h1>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={item.email}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter company email"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1>Website</h1>
                    <input
                      id="website"
                      type="text"
                      name="website"
                      value={item.website}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter website URL"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1>Company Phone Number</h1>
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      value={item.phone}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1>Company Description</h1>
                    <textarea
                      id="description"
                      type="text"
                      name="description"
                      value={item.description}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter company description"
                    />
                  </div>
                </div>
                <div className="pl-12 space-y-4">
                  <div className="space-y-2">
                    <h1>Company Country</h1>
                    <input
                      id="country"
                      type="text"
                      name="country"
                      value={item.country}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter company country"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1>Company Province</h1>
                    <input
                      id="province"
                      type="text"
                      name="province"
                      value={item.province}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter company province"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1>Company City</h1>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={item.city}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter company city"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1>Company Address</h1>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={item.address}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter company address"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1>Postal Code</h1>
                    <input
                      id="postalcode"
                      type="text"
                      name="postalcode"
                      value={item.postalcode}
                      className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                      placeholder="Enter postal code"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h1 className="pb-2 text-xl font-semibold">Informasi Officer</h1>
              <p className="pb-2 text-sm">
                Anda akan bertanggung jawab untuk setiap informasi dan
                transaksi.
              </p>
              <div className="my-4 space-y-4 text-sm">
                <div className="space-y-2">
                  <h1>Officer Name</h1>
                  <input
                    id="officername"
                    type="text"
                    name="officername"
                    value={item.officername}
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Enter officer name"
                  />
                </div>
                <div className="space-y-2">
                  <h1>Officer Email</h1>
                  <input
                    id="officeremail"
                    type="email"
                    name="officeremail"
                    value={item.officeremail}
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Enter officer email"
                  />
                </div>
                <div className="space-y-2">
                  <h1>Officer Phone Number</h1>
                  <input
                    id="officerphone"
                    type="text"
                    name="officerphone"
                    value={item.officerphone}
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Enter officer phone number"
                  />
                </div>
                <div className="space-y-2">
                  <h1>Officer Mobile Number</h1>
                  <input
                    id="officermobile"
                    type="text"
                    name="officermobile"
                    value={item.officermobile}
                    className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                    placeholder="Enter officer mobile number"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
