import Image from "next/image";
import FootNav from "../components/FootNav";
import HeadNav from "../components/HeadNav";
import PersonalLogo from "../public/personal.png";
import PerusahaanLogo from "../public/perusahaan.png";
import { useRouter } from "next/router";
import useUser from "../lib/useUser";

export default function PostCompanyRegister() {
  const { user, mutateUser } = useUser();
  const router = useRouter();

  const refreshRole = async (user) => {
    const userId = user.userData.id;
    const responseRole = await fetch(
      `https://snapwork.herokuapp.com/api/user/${userId}`
    );
    const userData = await responseRole.json();

    const oldUser = user;
    oldUser.userData.role = userData.data.data.role;

    try {
      mutateUser(oldUser);
      console.log(oldUser);
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message);
      } else {
        console.error("An unexpected error happened:", error);
      }
    }
  };

  const handleSubmitPersonal = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/user/role",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: user?.userData.id,
          role: "user",
        }),
      }
    );
    const data = await response.json();
    console.log(data);

    if (data === 200) {
      if (user) refreshRole(user);
      router.push("/profile");
    } else {
      alert("failed");
    }
  };

  const handleSubmitPerusahaan = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://snapwork.herokuapp.com/api/user/role",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: user?.userData.id,
          role: "mitra",
        }),
      }
    );
    const data = await response.json();
    console.log(data);

    if (data === 200) {
      if (user) refreshRole(user);
      router.push("/company_register");
    } else {
      alert("failed");
    }
  };

  return (
    <>
      <div className="w-full text-gray-900">
        <HeadNav />
        <div className="w-full min-h-screen bg-gray-50">
          <div className="py-24 px-8 mx-auto max-w-screen-xl">
            <section className="p-16 space-y-8 bg-white rounded-xl shadow-2xl">
              <div className="flex justify-center items-center py-52 px-4">
                <div className="space-y-4 max-w-2xl text-black">
                  <h1 className="text-4xl font-bold text-center whitespace-pre-line">
                    {`Terima Kasih!
                    Anda berhasil melakukan pendaftaran`}
                  </h1>
                  <p className="text-base text-center">
                    Untuk proses selanjutnya akan dilakukan verifikasi berkas
                    perusahaan oleh Admin kami. Mohon menunggu verifikasi Admin
                    yang akan dikabarkan melalui email.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
