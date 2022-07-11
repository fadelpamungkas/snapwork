import FootNav from "../components/FootNav";
import HeadNav from "../components/HeadNav";
import { ClipboardListIcon } from "@heroicons/react/outline";
export default function Company_Register() {
  return (
    <>
      <body className="w-full py-8 text-gray-900">
        <HeadNav />
        <div className="w-full bg-gray-50">
          <div className="mx-auto max-w-screen-xl py-16 px-8">
            <section className="border rounded-xl bg-white p-2 shadow-2xl space-y-4">
              <div className="flex items-center py-2 px-4 justify-start space-x-4">
                <div className="p-2 bg-red-500 rounded">
                  <ClipboardListIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h1 className="text-2xl text-red-500 font-semibold">Register Perusahaan</h1>
                  <p className="text-sm font-bold">Silakan isi data di bawah ini dengan lengkap untuk mendaftar sebagai member Employer (Perusahaan)</p>
                </div>
              </div>
              <div className="mx-auto w-full px-2">
                <div className="rounded-xl px-8 py-4 space-y-4 border divide-y divide-gray-300">
                  <div className="py-2">
                    <h1 className="text-xl font-semibold pb-2">Informasi Perusahaan</h1>
                    <p className="text-sm pb-2">Silahkan isi data-data dibawah ini sesuai dengan kondisi perusahaan yang di wakili untuk memudahkan kami berkoordinasi dengan anda</p>
                    <div className="space-y-4 grid grid-cols-2 divide-x text-sm">
                      <div className="pr-12 mt-4 space-y-4">
                        <div className="space-y-2">
                          <h1>Company Name</h1>
                          <input
                            id="company_name"
                            type="text"
                            name="q"
                            className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                            placeholder="Enter company name"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Type of Industry</h1>
                          <input
                            id="industry_type"
                            type="text"
                            name="q"
                            className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                            placeholder="Select type of industry"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Company Email</h1>
                          <input
                            id="company_email"
                            type="email"
                            name="q"
                            className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                            placeholder="Enter company email"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Website</h1>
                          <input
                            id="company_website"
                            type="text"
                            name="q"
                            className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                            placeholder="Enter website URL"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Company Phone Number</h1>
                          <input
                            id="company_phone"
                            type="text"
                            name="q"
                            className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                            placeholder="Enter phone number"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Company Description</h1>
                          <textarea
                            id="company_description"
                            type="text"
                            name="q"
                            className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                            placeholder="Enter company description"
                          />
                        </div>
                      </div>
                      <div className="pl-12 space-y-4">
                        <div className="space-y-2">
                          <h1>Company Country</h1>
                          <input
                            id="company_country"
                            type="text"
                            name="q"
                            className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                            placeholder="Enter company country"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Company Province</h1>
                          <input
                            id="company_province"
                            type="text"
                            name="q"
                            className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                            placeholder="Enter company province"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Company City</h1>
                          <input
                            id="company_city"
                            type="text"
                            name="q"
                            className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                            placeholder="Enter company city"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Company Address</h1>
                          <input
                            id="company_address"
                            type="text"
                            name="q"
                            className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                            placeholder="Enter company address"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Postal Code</h1>
                          <input
                            id="company_postal_code"
                            type="text"
                            name="q"
                            className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                            placeholder="Enter postal code"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-8">
                    <h1 className="text-xl font-semibold pb-2">Informasi Officer</h1>
                    <p className="text-sm pb-2">Anda akan bertanggung jawab untuk setiap informasi dan transaksi.</p>
                    <div className="space-y-4 my-4 text-sm">
                      <div className="space-y-2">
                        <h1>Officer Name</h1>
                        <input
                          id="officer_name"
                          type="text"
                          name="q"
                          className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                          placeholder="Enter officer name"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Officer Email</h1>
                        <input
                          id="officer_email"
                          type="text"
                          name="q"
                          className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                          placeholder="Enter officer email"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Officer Phone Number</h1>
                        <input
                          id="officer_phone"
                          type="text"
                          name="q"
                          className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                          placeholder="Enter officer phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Officer Mobile Number</h1>
                        <input
                          id="officer_mobile"
                          type="text"
                          name="q"
                          className="w-full rounded-lg py-3.5 px-4 text-sm font-medium leading-none text-gray-800 placeholder-gray-400 shadow-sm transition duration-150 border"
                          placeholder="Enter officer mobile number"
                        />
                      </div>
                    </div>
                    <div className="flex items-end justify-end p-2">
                      <button type="button" className="rounded-lg px-8 py-2 bg-green-500 text-white inline-flex items-center">Apply</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <FootNav />
      </body>
    </>
  )
}
