import Image from "next/image";
import FootNav from "../../components/FootNav";
import HeadNav from "../../components/HeadNav";
import TokopediaAvatar from "../../public/avtokopedia.png";
export default function Company() {
  return (
    <>
      <body className="w-full py-8 text-gray-900">
        <HeadNav />
        <div className="w-full bg-white">
          <div className="mx-auto max-w-screen-xl py-16 px-8">
            <section className="relative border rounded-xl border-gray-300 ">
              <div className="rounded-t-xl bg-blue-200 py-8 px-8">
                <div className="p-10">

                </div>
              </div>
              <div className="my-10">
                <div className="absolute left-8 top-20">
                  <Image
                    src={TokopediaAvatar}
                    alt=""
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="relative py-8 px-8">
                <h1 className="text-2xl mb-2 font-bold first:capitalize ">
                  PT. Tokopedia Indonesia
                </h1>
                <h1 className="whitespace-pre text-base font-medium first:capitalize">
                  Jakarta Selatan, Indonesia
                </h1>
                <div className="absolute bottom-0 right-0 py-8 px-8 space-x-4">
                  <button type="submit" className="rounded-2xl px-6 py-2">Simpan</button>
                  <button type="submit" className="rounded-2xl px-6 py-2 bg-blue-500 text-white">Lamar</button>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-3 gap-8 border-b-2 border-gray-300 py-8">
              <div className="col-span-2 space-y-8">
                <div className="border rounded-xl border-gray-300 p-8">
                  <h1 className="text-2xl font-semibold">Informasi Pekerjaan</h1>
                  <h1 className="whitespace-pre-line py-4 text-base font-normal">
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam id blandit eget nunc, in tempus tempor. Euismod ipsum ut nisi ac aliquet senectus sagittis vel semper. Egestas integer integer enim duis. Sit augue nisi interdum malesuada ornare in ultrices amet pellentesque. Rhoncus proin hac ipsum sagittis cras senectus vitae ultrices id. Pharetra diam auctor malesuada et sit nulla tempor nunc id. Tellus aliquet lectus quisque volutpat sollicitudin eget pharetra gravida tristique. Pharetra montes, rhoncus, mauris lectus quis purus enim interdum auctor. Adipiscing tellus faucibus ante ut neque. Integer tincidunt vivamus neque eu, lectus sed scelerisque sagittis, fermentum. Blandit in praesent arcu scelerisque aliquam mauris vestibulum gravida sed. Rutrum duis habitant hendrerit sed. `}
                  </h1>
                  <h1 className="text-xl font-semibold">Deskripsi Pekerjaan</h1>
                  <h1 className="whitespace-pre-line py-4 text-base font-normal">
                    {`1.  Develop iOS smart application
2. Collaborate with teams throught the design process
3. Do development process from requirement definision & analysisl, design, implementation/coding
4. Function test, application release, and maintenance.
5. Break any design problem down into viable actionable chucks and solve them with clarity and precision.`}
                  </h1>
                </div>
                <div className="border rounded-xl border-gray-300 p-8">
                  <h1 className="text-2xl font-semibold">Persyaratan</h1>
                  <h1 className="whitespace-pre-line py-4 text-base font-normal">{`{product.content} = 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam id blandit eget nunc, in tempus tempor. Euismod ipsum ut nisi ac aliquet senectus sagittis vel semper. Egestas integer integer enim duis. Sit augue nisi interdum malesuada ornare in ultrices amet pellentesque. Rhoncus proin hac ipsum sagittis cras senectus vitae ultrices id. Pharetra diam auctor malesuada et sit nulla tempor nunc id. Tellus aliquet lectus quisque volutpat sollicitudin eget pharetra gravida tristique. Pharetra montes, rhoncus, mauris lectus quis purus enim interdum auctor. Adipiscing tellus faucibus ante ut neque. Integer tincidunt vivamus neque eu, lectus sed scelerisque sagittis, fermentum. Blandit in praesent arcu scelerisque aliquam mauris vestibulum gravida sed. Rutrum duis habitant hendrerit sed.

                            - Discussion(custom order)
                            - Scope of work (custom order)
                            - Gig purchase
                            - Answering requirement questions
                            - Brainstorming for design
                            - Layout design and then revision process
                            - Finalize Layout and upload to the website or sandbox (as required)
                            - Free support for error or bugs`}</h1>
                </div>
              </div>
              <div className="colspan-1 space-y-8">
                <div className="border rounded-xl border-gray-300 p-8">
                  <h1>dsadsadsada</h1>
                </div>
                <div className="border rounded-xl border-gray-300 p-8">
                  <h1>dsadsadsada</h1>
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
