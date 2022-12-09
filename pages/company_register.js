import FootNav from "../components/FootNav";
import HeadNav from "../components/HeadNav";
import { ClipboardListIcon } from "@heroicons/react/outline";
import useUser from "../lib/useUser";

export default function Company_Register() {
  const { user } = useUser();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://snapwork.herokuapp.com/api/company", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: user?.userData.id,
        name: event.target.name.value,
        industrytype: event.target.industry.value,
        email: event.target.email.value,
        website: event.target.website.value,
        phone: event.target.phone.value,
        description: event.target.description.value,
        country: event.target.country.value,
        province: event.target.province.value,
        city: event.target.city.value,
        address: event.target.address.value,
        postalcode: event.target.postalcode.value,
        officername: event.target.officername.value,
        officeremail: event.target.officeremail.value,
        officerphone: event.target.officerphone.value,
        officermobile: event.target.officermobile.value,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (data === 200) {
      alert("Successfully registered");
    } else {
      alert("Fail to register, please contact for any problems");
    }
  };

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
                <form id="formRegisterCompany" onSubmit={handleSubmit}>
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
                              required
                              id="name"
                              type="text"
                              name="name"
                              className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                              placeholder="Enter company name"
                            />
                          </div>
                          <div className="space-y-2">
                            <h1>Type of Industry</h1>
                            <input
                              required
                              id="industry"
                              type="text"
                              name="industry"
                              className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                              placeholder="Select type of industry"
                            />
                          </div>
                          <div className="space-y-2">
                            <h1>Company Email</h1>
                            <input
                              required
                              id="email"
                              type="email"
                              name="email"
                              className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                              placeholder="Enter company email"
                            />
                          </div>
                          <div className="space-y-2">
                            <h1>Website</h1>
                            <input
                              required
                              id="website"
                              type="text"
                              name="website"
                              className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                              placeholder="Enter website URL"
                            />
                          </div>
                          <div className="space-y-2">
                            <h1>Company Phone Number</h1>
                            <input
                              required
                              id="phone"
                              type="text"
                              name="phone"
                              className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                              placeholder="Enter phone number"
                            />
                          </div>
                          <div className="space-y-2">
                            <h1>Company Description</h1>
                            <textarea
                              required
                              id="description"
                              type="text"
                              name="description"
                              className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                              placeholder="Enter company description"
                            />
                          </div>
                        </div>
                        <div className="pl-12 space-y-4">
                          <div className="space-y-2">
                            <h1>Company Country</h1>
                            <input
                              required
                              id="country"
                              type="text"
                              name="country"
                              className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                              placeholder="Enter company country"
                            />
                          </div>
                          <div className="space-y-2">
                            <h1>Company Province</h1>
                            <input
                              required
                              id="province"
                              type="text"
                              name="province"
                              className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                              placeholder="Enter company province"
                            />
                          </div>
                          <div className="space-y-2">
                            <h1>Company City</h1>
                            <input
                              required
                              id="city"
                              type="text"
                              name="city"
                              className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                              placeholder="Enter company city"
                            />
                          </div>
                          <div className="space-y-2">
                            <h1>Company Address</h1>
                            <input
                              required
                              id="address"
                              type="text"
                              name="address"
                              className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                              placeholder="Enter company address"
                            />
                          </div>
                          <div className="space-y-2">
                            <h1>Postal Code</h1>
                            <input
                              required
                              id="postalcode"
                              type="text"
                              name="postalcode"
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
                            required
                            id="officername"
                            type="text"
                            name="officername"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Enter officer name"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Officer Email</h1>
                          <input
                            required
                            id="officeremail"
                            type="email"
                            name="officeremail"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Enter officer email"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Officer Phone Number</h1>
                          <input
                            required
                            id="officerphone"
                            type="text"
                            name="officerphone"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Enter officer phone number"
                          />
                        </div>
                        <div className="space-y-2">
                          <h1>Officer Mobile Number</h1>
                          <input
                            required
                            id="officermobile"
                            type="text"
                            name="officermobile"
                            className="py-3.5 px-4 w-full text-sm font-medium leading-none placeholder-gray-400 text-gray-800 rounded-lg border shadow-sm transition duration-150"
                            placeholder="Enter officer mobile number"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end items-end p-2">
                        <button
                          form="formRegisterCompany"
                          type="submit"
                          className="inline-flex items-center py-2 px-8 text-white bg-green-500 rounded-lg"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
        <FootNav />
      </body>
    </>
  );
}
