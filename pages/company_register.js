import FootNav from "../components/FootNav";
import HeadNav from "../components/HeadNav";
import { ClipboardListIcon } from "@heroicons/react/outline";

export default function Company_Register() {
  return (
    <>
      <body className="py-8 w-full text-gray-900">
        <HeadNav />
        <div className="w-full bg-gray-50">
          <div className="py-16 px-8 mx-auto max-w-screen-xl">
            <section className="p-2 space-y-4 bg-white rounded-xl border shadow-2xl">
              <div className="flex justify-start items-center py-2 px-4 space-x-4">
                <div className="p-2 bg-red-500 rounded">
                  <ClipboardListIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-red-500">
                    Register Perusahaan
                  </h1>
                  <p className="text-sm font-bold">
                    Silakan isi data di bawah ini dengan lengkap untuk mendaftar
                    sebagai member Employer (Perusahaan)
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
                      perusahaan yang di wakili untuk memudahkan kami
                      berkoordinasi dengan anda
                    </p>
                    <div className="grid grid-cols-2 space-y-4 text-sm divide-x">
                      <div className="pr-12 mt-4 space-y-4">
                        <div className="space-y-2">
                          <h1>Company Name</h1>
                          <input
                            id="company_name"
                            type="text"
                            name="q"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Enter company name"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Type of Industry</h1>
                          <input
                            id="industry_type"
                            type="text"
                            name="q"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Select type of industry"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Company Email</h1>
                          <input
                            id="company_email"
                            type="email"
                            name="q"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Enter company email"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Website</h1>
                          <input
                            id="company_website"
                            type="text"
                            name="q"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Enter website URL"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Company Phone Number</h1>
                          <input
                            id="company_phone"
                            type="text"
                            name="q"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Enter phone number"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Company Description</h1>
                          <textarea
                            id="company_description"
                            type="text"
                            name="q"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
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
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Enter company country"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Company Province</h1>
                          <input
                            id="company_province"
                            type="text"
                            name="q"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Enter company province"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Company City</h1>
                          <input
                            id="company_city"
                            type="text"
                            name="q"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Enter company city"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Company Address</h1>
                          <input
                            id="company_address"
                            type="text"
                            name="q"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Enter company address"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Postal Code</h1>
                          <input
                            id="company_postal_code"
                            type="text"
                            name="q"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Enter postal code"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-8">
                    <h1 className="pb-2 text-xl font-semibold">
                      Informasi Officer
                    </h1>
                    <p className="pb-2 text-sm">
                      Anda akan bertanggung jawab untuk setiap informasi dan
                      transaksi.
                    </p>
                    <div className="my-4 space-y-4 text-sm">
                      <div className="space-y-2">
                        <h1>Officer Name</h1>
                        <input
                          id="officer_name"
                          type="text"
                          name="q"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Enter officer name"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Officer Email</h1>
                        <input
                          id="officer_email"
                          type="text"
                          name="q"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Enter officer email"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Officer Phone Number</h1>
                        <input
                          id="officer_phone"
                          type="text"
                          name="q"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Enter officer phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <h1>Officer Mobile Number</h1>
                        <input
                          id="officer_mobile"
                          type="text"
                          name="q"
                          className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                          placeholder="Enter officer mobile number"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end items-end p-2">
                      <button
                        type="button"
                        className="inline-flex items-center py-2 px-8 text-white bg-green-500 rounded-lg"
                      >
                        Apply
                      </button>
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
  );
}
