import Image from "next/image";
import FootNav from "../components/FootNav";
import HeadNav from "../components/HeadNav";
import PersonalLogo from "../public/personal.png";
import PerusahaanLogo from "../public/perusahaan.png";
import { useRouter } from "next/router";
import useUser from "../lib/useUser";

export default function Choose_Role() {
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
            <section className="p-16 space-y-8 bg-blue-400 rounded-xl shadow-2xl">
              <div className="flex justify-center items-center py-2 px-4">
                <div className="space-y-4 max-w-2xl text-white">
                  <h1 className="text-4xl font-bold text-center">
                    Pilih Akun Anda
                  </h1>
                  <p className="text-base text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sociis id et, et, sed. In non posuere mauris nec purus
                    porttitor risus. Feugiat est posuere velit cursus in nunc.
                    Egestas posuere scelerisque nibh elit.
                  </p>
                </div>
              </div>
              <div className="flex justify-evenly items-center p-4 space-x-4">
                <div className="flex flex-col justify-center items-center p-8 space-y-4 max-w-xs bg-white rounded-lg">
                  <div className="my-8">
                    <Image
                      src={PersonalLogo}
                      width={100}
                      height={100}
                      alt="Personal"
                      className="object-contain"
                    />
                  </div>
                  <h1 className="text-xl font-bold">PERSONAL</h1>
                  <p className="text-sm text-center">
                    Daftar sebagai personal untuk melamar pekerjaan, tes
                    psikologi dan lobortis sed sed quam. Purus vel convallis
                    platea fusce diam sem.
                  </p>
                  <button
                    className="py-2.5 px-20 text-white bg-green-500 rounded-lg transition duration-150 hover:bg-green-600"
                    onClick={handleSubmitPersonal}
                  >
                    Daftar
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center p-8 space-y-4 max-w-xs bg-white rounded-lg">
                  <div className="my-8">
                    <Image
                      src={PerusahaanLogo}
                      width={100}
                      height={100}
                      alt="Perusahaan"
                      className="m-8"
                    />
                  </div>
                  <h1 className="text-xl font-bold">PERUSAHAAN</h1>
                  <p className="text-sm text-center">
                    Daftar sebagai perusahaan untuk membuka lowongan pekerjaan
                    dan lobortis sed sed quam. Purus vel convallis platea fusce
                    diam sem.
                  </p>
                  <button
                    className="py-2.5 px-20 text-white bg-green-500 rounded-lg transition duration-150 hover:bg-green-600"
                    onClick={handleSubmitPerusahaan}
                  >
                    Daftar
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
